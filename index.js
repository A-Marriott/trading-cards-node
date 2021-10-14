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
  }

  turnStart() {
    this.player1.manaSlot += 1
    this.player1.activeMana = this.player1.manaSlot
    this.player1.cardsInHand = [...this.player1.cardsInHand, this.player1.cards.splice(0, 1)]
  }
}

module.exports = Game;
//test