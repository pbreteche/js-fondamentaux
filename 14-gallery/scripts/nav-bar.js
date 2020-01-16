'use strict';

import { IMAGES } from './images.js';

export class NavBar {
    constructor(selector) {
        this.root = document.querySelector(selector);
    }

    start() {
        this.root.innerHTML = `<ul></ul>`;

        const navList = this.root.children[0];
        navList.innerHTML = IMAGES.reduce((allHtml, path) => allHtml+`<li><a><img src="img/${path}"></a></li>`, '')
    
        const navLinks = this.root.querySelectorAll('a');
        for (const link of navLinks) {
            link.addEventListener('click', function() {
                const pictureSelectedEvent = new CustomEvent('pictureSelected', {
                    bubbles: true,
                    detail: { path: this.children[0].src }
                });
                this.dispatchEvent(pictureSelectedEvent);
            });
        }
    }
}
