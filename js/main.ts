import { get } from 'http';
import { Converter } from 'showdown';
import { loadAbout, showAbout } from './about';
import { loadContact, showContact } from './contact';

function loadFile(file: string, callback: (body: string) => void) {
    const rawFile = new XMLHttpRequest();
    const text: string = 'e';
    get(file, (r) => {
        let body = '';
        r.on('data', (d): void => { body += d; });
        r.on('end', () => { callback(body); });
    });
}
const converter = new Converter();
const contactAnchor = document.getElementById('contact-anchor');
const aboutAnchor = document.getElementById('about-anchor');

contactAnchor.addEventListener('click', showContact);
contactAnchor.addEventListener('click', loadContact);

aboutAnchor.addEventListener('click', showAbout);
aboutAnchor.addEventListener('click', loadAbout);

export { loadFile, aboutAnchor, contactAnchor, converter };
