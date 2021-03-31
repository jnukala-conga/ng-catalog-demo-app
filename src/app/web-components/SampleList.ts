import { LitElement, html } from '@polymer/lit-element';

class SampleList extends LitElement {
    listName: string;
    items: string[];
    // this defines properties for the component
    static get properties() {
        return {
            listName: {type: String},
            items: {type: Array}
        }
    }

    constructor() {
        super();
        this.listName = 'default';
        this.items = ['orange', 'banana', 'apple'];
    }

    render() {
        return html`
        <h2>  ${this.listName} list </h2>
        <div><ul> ${this.items.map(i => html`<li>${i}</li>`)} </ul></div>`
    }
}

customElements.define('sample-list', SampleList);