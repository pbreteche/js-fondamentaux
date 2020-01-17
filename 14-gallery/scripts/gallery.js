'use strict';

import { NavBar } from './nav-bar.js';
import { AddForm } from './add-form.js';

export class Gallery {
    constructor(selector) {
        this.root = document.querySelector(selector);
    }

    start() {
        this.root.innerHTML = `
        <article>
            <img src="" height="320">
        </article>
        <nav id="nav-bar-component"></nav>
        <div id="add-form-component"></div>`;

        const bigImage = this.root.querySelector('article > img', );

        const navBar = new NavBar('#nav-bar-component');
        navBar.start();
        this.root.querySelector('#nav-bar-component').addEventListener('pictureSelected', function(event) {
            bigImage.src = event.detail.path
        });

        const addForm = new AddForm('#add-form-component');
        addForm.start();
    }
}
