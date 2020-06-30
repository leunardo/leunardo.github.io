import { LitElement, html, customElement, property, css } from 'lit-element';
import { router } from 'lit-element-router';
import './app-outlet';

import '../pages/app-home';
import '../pages/app-post';
import '../components/app-header';
import '../components/app-footer';

@customElement('app-router')
export class AppRouter extends router(LitElement) {

    @property() route = '';
    @property() params: any = {};
    @property() query = {};
    @property() data = {};

    static get styles() {
        return css`    
            :host {
                display: flex;
                height: 100%;
                flex-direction: column;
            }   

            app-outlet {
                flex: 20;
            }
        `
    }
    

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
    }


    render() {
        return html`
            <app-header></app-header>

            <app-outlet active-route="${this.route}">
                <app-home route="home"></app-home>
                <app-post route="post" .id=${this.params.id}></app-post>
                <h1 route="not-found">Not found!</h1>
            </app-outlet>

            <app-footer></app-footer>
        `;
    }

}