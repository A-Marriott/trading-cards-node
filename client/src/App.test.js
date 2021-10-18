import App from './App';
import { render, screen, getByTitle } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { startGame, playTurn } from './Game';

jest.mock("./Game");

describe("Trading card game", () => {
  beforeEach(() => {
    startGame.mockImplementation(() => ({players: { active: {displayedName: "player1", health: 30, manaSlot: 0, activeMana: 0, cardsInHand: [1,2,3]}}}))
  })

  describe("Initial game state", () => {

    it("it displays active player title", async () => {
      const {findByText} = render(<App/>);
      const element = await findByText(/Active player: player1/i);
      expect(element).toBeInTheDocument();
    });

    it("it displays active player health", async () => {
      const {findByText} = render(<App/>);
      const element = await findByText(/Health: 30/i);
      expect(element).toBeInTheDocument();
    });

    it("it displays active player manaSlot", async () => {
      const {findByText} = render(<App/>);
      const element = await findByText(/Mana slot: 0/i);
      expect(element).toBeInTheDocument();
    });

    it("it displays active player activeMana", async () => {
      const {findByText} = render(<App/>);
      const element = await findByText(/Active mana: 0/i);
      expect(element).toBeInTheDocument();
    });

    // it("it displays active player cardsInHand", async () => {
    //   const {findByText} = render(<App/>);
    //   const element = await findByText(/Cards in hand: 1 2 3/i);
    //   expect(element).toBeInTheDocument();
    // });
  });

  describe("First player plays first turn", () => {
    beforeEach(() => {
      playTurn.mockImplementation(() => ({players: { active: {displayedName: "player1", health: 30, manaSlot: 1, activeMana: 1, cardsInHand: [0,1,2,3]}}}))
    })
    // is button there
    it("it displays button", async () => {
      const { getByText } = render(<App />);
      const button = await getByText("Start turn");
      expect(button).toBeTruthy()
    });
    // Player 1 increase mana slots
    it("it displays active player manaSlot", async () => {
      const {findByText} = render(<App/>);
      userEvent.click(screen.getByText('Start turn'))
      const element = await findByText(/Mana slot: 1/i);
      expect(element).toBeInTheDocument();
    });
    // Player 1 increase active mana
    it("it displays active player activeMana", async () => {
      const {findByText} = render(<App/>);
      userEvent.click(screen.getByText('Start turn'))
      const element = await findByText(/Active mana: 1/i);
      expect(element).toBeInTheDocument();
    });
    // Player 1 has 1 more card in hand
    // it("it displays active players increased number of cards", async () => {
    //   const {findByText} = render(<App/>);
    //   userEvent.click(screen.getByText('Start turn'))
    //   const element = await findByText(/Cards in hand: 0 1 2 3/i);
    //   expect(element).toBeInTheDocument();
    // });
    
    it("it displays game card as button", async () => {
      const { findByText } = render(<App />);
      const button = screen.getByTitle('card');
      expect(button).toBeTruthy()
    });



    // if player 1 cannot play card it switches active player
    // it("should change active player", async () => {
    //   const { findByText } = render(<App />);
    //   startGame.mockImplementation(() => ({players: { active: {displayedName: "player2", health: 30, manaSlot: 0, activeMana: 0, cardsInHand: [1,1,1]}}}))
    //   userEvent.click(screen.getByText('Start turn'))
    //   const element = await findByText(/Active player: player2/i);
    //   expect(element).toBeInTheDocument();
    // });

    // it("should change active player when turn can not be played", async () => {
    //   const { findByText } = render(<App />);
    //   startGame.mockImplementation(() => ({players: { active: {displayedName: "player2", health: 30, manaSlot: 0, activeMana: 0, cardsInHand: [1,1,1]}}}))
    //   userEvent.click(screen.getByText('Start turn'))
    //   const element = await findByText(/Active player: player2/i);
    //   expect(element).toBeInTheDocument();
    // });

  

  })



});
