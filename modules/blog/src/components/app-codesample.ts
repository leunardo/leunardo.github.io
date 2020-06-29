import { LitElement, customElement, html, property, css, unsafeCSS } from "lit-element";
import hljs from 'highlight.js/lib/core';
import highlightCss from 'highlight.js/styles/vs2015.css';

@customElement('app-codesample')
export class AppCodesample extends LitElement {

    @property() language = '';
    @property() fileName = '';

    static get styles() {
        return [
            unsafeCSS(highlightCss),
            css`
                :host {
                    display: block;
                }

                pre {
                    margin: 0 0 1em 0;
                }
            `
        ]
    }

    firstUpdated() {
        import(`highlight.js/lib/languages/${this.language}`).then(module => {
            hljs.registerLanguage(this.language, module.default);
            const block = this.shadowRoot.querySelector('pre code');
            const [slotContent] = this.shadowRoot.querySelector('slot').assignedNodes();

            // attach code written into code manually in order
            // to let highlight.js style the block, otherwise the slot value
            // would not be found by the lib
            block.appendChild(slotContent);
            hljs.highlightBlock(block);
        })
    }

    render() {
        return html`
            <slot style="display: none;"></slot>
            <small><i>${this.fileName}</i></small>
            <pre><code class="content ${this.language}"></code></pre>
        `
    }
}