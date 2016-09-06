import Node from '../Node.js';
import { UNKNOWN } from '../values.js';

// TODO DRY this out
export default class IfStatement extends Node {
	bind ( scope ) {
		if ( this.module.bundle.treeshake ) {
			if ( this.testValue === UNKNOWN ) {
				super.bind( scope );
			}

			else if ( this.testValue ) {
				this.consequent.bind( scope );
				this.alternate = null;
			} else if ( this.alternate ) {
				this.alternate.bind( scope );
				this.consequent = null;
			}
		}

		else {
			super.bind( scope );
		}
	}

	initialise ( scope ) {
		this.testValue = this.test.getValue();

		if ( this.module.bundle.treeshake ) {
			if ( this.testValue === UNKNOWN ) {
				super.initialise( scope );
			}

			else if ( this.testValue ) {
				this.consequent.initialise( scope );
			} else if ( this.alternate ) {
				this.alternate.initialise( scope );
			}
		}

		else {
			super.initialise( scope );
		}
	}

	render ( code, es ) {
		if ( this.module.bundle.treeshake ) {
			if ( this.testValue === UNKNOWN ) {
				super.render( code, es );
			}

			else {
				code.overwrite( this.test.start, this.test.end, JSON.stringify( this.testValue ) );

				// TODO if no block-scoped declarations, remove enclosing
				// curlies and dedent block (if there is a block)

				if ( this.testValue ) {
					code.remove( this.start, this.consequent.start );
					code.remove( this.consequent.end, this.end );
					this.consequent.render( code, es );
				} else {
					code.remove( this.start, this.alternate ? this.alternate.start : this.next || this.end );
					if ( this.alternate ) this.alternate.render( code, es );
				}
			}
		}

		else {
			super.render( code, es );
		}
	}
}
