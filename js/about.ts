import { isContactOpen, showContact} from './contact';

const about = document.getElementById('about');
let isAboutOpen = false;

function showAbout(): void {
    const children = [].slice.call(about.children);

    if (isContactOpen) showContact();

    isAboutOpen = !isAboutOpen;

    if (isAboutOpen) {
        about.style.flexGrow = '5';
        about.style.maxHeight = '100rem';
    } else {
        about.style.flexGrow = '0.001';
        about.style.maxHeight = '0rem';
    }

    children.forEach((c: HTMLElement) => {
        c.style.opacity = isAboutOpen ? '1' : '0';
    });
}

export { showAbout, isAboutOpen };
