export default class Toto {
    constructor(...tab) {
        this.tab = tab;
    }

    myForEach(maFonction) {
        for(let i = 0; i < this.tab.length; i++) {
            maFonction(this.tab[i]);
        }
    }
}