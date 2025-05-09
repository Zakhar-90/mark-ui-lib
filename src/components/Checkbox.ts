import { BaseComponentProps } from "../types/types";
import { SizeHeight, SizeWidth } from "../types/types";

export class Checkbox {
    private checked: boolean;
    private onChange: (checked: boolean) => void;
    private props: BaseComponentProps

    constructor(checked: boolean, onChange: (checked: boolean) => void, props: BaseComponentProps) {
        this.checked = checked;
        this.onChange = onChange;
        this.props = props;
    }    

    render(): HTMLElement {
        const label = document.createElement('label');
        label.style.display = 'flex';
        label.style.alignItems = 'center';

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = this.checked;
        const size = this.getSize();
        input.style.width = size.width;
        input.style.height = size.height;
        input.style.borderColor = this.props.borderColor || 'black';
        input.style.borderRadius = this.props.borderRadius || '4px';

        input.addEventListener('change', () => {
            this.checked = input.checked;
            this.onChange(this.checked);
        });

        const span = document.createElement('span');
        if (this.props.label) {
            span.innerText = this.props.label;
            span.style.marginLeft = '8px';
        }

        label.appendChild(input);
        label.appendChild(span);

        return label;
    }

    private getSize(): {width: string, height: string} {
        return {
            width: this.props.size ? SizeWidth[this.props.size] : SizeWidth.medium,
            height: this.props.size ? SizeHeight[this.props.size] : SizeHeight.medium
        }
    }
}