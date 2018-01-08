import TemplateElement from './TemplateElement';
import MagicString from 'magic-string';
import { ExpressionBase, ExpressionNode } from './shared/Expression';

export default class TemplateLiteral extends ExpressionBase {
	type: 'TemplateLiteral';
	quasis: TemplateElement[];
	expressions: ExpressionNode[];

	render (code: MagicString, es: boolean) {
		(<any> code).indentExclusionRanges.push([this.start, this.end]); // TODO TypeScript: Awaiting PR
		super.render(code, es);
	}
}
