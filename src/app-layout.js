import {Element as PolymerElement}
    from '../node_modules/@polymer/polymer/polymer-element.js';
import {HeaderMenu} from './components/header-menu.js';
import {FooterMenu} from './components/footer-menu.js';

export class AppLayout extends PolymerElement {
    
    static get template() {
        return '<header-menu></header-menu>' +
            '<slot name="content"></slot>' +
            '<footer-menu></footer-menu>'
    }

    constructor() {
        super();
        this.name = 'app-layout';
    }

    static get properties() {
        name: {
            Type: String
        }
    }
}

customElements.define('app-layout', AppLayout);