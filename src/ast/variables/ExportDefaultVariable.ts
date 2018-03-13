import LocalVariable from './LocalVariable';
import ExportDefaultDeclaration from '../nodes/ExportDefaultDeclaration';
import FunctionDeclaration from '../nodes/FunctionDeclaration';
import ClassDeclaration from '../nodes/ClassDeclaration';
import Identifier from '../nodes/Identifier';
import Variable from './Variable';

export function isExportDefaultVariable(variable: Variable): variable is ExportDefaultVariable {
	return variable.isDefault;
}

export default class ExportDefaultVariable extends LocalVariable {
	isDefault: true;
	hasId: boolean;
	private _original: Variable;

	constructor(name: string, exportDefaultDeclaration: ExportDefaultDeclaration) {
		super(name, exportDefaultDeclaration, exportDefaultDeclaration.declaration);
		this.isDefault = true;
		this.hasId = !!(<FunctionDeclaration | ClassDeclaration>exportDefaultDeclaration.declaration)
			.id;
	}

	addReference(identifier: Identifier) {
		this.name = identifier.name;
		if (this._original) {
			this._original.addReference(identifier);
		}
	}

	getName(reset?: boolean) {
		if (!reset && this.safeName) return this.safeName;
		if (this._original && !this._original.isReassigned) return this._original.getName();
		return this.name;
	}

	referencesOriginal() {
		return this._original && !this._original.isReassigned;
	}

	getOriginalVariableName() {
		return this._original && this._original.getName();
	}

	setOriginalVariable(original: Variable) {
		this._original = original;
	}
}
