import {Element as PolymerElement}
    from '../node_modules/@polymer/polymer/polymer-element.js';

export class MoveMoney extends PolymerElement {
    
    static get template() {
        return '<div>This is [[name]].</div>'
    }

    constructor() {
        super();
        this.name = 'move-money';
    }

    static get properties() {
        name: {
            Type: String
        }
    }
}

customElements.define('move-money', MoveMoney);