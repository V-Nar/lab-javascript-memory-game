class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    } else {
      let cardsCopy = structuredClone(this.cards)
      let mixedCards = [];
      while (cardsCopy.length > 0) {
        let randomCard = Math.floor(Math.random() * cardsCopy.length);
        let splicedCard = cardsCopy.splice(randomCard, 1);
        mixedCards.push(splicedCard[0]);
      }
      this.cards = mixedCards;
      return mixedCards;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked ++;
    if (card1 === card2){
      this.pairsGuessed ++
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
  if (this.pairsGuessed === this.cards.length / 2) {
    return true;
   } else {
    return false;
   }
  }
}