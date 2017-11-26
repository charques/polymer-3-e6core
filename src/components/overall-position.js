import {Element as PolymerElement}
    from '../node_modules/@polymer/polymer/polymer-element.js';

export class OverallPosition extends PolymerElement {

    static get template() {
        return '<div>This is [[name]].</div>'
    }

    constructor() {
        super();
        this.name = 'overall-position';
    }

    static get properties() {
        name: {
            Type: String
        }
    }
}

customElements.define('overall-position', OverallPosition);