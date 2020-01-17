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

                // envoi du contenu du fichier en JSON
                // nous avons besoin du retour du FileReader
                fetch('url où envoyer les données', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({ name: newFile.name, data: reader.result})
                }).then(response => console.log(response))
                .catch(error => console.log(error))
            });


            reader.readAsDataURL(newFile);
            this.classList.add('hidden');

            // envoi du contenu du fichier en form-data
            // nous utilisons directement l'objet FormData
            fetch('url où envoyer les données', {
                method: 'POST',
                headers: {
                    'Content-type': 'multipart/form-data'
                },
                body: new FormData(this)
            }).then(response => console.log(response))
            .catch(error => console.log(error))

            // la même chose avec XMLHttpRequest
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'url où envoyer les données');
            xhr.setRequestHeader('Content-type', 'multipart/form-data');
            xhr.addEventListener('load', function(){
                console.log(this);
            })

            xhr.send(new FormData(this));
        });
    }
}
