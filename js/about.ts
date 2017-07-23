import { isContactOpen, showContact} from './contact';
import { aboutAnchor, converter, loadFile } from './main';

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
        c.className = isAboutOpen ? 'full-opacity' : 'no-opacity';
    });
}

function loadAbout(): void {
    function callback(body: string): void {
        const textFormatted = converter.makeHtml(body);
        about.innerHTML = textFormatted;
    }
    loadFile('./about.md', callback);
    aboutAnchor.removeEventListener('click', loadAbout);
}

export { loadAbout, showAbout, isAboutOpen };
