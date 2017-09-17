import { closeAbout, isAboutOpen  } from './about';
import { contactAnchor, converter, loadFile, openArticle, renderChildElements } from './main';

const contact = document.getElementById('contact');
const children: [HTMLElement] = [].slice.call(contact.children);
let isContactOpen = false;

function showContact(): void {
    isContactOpen = !isContactOpen;
    openArticle(isContactOpen, contact);

    if (isAboutOpen) closeAbout();
    renderChildElements(isContactOpen, children);
}

function loadContact(): void {
    function callback(body: string): void {
        const textFormatted = converter.makeHtml(body);
        contact.innerHTML = textFormatted;
    }
    loadFile('./contact.md', callback);
    contactAnchor.removeEventListener('click', loadContact);
}

function closeContact(): void {
    isContactOpen = false;
    contact.className = '';
    renderChildElements(isContactOpen, children);
}

export { loadContact, showContact, closeContact, isContactOpen };
