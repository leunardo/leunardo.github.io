import { isContactOpen, showContact} from './contact';

const about = document.getElementById('about');
let isAboutOpen = false;

function showAbout(): void {
    const children = [].slice.call(about.children);

    if (isContactOpen) showContact();

    isAboutOpen = !isAboutOpen;

    if (isAboutOpen)
        about.className = 'article-opened';
    else
        about.className = '';

    children.forEach((c: HTMLElement) => {
        c.className = isAboutOpen ? 'full-opacity' : '';
    });
}

export { showAbout, isAboutOpen };
