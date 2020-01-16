'use strict';

import { IMAGES } from './images.js';

export class Gallery {

    constructor(selector) {
        this.root = document.querySelector(selector);
    }

    start() {

        this.root.innerHTML = `
        <article>
            <img src="" height="320">
        </article>
        <nav>
            <ul></ul>
        </nav>`;

        const navBar = document.querySelector('nav');
        const bigImage = document.querySelector('article > img');
    
        const navList = navBar.children[0];
        navList.innerHTML = IMAGES.reduce((allHtml, path) => allHtml+`<li><a><img src="img/${path}"></a></li>`, '')
    
        const navLinks = navBar.querySelectorAll('a');
        for (const link of navLinks) {
            link.addEventListener('click', function() {
                bigImage.src = this.children[0].src;
            });
        }
    }
}
