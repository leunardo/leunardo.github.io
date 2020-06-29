import { LitElement, customElement, html, css, property } from "lit-element";

import './app-link';
import './app-image';

@customElement('app-card')
export class AppCard extends LitElement {

    @property() cover = '';
    @property() href = '';

    static get styles() {
        return css`
            :host {
                display: block;
                padding: 10px;
                min-height: 200px;
                position: relative;
            }

            .header {
                display: block;
                height: 200px;
                width: 100%;
            }

            slot[name=title]::slotted(*) {
                margin-bottom: 0.5px;
                color: black;
            }

            slot[name=subtitle]::slotted(*) {
                color: gray;
                margin: 0;
            }

            .content {
                padding: 0 10px 0 10px;
            }

            a {
                text-decoration: none;
            }
        `
    }

    render() {
        return html`
            ${ 
                this.cover 
                    ? html`<app-link href="${this.href}">
                        <app-image fit-content class="header" path="${this.cover}"></app-image>
                    </app-link>` 
                    : ''
            }
            <div class="content">
                <app-link href="${this.href}"><slot name="title"></slot></app-link>
                <app-link href="${this.href}"><slot name="subtitle"></slot></app-link>
            </div>
        `;
    }
}