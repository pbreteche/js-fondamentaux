'use strict';

import { NavBar } from './nav-bar.js';

export class Gallery {
    constructor(selector) {
        this.root = document.querySelector(selector);
    }

    start() {
        this.root.innerHTML = `
        <article>
            <img src="" height="320">
        </article>
        <nav id="nav-bar-component"></nav>`;

        const bigImage = this.root.querySelector('article > img', );

        const navBar = new NavBar('#nav-bar-component');
        navBar.start();
        this.root.querySelector('#nav-bar-component').addEventListener('pictureSelected', function(event) {
            bigImage.src = event.detail.path
        })
    }
}
