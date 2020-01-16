'use strict';

document.addEventListener('DOMContentLoaded', function() {

    const counterComponent = document.querySelector('.compteur');
    const counterButton = counterComponent.firstElementChild;
    counterButton.addEventListener('click', function() {
        this.nextElementSibling.textContent++;
    });

    const converterComponent = document.querySelector('.convertisseur');
    const converterInput = converterComponent.firstElementChild;
    const numberFormat = new Intl.NumberFormat('fr-FR')
    converterInput.addEventListener('input', function() {
        this.nextElementSibling.textContent = numberFormat.format(this.value / 1.609);
    });
});
