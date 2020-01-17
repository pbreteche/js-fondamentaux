export class AddForm {

    constructor(selector) {
        this.root = document.querySelector(selector);
    }

    start() {
        this.root.innerHTML = `
        <button>Ajouter</button>
        <form class="hidden"><input name="new-file" type="file"><button>Envoyer</button></form>
        <img id="temp-image">
        `;

        this.root.querySelector('button').addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('hidden');
        });

        const tempImage = this.root.querySelector('#temp-image');

        this.root.querySelector('form').addEventListener('submit', function(event) {
            event.preventDefault();
            console.log(this.elements['new-file'].files);
            console.log(this.elements['new-file'].value);

            const newFile = this.elements['new-file'].files[0];

            const reader = new FileReader();

            reader.addEventListener('load', function(){
                tempImage.src = this.result;
            });

            reader.readAsDataURL(newFile);
        });
    }
}
