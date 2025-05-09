import { BaseComponentProps } from "../types/types";
import { SizeHeight, SizeWidthPercent } from "../types/types";
import { GridFlex } from "./GridFlex";

export class Input {
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

    const inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.value = this.value;

    const size = this.getSize();
    inputElement.style.width = size.width;
    inputElement.style.height = size.height;
    inputElement.style.borderColor = this.props.borderColor || "black";
    inputElement.style.borderRadius = this.props.borderRadius || "4px";

    inputElement.addEventListener("input", () => {
      this.value = inputElement.value;
      this.onChange(this.value);
    });

    const div = new GridFlex([labelElement, inputElement]);

    return div.render();
  }

  private getSize(): { width: string; height: string } {
    return {
      width: this.props.size
        ? SizeWidthPercent[this.props.size]
        : SizeWidthPercent.medium,
      height: this.props.size ? SizeHeight[this.props.size] : SizeHeight.medium,
    };
  }
}
