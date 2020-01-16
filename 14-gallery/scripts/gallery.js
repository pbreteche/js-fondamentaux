'use strict';

document.addEventListener('DOMContentLoaded', function() {

    const navBar = document.querySelector('nav');
    const bigImage = document.querySelector('article > img');

    const navLinks = navBar.querySelectorAll('a');
    for (const link of navLinks) {
        link.addEventListener('click', function() {
            bigImage.src = this.children[0].src;
        });
    }
});
