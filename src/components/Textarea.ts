import { BaseComponentProps, SizeNumber, SizeWidthPercent } from "../types/types";
import { GridFlex } from "./GridFlex";

export class Textarea {
  private value: string;
  private onChange: (value: string) => void;
  private props: BaseComponentProps;

  constructor(
    value: string,
    onChange: (value: string) => void,
    props: BaseComponentProps
  ) {
    this.value = value;
    this.onChange = onChange;
    this.props = props;
  }

  render(): HTMLElement {

    const labelElement = document.createElement("label");
    labelElement.innerText = this.props.label;
    labelElement.style.width = '150px';
    labelElement.style.display = 'inline-block';

    const textareaElement = document.createElement("textarea");

    textareaElement.value = this.value;

    const size = this.getSize();
    textareaElement.style.width = size.width;
    textareaElement.style.height = size.height;
    textareaElement.style.borderColor = this.props.borderColor || "black";
    textareaElement.style.borderRadius = this.props.borderRadius || "4px";

    textareaElement.addEventListener("input", () => {
      this.value = textareaElement.value;
      this.onChange(this.value);
    });

    const div = new GridFlex([labelElement, textareaElement]);

    return div.render();
  }

  private getSize(): { width: string; height: string } {
    return {
      width: this.props.size ? SizeWidthPercent[this.props.size] : SizeWidthPercent.medium,
      height: (this.props.size ? SizeNumber[this.props.size] : SizeNumber.medium) * 5 + 'px',
    };
  }
}
