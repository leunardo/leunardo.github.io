import { LitElement, customElement, html, css } from "lit-element";
import './app-link';

@customElement('app-footer')
export class AppFooter extends LitElement {

    static get styles() {
        return css`
            :host {
                display: flex;
                flex: 1;
            }

            footer {
                background: black;
                color: white;
                padding: 30px 10px 10px 30px;
                margin-top: 50px;
                width: 100%;
            }

            .footer-about {
                display: flex;
            }
            
            .links {
                display: flex;
                flex-direction: column;
                line-height: 25px;
                margin-left: 50px;
            }

            .links app-link {
                font-weight: 300;
            }

            .the-end {
                font-size: 1.7rem;
                margin: 0;
            }
            
            .copyright {
                text-align: center;
                margin: 0;
            }

            app-link {
                text-decoration: underline;
            }
        `
    }

    render() {
        return html`
            <footer>
                <div class="footer-about">
                    <div>
                        <p class="the-end">Leo's Blog</p>
                        <small>That's all folks ;)</small>
                    </div>
                    <div class="links">
                        <b>Links</b>
                        <app-link href="https://leonardoalves.dev">About me</app-link>
                        <app-link href="/">Home</app-link>
                    </div>
                </div>
                <p class="copyright">${new Date().getFullYear()}  - Leonardo de Melo Alves. All rights reserved.</p>
            </footer>
        `;
    }
}