import { BaseComponentProps } from "../types/types";
import { SizeHeight, SizeWidthPercent } from "../types/types";
import { GridFlex } from "./GridFlex";

export class Select {
    private options: Array<{ value: string; label: string }>;
    private value: string;
    private onChange: (value: string) => void;
    private props: BaseComponentProps;

    constructor(options: Array<{ value: string; label: string }>, value: string, onChange: (value: string) => void, props: BaseComponentProps) {
        this.options = options;
        this.value = value;
        this.onChange = onChange;
        this.props = props;
    }

    render(): HTMLElement {

        const labelElement = document.createElement('label');
        labelElement.innerText = this.props.label;
        labelElement.style.width = '150px';
        labelElement.style.display = 'inline-block';

        const selectElement = document.createElement('select');
        
        const size = this.getSize();
        selectElement.style.width = size.width;
        selectElement.style.height = size.height;
        selectElement.style.borderColor = this.props.borderColor || 'black';
        selectElement.style.borderRadius = this.props.borderRadius || '4px';

        for (const option of this.options) {
            const optionElement = document.createElement('option');
            optionElement.value = option.value;
            optionElement.innerText = option.label;

            if (option.value === this.value) {
                optionElement.selected = true;
            }

            selectElement.appendChild(optionElement);
        }

        selectElement.addEventListener('change', () => {
            this.value = selectElement.value;
            this.onChange(this.value);
        });

        const div = new GridFlex([labelElement, selectElement]);
        
        return div.render();
    }

    
    
    private getSize(): {width: string, height: string} {
        return {
            width: this.props.size ? SizeWidthPercent[this.props.size] : SizeWidthPercent.medium,
            height: this.props.size ? SizeHeight[this.props.size] : SizeHeight.medium
        }
    }
}