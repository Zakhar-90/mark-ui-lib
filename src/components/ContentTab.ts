export class ContentTab {
    private elements: HTMLElement[]

    constructor(elements: HTMLElement[]) {
        this.elements = elements
    }

    render(): HTMLElement {
        const div = document.createElement('div')

        div.append(...this.elements)

        return div
    }
}