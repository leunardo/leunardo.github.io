import { customElement, LitElement, html, css } from 'lit-element';


@customElement('app-menu')
export class AppMenu extends LitElement {

    static styles = css`
        ul {
            display: flex;
            flex-direction: row;
            margin: 0;
        }
        li {
            list-style: none;
            font-family: 'Montserrat', sans-serif;
            font-size: 2rem;
            font-weight: bold;
        }
    `;

    render() {
        return html`
            <ul>
                <li>Blog</li>
            </ul>
        `;
    }
}   