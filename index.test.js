const Game = require("./index")

describe("trading cards", () => {
    describe("initialise a game with two players", () => {
        let game;
        beforeEach(() => {
            game = new Game();
        });

        it("each with 30 health", () => {
            expect(game.player1.health).toBe(30)
            expect(game.player2.health).toBe(30)
        });

        it("each with 0 mana slots", () => {
            expect(game.player1.manaSlot).toBe(0)
            expect(game.player2.manaSlot).toBe(0)
        });

        it("each with 0 active mana", () => {
            expect(game.player1.activeMana).toBe(0)
            expect(game.player2.activeMana).toBe(0)
        });

        it("each having the expected 20 mana cards", () => {
            const expectedCards = [0,0,1,1,2,2,2,3,3,3,3,4,4,4,5,5,6,6,7,8]
            expect([...game.player1.cards, ...game.player1.cardsInHand].sort()).toEqual(expectedCards)
            expect([...game.player2.cards, ...game.player2.cardsInHand].sort()).toEqual(expectedCards)
        });

        it("each having 3 cards in hand", () => {
            expect(game.player1.cardsInHand.length).toBe(3)
            expect(game.player2.cardsInHand.length).toBe(3)
        });

        it("activePlayer is player1", () => {
            expect(game.activePlayer).toBe(game.player1)
        });        
    });

    describe("on game start", () => {
        let game;
        beforeEach(() => {
            game = new Game();
        });

        it("the active player's mana slot has increased by 1", () => {
            game.turnStart();
            expect(game.player1.manaSlot).toBe(1)
        });

        it("the active player's active mana is refilled", () => {
            game.turnStart();
            expect(game.player1.activeMana).toBe(1)
        });

        it("the active player's receives 1 more card", () => {
            game.turnStart();
            expect(game.player1.cardsInHand.length).toBe(4)
        });

        it("the active player's cards are sorted", () => {
            game.turnStart();
            expect(game.player1.cardsInHand).toBe(game.player1.cardsInHand.sort())
        });

        it("the active player's deck size is reduced by 1", () => {
            const expectedDeckSize = game.player1.cards.length - 1
            game.turnStart();
            expect(game.player1.cards.length).toBe(expectedDeckSize)
        });
    });

    describe("on main part of turn", () => {
        let game;
        beforeEach(() => {
            game = new Game();
        });

        it("player is not able to play a card", () => {
            game.turnStart();
            game.player1.cardsInHand = [3,4,6]
            game.playerTurn();
            expect(game.activePlayer).toBe(game.player2)
        });

        it("player is able to play a card", () => {
            game.turnStart();
            game.player1.cardsInHand = [0,4,6]
            game.playerTurn();
            expect(game.activePlayer).toBe(game.player1)
        });

        it("player ", () => {
            game.turnStart();
            game.player1.cardsInHand = [0,4,6]
            game.playerTurn();
            expect(game.activePlayer).toBe(game.player1)
        });
    });
});
