import { LitElement, customElement, html, property, css } from "lit-element";

@customElement('app-image')
export class AppImage extends LitElement {

    @property() path = '';

    static get styles() {
        return css`
            :host {
                display: block;
                text-align: center;
            }

            img {
                max-width: 100%;
                width: fit-content;
            }

            :host([cover]) img {
                width: 100%;
                height: 50vh;
                object-fit: cover;
                object-position: center;
                display: block;
                margin: auto;
            }
        `
    }
    
    private src: string;

    firstUpdated() {
        const storage = (window as any).firebase.storage();
        storage.ref(this.path).getDownloadURL().then(url => {
            this.src = url;
            this.performUpdate();
        });
    }

    render() {
        return html`
            <img src="${this.src}">
        `
    }

}