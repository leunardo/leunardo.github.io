import { LitElement, customElement, html, css } from "lit-element";

import '../components/app-link';
import '../components/app-card';

@customElement('app-home')
export class AppHome extends LitElement {

    posts: any[] = [];

    static get styles() {
        return css`
            :host {
                display: block;
                margin: auto;
                width: 60%;
            }

            @media screen and (max-width: 1024px) {
                :host {
                    width: 80%;
                }
            }
        `;

    }

    constructor() {
        super();
        this.posts = [
            {
                href: 'post/2',
                cover: 'https://image.freepik.com/vetores-gratis/fundo-abstrato-escuro-com-camadas-de-sobreposicao-luxo-dourado-reluz-pontos-decoracao-elemento-luxo_98702-350.jpg',
                title: 'How is the home page.',
                subtitle: 'This is just the subtitle.'
            }
        ]
    }

    render() {
        return html`
            <main>
                ${this.posts.map(this.renderPost)}
            </main>
        `
    }

    private renderPost(post) {
        return html`
            <app-card
                href="${post.href}"
                cover="${post.cover}">
                <h2 slot="title">${post.title}</h2>
                <p slot="subtitle">${post.subtitle}</p>
            </app-card>
        `;
    }
}