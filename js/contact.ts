import { isAboutOpen, showAbout  } from './about';

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
        c.className = isContactOpen ? 'full-opacity' : '';
    });
}

export { showContact, isContactOpen };
