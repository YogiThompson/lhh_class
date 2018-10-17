const columnCount = 7;
function deal() {




    for (let r = 0; r < 7; r++) {
        for (let i = r; i < 7; i++){

            let card = this.cards[i];
            card.reversed = true
            this.columns[i].cards.push(card);
        }
    }




/*
    for (let i = 1; i < 7; i++) {

        let card = this.cards[i];
        card.reversed = true
        this.columns[i].cards.push(card);


    }
    for (let i = 2; i < 7; i++) {

        let card = this.cards[i];
        card.reversed = true
        this.columns[i].cards.push(card);
    }

    for (let i = 3; i < 7; i++) {

        let card = this.cards[i];
        card.reversed = true
        this.columns[i].cards.push(card);
    }

    for (let i = 4; i < 7; i++) {

        let card = this.cards[i];
        card.reversed = true
        this.columns[i].cards.push(card);
    }

    for (let i = 5; i < 7; i++) {

        let card = this.cards[i];
        card.reversed = true
        this.columns[i].cards.push(card);
    }


    for (let i = 6; i < 7; i++) {

        let card = this.cards[i];
        card.reversed = true
        this.columns[i].cards.push(card);
    }*/
}