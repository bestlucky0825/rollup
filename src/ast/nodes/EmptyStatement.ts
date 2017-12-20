import Statement from './shared/Statement';

export default class EmptyStatement extends Statement {
	type: 'EmptyStatement';

	render (code) {
		if (
			this.parent.type === 'BlockStatement' ||
			this.parent.type === 'Program'
		) {
			code.remove(this.start, this.end);
		}
	}
}
