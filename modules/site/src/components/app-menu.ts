import { customElement, LitElement, html, css } from 'lit-element';


@customElement('app-menu')
export class AppMenu extends LitElement {

    static styles = css`
        ul {
            display: flex;
            flex-direction: row;
        }

        li {
            list-style: none;
            font-family: 'Montserrat', sans-serif;
            font-size: 1.5rem;
            font-weight: bold;
            margin: 0 15px 0 15px;
            
            background: linear-gradient(90deg, rgba(138,35,135,1) 0%, rgba(233,64,87,1) 35%, rgba(242,113,33,1) 100%);
            background-size: 200%;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        a {
            text-decoration: none;
        }

        li:hover {
            animation: flowingGradient 5s ease infinite;
        }

        @keyframes flowingGradient {
            0% { background-position:0% 50% }
            50% { background-position:100% 50% }
            100% { background-position:0% 50% }
        }
    `;

    render() {
        return html`
            <ul>
                <li><a href="#">Blog</a></li>
                <li><a rel="noreferer noopener" href="https://www.linkedin.com/in/leunardo" target="_blank">LinkedIn</a></li>
                <li><a rel="noreferer noopener" href="https://github.com/leunardo" target="_blank">GitHub</a></li>
                <li><a rel="noreferer noopener" href="https://stackoverflow.com/users/8296744/leonardo-alves" target="_blank">Stack Overflow</a></li>
                <li><a href="mailto://leunardosevla@gmail.com?subject=Contact Me">Contact</a></li>
            </ul>
        `;
    }
}   