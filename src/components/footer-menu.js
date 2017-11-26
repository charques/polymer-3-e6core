import {Element as PolymerElement}
    from '../../node_modules/@polymer/polymer/polymer-element.js';

export class FooterMenu extends PolymerElement {
    
    static get template() {
        return 'Footer'
    }

    constructor() {
        super();
        this.name = 'footer-menu';
    }

    static get properties() {
        name: {
            Type: String
        }
    }
}

customElements.define('footer-menu', FooterMenu);