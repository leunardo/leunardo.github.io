import { LitElement, customElement, html, property, css } from "lit-element";
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

import '../components/app-link';
import '../components/app-card';
import '../components/app-codesample';
import '../components/app-quote';

@customElement('app-post')
export class AppPost extends LitElement {
    @property() id;

    post: {
        article: string;
        title: string;
        subtitle: string;
        cover: string;
    };

    static get styles() {
        return css`
            .cover {
                width: 100%;
                height: 50vh;
                object-fit: cover;
                object-position: center;
                display: block;
                margin: auto;
            }

            .content {
                width: 60%;
                margin-left: auto;
                margin-right: auto;
            }

            .title {
                color: black;
                font-size: 3rem;
                margin-bottom: 0;
            }

            .subtitle {
                color: gray;
                font-size: 1.5rem;
                margin-top: 5px;
            }

            .title,
            .subtitle {
                font-family: 'Montserrat';
                line-height: initial;
            }

            article {
                font-family: 'Merriweather';
                font-size: 1.1rem;
                line-height: 2rem;
            }

            p {
                margin-top: 1rem;
                margin-bottom: 2rem;
            }

            hr {
                border: none;
                text-align: center;
            }

            hr::before {
                content: '...';
                font-size: 2rem;
            }

        `;
    }

    firstUpdated() {
        let db = (window as any).firebase.firestore();

        const postsRef =  db.collection('posts');
        postsRef
            .doc(this.id)
            .get()
            .then(snapshot => {
                const data = snapshot.data();
                this.post = data;
                this.performUpdate();
            })
    }

    render() {
        return html`
            <article>
                <header>
                    <h1 class="content title">${this.post?.title}</h1>
                    <h5 class="content subtitle">${this.post?.subtitle}</h5>
                    <img class="cover" src="${this.post?.cover}">
                </header>

                ${unsafeHTML(this.post?.article)}

            </article>

            <app-link href="/">Go to home</app-link>

        `
    }
}