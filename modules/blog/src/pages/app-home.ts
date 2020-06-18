import { LitElement, customElement, html } from "lit-element";
import '../components/app-link';

@customElement('app-home')
export class AppHome extends LitElement {
    render() {
        return html`
            This is the home page.

            <app-link href="post/2">Go to post 2</app-link>
        `
    }
}