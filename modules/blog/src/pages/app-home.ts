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


    firstUpdated() {
        const db = (window as any).firebase.firestore();

        const postsRef =  db.collection('posts-preview');
        postsRef
            .get()
            .then(snapshots => {
                snapshots.forEach(snapshot => {
                    this.posts.push({...snapshot.data(), id: snapshot.id })
                })
                this.performUpdate();
            });
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
                href="post/${post.id}"
                cover="posts/${post.id}/${post.coverPath}">
                <h2 slot="title">${post.title}</h2>
                <p slot="subtitle">${post.subtitle}</p>
            </app-card>
        `;
    }
}