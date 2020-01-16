'use strict';

export class NavBar {
    constructor(selector) {
        this.root = document.querySelector(selector);
    }

    start() {
        this.root.innerHTML = `<ul></ul>`;

        fetch('./scripts/images.json', {
            method: 'GET'
        }).then(response => {
            if (response.status == 200) {
                return response.json();
            }
            throw 'Problème';
        })
        .then(pathList => {
            this.render(pathList)
        })
    }

    render(pathList) {
        this.root.children[0].innerHTML = pathList.reduce(
            (allHtml, path) => allHtml+`<li><a><img src="img/${path}"></a></li>`
        , '');

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
