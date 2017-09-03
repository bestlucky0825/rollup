import Scope from './Scope.js';
import GlobalVariable from '../variables/GlobalVariable';

export default class BundleScope extends Scope {
	findDeclaration ( name ) {
		if ( !this.variables[ name ] ) {
			this.variables[ name ] = new GlobalVariable( name );
		}

		return this.variables[ name ];
	}
}
