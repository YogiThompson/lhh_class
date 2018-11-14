function cardClicked(card, column, lastCard, lastColumn) {
    if (card.reversed == true) {
        card.reversed = false;
        return;
    }
    
    if (lastCard == null) {
        card.selected = true;
        this.remember(card, column);

    }
    else {

        if ((card.color == lastCard.color) || (card.value != lastCard.value + 1)) {
            lastCard.selected = false
        }
        else {
            let cardsToMove = lastColumn.popFrom(lastCard)
            column.append(cardsToMove)
        }

        lastCard.selected = false;
        lastCard.reversed = false
        this.forget();

    }
    
}