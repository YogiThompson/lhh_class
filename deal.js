const columnCount = 7;
function deal() {
let c = 0



    for (let row = 0; row < 7; row++) {
        for (let col = row; col < 7; col++){

            let card = this.cards[c];
            c++ 
            if (row == col){card.reversed = false} else(card.reversed = true)
            this.columns[col].cards.push(card);
            
        }    
    }
}
