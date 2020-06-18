import { LitElement, customElement, html, property } from "lit-element";
import { navigator } from 'lit-element-router';

@customElement('app-link')
export class AppLink extends navigator(LitElement) {

    @property() href = '';

    render() {
        return html`
            <a href="${this.href}" @click="${this.linkClick}">
                <slot></slot>
            </a>
        `
    }

    linkClick(event: Event) {
        event.preventDefault();
        this.navigate(this.href);
    }
}