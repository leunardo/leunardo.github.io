import { isAboutOpen, showAbout  } from './about';
import { contactAnchor, converter, loadFile } from './main';

const contact = document.getElementById('contact');
let isContactOpen = false;

function showContact(): void {
    const children = [].slice.call(contact.children);

    if (isAboutOpen) showAbout();

    isContactOpen = !isContactOpen;

    if (isContactOpen)
        contact.className = 'article-opened';
    else
        contact.className = '';

    children.forEach((c: HTMLElement) => {
        c.className = isContactOpen ? 'full-opacity' : 'no-opacity';
    });
}

function loadContact(): void {
    function callback(body: string): void {
        const textFormatted = converter.makeHtml(body);
        contact.innerHTML = textFormatted;
    }
    loadFile('./contact.md', callback);
    contactAnchor.removeEventListener('click', loadContact);
}

export { loadContact, showContact, isContactOpen };
