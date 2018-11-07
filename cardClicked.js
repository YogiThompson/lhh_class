function cardClicked(card, column, lastCard, lastColumn) {
    card.reversed == false
    if(lastCard == null){
        card.selected = true;
    this.remember(card,column);

    }
    else {

        let cardsToMove = lastColumn.popFrom(lastCard)
column.append(cardsToMove)
        lastCard.selected = false; 
    this.forget();
    
    }

}