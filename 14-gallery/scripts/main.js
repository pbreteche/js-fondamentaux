'use strict';

import { Gallery } from './gallery.js';

navigator.geolocation.getCurrentPosition(
    location => {
        console.log(location);
        console.log(location.coords);
    },
    error => console.log(error)
)

// accès au web storage
// stockage possible via des chaînes de caractères identifiées par des clés
localStorage.setItem('key', { a: 'aaa', b: 'bbb'})
sessionStorage.setItem('test2', JSON.stringify({ a: 'aaa', b: 'bbb'}))

document.addEventListener('DOMContentLoaded', function() {
    const gallery = new Gallery('#gallery');

    gallery.start();
});