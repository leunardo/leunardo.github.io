import { customElement, LitElement, html, css, property } from 'lit-element';


@customElement('app-button')
export class AppButton extends LitElement {

    @property() href: string;

    static styles = css`
        button, a {
            font-family: 'Montserrat';
            background: linear-gradient(90deg, rgba(138,35,135,1) 0%, rgba(233,64,87,1) 35%, rgba(242,113,33,1) 100%);
            background-size: 400% 400%;
            border: none;
            box-sizing: border-box;
            border-radius: 7px;
            color: black; 
            cursor: pointer;
            padding: 9px;
            text-decoration: none;
        }

        button:hover, a:hover {
            animation: flowingGradient 5s ease infinite;
            box-shadow: inset 0px 0px 0px 2px black;
        }

        @keyframes flowingGradient {
            0% { background-position:0% 50% }
            50% { background-position:100% 50% }
            100% { background-position:0% 50% }
        }
    `;

    // Render element DOM by returning a `lit-html` template.
    render() {

        return this.href
            ? html`<a href="${this.href}" target="_blank"><slot></slot></a>`
            : html`<button type="button"><slot></slot></button>`
    }
}   
