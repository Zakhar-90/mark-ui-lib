export class GridFlex {
    private nodes: Array<Node>
    
    constructor(nodes: Array<Node>) {
        this.nodes = nodes;
    }

    render(): HTMLElement {
        const div = document.createElement('div')
        div.style.display = 'flex'

        div.append(...this.nodes)

        return div
    }

}