import { LitElement, customElement, html, property, css } from "lit-element";
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

import '../components/app-link';
import '../components/app-card';
import '../components/app-codesample';
import '../components/app-quote';
import '../components/app-image';

@customElement('app-post')
export class AppPost extends LitElement {
    @property() id;

    post: {
        article: string;
        title: string;
        subtitle: string;
        coverPath: string;
    };

    static get styles() {
        return css`
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

            @media screen and (max-width: 800px) {
                .content {
                    width: 80%;
                }
            }

            @media screen and (max-width: 600px) {
                .content {
                    width: 90%;
                }
            }

        `;
    }

    performUpdate(refresh = true) {
        super.performUpdate();
        if (this.id && refresh) {
            const db = (window as any).firebase.firestore();
    
            const postsRef =  db.collection('posts');
            postsRef
                .doc(this.id)
                .get()
                .then(snapshot => {
                    if (snapshot.exists) {
                        const data = snapshot.data();
                        this.post = data;
                        this.performUpdate(false);
                    } else {
                        window.history.pushState({}, null, 'not-found');
                        window.dispatchEvent(new CustomEvent('route'));
                    }
                });
        }
    }

    render() {
        return html`
            <article>
                <header>
                    <h1 class="content title">${this.post?.title}</h1>
                    <h5 class="content subtitle">${this.post?.subtitle}</h5>
                    ${ this.post?.coverPath && html`<app-image cover path="posts/${this.id}/${this.post.coverPath}"></app-image>` }
                </header>

                ${unsafeHTML(this.post?.article)}

            </article>
        `
    }
}