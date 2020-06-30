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

            .links .link {
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

            .link {
                color: white;
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
                        <a class="link" href="https://leonardoalves.dev">About me</a>
                        <a class="link" href="mailto://leo@leonardoalves.dev">Contact</a>
                        <app-link class="link" href="/">Home</app-link>
                    </div>
                </div>
                <p class="copyright">${new Date().getFullYear()}  - Leonardo de Melo Alves. All rights reserved.</p>
            </footer>
        `;
    }
}