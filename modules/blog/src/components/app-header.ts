import { LitElement, customElement, html, css } from "lit-element";
import './app-link';

@customElement('app-header')
export class AppHeader extends LitElement {

    static get styles() {
        return css`
            :host {
                display: flex;
                flex: 1;
            }

            header {
                background: black;
                font-size: 1.5rem;
                margin-bottom: 50px;
                padding: 10px 10px 10px 20px;
                width: 100%;
            }

            app-link:hover {
                animation: flowingGradient 5s ease infinite;
                box-shadow: inset 0px 0px 0px 2px black;
            }

            @keyframes flowingGradient {
                0% { background-position:0% 50% }
                50% { background-position:100% 50% }
                100% { background-position:0% 50% }
            }

            app-link {
                background: linear-gradient(90deg, rgba(138,35,135,1) 0%, rgba(233,64,87,1) 35%, rgba(242,113,33,1) 100%);
                background-clip: text;
                background-size: 200%;
                color: white;
                text-decoration: none;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        `;
    }


    render() {
        return html`
            <header>
                <app-link href="/">Leo's Blog</app-link>
            </header>
        `
    }
}