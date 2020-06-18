import { LitElement, customElement, html, property } from "lit-element";
import '../components/app-link';

@customElement('app-post')
export class AppPost extends LitElement {
    @property() id;

    render() {
        return html`
            This is the POSTS ${this.id}

            <app-link href="/">Go to home</app-link>
        `
    }
}