class Game {
  constructor() {
    const cards = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];
    const player1Cards = [...cards].sort(() => Math.random() - 0.5)
    const player2Cards = [...cards].sort(() => Math.random() - 0.5)
    this.player1 = {
      health: 30, manaSlot: 0, activeMana: 0, cards: player1Cards, cardsInHand: player1Cards.splice(0, 3),
    };
    this.player2 = {
      health: 30, manaSlot: 0, activeMana: 0, cards: player2Cards, cardsInHand: player2Cards.splice(0, 3),
    };
    this.activePlayer = this.player1
  }

  turnStart() {
    this.player1.manaSlot += 1
    this.player1.activeMana = this.player1.manaSlot
    this.player1.cardsInHand = [...this.player1.cardsInHand, this.player1.cards.splice(0, 1)].sort()
  }
  
  //game.player1.cardsInHand = [3,4,6]
  playerTurn() {
    // check is player able to do turn
    if (this.player1.cardsInHand[0] > this.player1.activeMana) {
      this.activePlayer = this.player2
    } else {
      console.log('hello')
    }
    // pick the card from hand
    // check do you have enought activeMana
    // reduce second playes health
    // reduce player1 activeMana
    // take chosen card from cardsInHand
    // check is other player died
  }
}

module.exports = Game;
