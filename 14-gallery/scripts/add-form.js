export class AddForm {

    constructor(selector) {
        this.root = document.querySelector(selector);
    }

    start() {
        this.root.innerHTML = `
        <button>Ajouter</button>
        <form class="hidden"><input name="new-file" type="file"><button>Envoyer</button></form>
        `;

        this.root.querySelector('button').addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('hidden');
        });

        this.root.querySelector('form').addEventListener('submit', function(event) {
            event.preventDefault();

            const newFile = this.elements['new-file'].files[0];

            const reader = new FileReader();

            reader.addEventListener('load', () => {
                const pictureCreatedEvent = new CustomEvent('pictureCreated', {
                    bubbles: true,
                    detail: {src: reader.result}
                });
                this.dispatchEvent(pictureCreatedEvent);
            });


            reader.readAsDataURL(newFile);
            this.classList.add('hidden');
        });
    }
}
