import { LitElement, html, customElement, property } from 'lit-element';
import { router } from 'lit-element-router';
import './app-outlet';

import '../pages/app-home';
import '../pages/app-post';

@customElement('app-router')
export class AppRouter extends router(LitElement) {

    @property() route = '';
    @property() params: any = {};
    @property() query = {};
    @property() data = {};
    

    static get routes() {
        return [
            {
                name: 'post',
                pattern: 'post/:id'
            },
            {
                name: 'home',
                pattern: '/'
            },
            {
                name: 'not-found',
                pattern: '*'
            }
        ]
    }

    router(route, params, query, data) {
        this.route = route;
        this.params = params;
        this.query = query;
        console.log(
`route=${route}
params=${JSON.stringify(params)}
query=${JSON.stringify(query)},
data=${JSON.stringify(data)}
`)
    }


    render() {
        return html`
            <!-- <app-link href="/post/2">ssss<app-link> -->
            <h1>Blog Leonardo Alves</h1>
            

            <app-outlet active-route="${this.route}">
                <app-home route="home"></app-home>
                <app-post route="post" .id=${this.params.id}></app-post>
                <h1 route="not-found">Not found!</h1>
            </app-outlet>
        `;
    }

}