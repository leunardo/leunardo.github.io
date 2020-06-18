import { LitElement, html, customElement } from "lit-element";
import { outlet } from "lit-element-router";

@customElement('app-outlet')
export class AppOutlet extends outlet(LitElement) {

    render() {
        return html`
            <slot></slot>
        `
    }
}