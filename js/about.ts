import { isContactOpen, showContact} from './contact';

const about = document.getElementById('about');
const aboutAnchor = document.getElementById('about-anchor');
let isAboutOpen = false;

function showAbout(): void {
    const children = [].slice.call(about.children);

    if (isContactOpen) showContact();

    isAboutOpen = !isAboutOpen;

    if (isAboutOpen) {
        about.style.flexGrow = '5';
        about.style.maxHeight = '9999px';
    } else {
        about.style.flexGrow = '0.001';
        about.style.maxHeight = '0px';
    }

    children.forEach((c: HTMLElement) => {
        c.style.opacity = isAboutOpen ? '0' : '1';
    });
}

export { showAbout, isAboutOpen };
