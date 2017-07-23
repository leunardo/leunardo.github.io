import { isAboutOpen, showAbout  } from './about';

const contact = document.getElementById('contact');
let isContactOpen = false;

function showContact(): void {
    const children = [].slice.call(contact.children);

    if (isAboutOpen) showAbout();

    isContactOpen = !isContactOpen;

    if (isContactOpen) {
        contact.style.flexGrow = '5';
        contact.style.maxHeight = '100rem';
    } else {
        contact.style.flexGrow = '0.0001';
        contact.style.maxHeight = '0rem';
    }

    children.forEach((c: HTMLElement) => {
        c.style.opacity = isContactOpen ? '1' : '0';
    });
}

export { showContact, isContactOpen };
