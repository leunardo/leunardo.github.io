import { get } from 'http';
import { Converter } from 'showdown';
import { loadAbout, showAbout } from './about';
import { loadContact, showContact } from './contact';

function loadFile(file: string, callback: (body: string) => void) {
    get(file, (r) => {
        let body = '';
        r.on('data', (d): void => { body += d; });
        r.on('end', () => { callback(body); });
    });
}

function renderChildElements(isOpen: boolean, children: [HTMLElement]) {
    children.forEach((c) => {
        c.className = isOpen ? 'full-opacity' : '';
    });
}

function isAnyArticleOpen(): boolean {
    return document.getElementById('about').className === 'article-opened' ||
           document.getElementById('contact').className === 'article-opened';
}

function openArticle(shouldOpen: boolean, element: HTMLElement) {
    if (shouldOpen)
        if (isAnyArticleOpen())
            setTimeout(() => element.className = 'article-opened', 1000);
        else
            element.className = 'article-opened';
    else
        element.className = '';
}

const converter = new Converter();
const contactAnchor = document.getElementById('contact-anchor');
const aboutAnchor = document.getElementById('about-anchor');

contactAnchor.addEventListener('click', showContact);
contactAnchor.addEventListener('click', loadContact);

aboutAnchor.addEventListener('click', showAbout);
aboutAnchor.addEventListener('click', loadAbout);

export { loadFile, renderChildElements, aboutAnchor, contactAnchor, converter, openArticle };
