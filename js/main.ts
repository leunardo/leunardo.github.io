import { showAbout } from './about';
import { showContact } from './contact';

const contactAnchor = document.getElementById('contact-anchor');
const aboutAnchor = document.getElementById('about-anchor');

contactAnchor.addEventListener('click', showContact);
aboutAnchor.addEventListener('click', showAbout);

export { aboutAnchor, contactAnchor };
