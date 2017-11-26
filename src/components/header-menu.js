import {Element as PolymerElement}
    from '../../node_modules/@polymer/polymer/polymer-element.js';

export class HeaderMenu extends PolymerElement {
    
    static get template() {
        return 'Menu' +
            '<ul>\n' +
            '  <li><a href="#/overall-position">Overall Position</a></li>\n' +
            '  <li><a href="#/move-money">Move Money</a></li>\n' +
            '</ul>'
    }

    constructor() {
        super();
        this.name = 'header-menu';
    }

    static get properties() {
        name: {
            Type: String
        }
    }
}

customElements.define('header-menu', HeaderMenu);