import { customElement, LitElement, html, css } from 'lit-element';


@customElement('app-introduction')
export class AppIntroduction extends LitElement {

    static styles = css`
        :host {
            display: block;
            margin-left: 100px;
            margin-bottom: 100px;
        }

        h1, h4, h3 {
            font-family: 'Montserrat', sans-serif;
            margin: 0;
        }

        h4 {
            font-size: 1rem;
            font-weight: 500;
        }

        h3 {
            font-size: 3rem;
            font-weight: 500;
        }

        h1 {
            font-size: 5rem;
        }
    `;

    render() {
        return html`
            <h4>Hey there!</h4>
            <h1>I am Leo</h1>
            <h3>Software Engineer</h3>
        `;
    }
}   