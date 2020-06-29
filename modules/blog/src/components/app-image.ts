import { LitElement, customElement, html, property } from "lit-element";

@customElement('app-image')
export class AppImage extends LitElement {

    @property() path = '';
    
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