import { closeContact, isContactOpen} from './contact';
import { aboutAnchor, converter, loadFile, openArticle, renderChildElements } from './main';

const about = document.getElementById('about');
const children: [HTMLElement] = [].slice.call(about.children);
let isAboutOpen = false;

function showAbout(): void {
    isAboutOpen = !isAboutOpen;
    openArticle(isAboutOpen, about);

    if (isContactOpen) closeContact();

    renderChildElements(isAboutOpen, children);
}

function loadAbout(): void {
    function callback(body: string): void {
        const textFormatted = converter.makeHtml(body);
        about.innerHTML = textFormatted;
    }
    loadFile('./about.md', callback);
    aboutAnchor.removeEventListener('click', loadAbout);
}

function closeAbout() {
    isAboutOpen = false;
    about.className = '';
    renderChildElements(isAboutOpen, children);
}

export { loadAbout, closeAbout, showAbout, isAboutOpen };
