import { isAboutOpen, showAbout  } from './about';

const contact = document.getElementById('contact');
const contactAnchor = document.getElementById('contact-anchor');
let isContactOpen = false;

function showContact(): void {
    const children = [].slice.call(contact.children);

    if (isAboutOpen) showAbout();

    isContactOpen = !isContactOpen;

    if (isContactOpen) {
        contact.style.flexGrow = '5';
        contact.style.maxHeight = '9999px';
    } else {
        contact.style.flexGrow = '0.0001';
        contact.style.maxHeight = '0px';
    }

    children.forEach((c: HTMLElement) => {
        c.style.opacity = isContactOpen ? '0' : '1';
    });
}

export { showContact, isContactOpen };
