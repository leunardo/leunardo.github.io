import { LitElement, customElement, html, property, css } from "lit-element";
import { navigator } from 'lit-element-router';

@customElement('app-quote')
export class AppQuote extends navigator(LitElement) {

    @property() href = '';

    static get styles() {
        return css`
            blockquote {
                font-style: italic;
                font-size: 1.3rem;
                text-align: center;
            }

            slot[name=text]::slotted(*) {
                margin-bottom: 5px !important;
            }

            slot[name=text]::slotted(*)::before {
                content: open-quote;
            }

            slot[name=text]::slotted(*)::after {
                content: close-quote;
            }

            slot[name=cite]::slotted(*)::before {
                content: '- ';
            }
        `
    }

    render() {
        return html`
            <blockquote class="content">
                <slot name="text"></slot>
                <slot name="cite"></slot>
            </blockquote>
        `
    }
}