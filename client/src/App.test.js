import App from "./App";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { startGame, playTurn, playCard } from "./Game";

jest.mock("./Game");

describe("Trading card game", () => {
  beforeEach(() => {
    startGame.mockImplementation(() => ({
      players: {
        active: {
          displayedName: "player1",
          health: 30,
          manaSlot: 0,
          activeMana: 0,
          cardsInHand: [1, 2, 3],
        },
      },
    }));
  });

  describe("Initial game state", () => {
    it("it displays active player title", async () => {
      const { findByText } = render(<App />);
      const element = await findByText(/Active player: player1/i);
      expect(element).toBeInTheDocument();
    });

    it("it displays active player health", async () => {
      const { findByText } = render(<App />);
      const element = await findByText(/Health: 30/i);
      expect(element).toBeInTheDocument();
    });

    it("it displays active player manaSlot", async () => {
      const { findByText } = render(<App />);
      const element = await findByText(/Mana slot: 0/i);
      expect(element).toBeInTheDocument();
    });

    it("it displays active player activeMana", async () => {
      const { findByText } = render(<App />);
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
      playTurn.mockImplementation(() => ({
        players: {
          active: {
            displayedName: "player1",
            health: 30,
            manaSlot: 1,
            activeMana: 1,
            cardsInHand: [0, 1, 2, 3],
          },
        },
      }));
    });
    it("there is a start turn button", async () => {
      const { findByText } = render(<App />);
      const button = await findByText("Start turn");
      expect(button).toBeVisible();
    });
    it("the active players mana slot increases by 1", async () => {
      const { findByText } = render(<App />);
      userEvent.click(screen.getByText("Start turn"));
      const element = await findByText(/Mana slot: 1/i);
      expect(element).toBeInTheDocument();
    });
    it("the active players active mana increases by 1", async () => {
      const { findByText } = render(<App />);
      userEvent.click(screen.getByText("Start turn"));
      const element = await findByText(/Active mana: 1/i);
      expect(element).toBeInTheDocument();
    });

    // it("it displays active players increased number of cards", async () => {
    //   const {findByText} = render(<App/>);
    //   userEvent.click(screen.getByText('Start turn'))
    //   const element = await findByText(/Cards in hand: 0 1 2 3/i);
    //   expect(element).toBeInTheDocument();
    // });

    it("displays game card as button", async () => {
      render(<App />);
      const button = await screen.findByTestId("test0");
      expect(button).toBeVisible();
    });
  });

  describe("playing a 1 cost card", () => {
    beforeEach(() => {
      playCard.mockImplementation(() => ({
        players: {
          active: {
            displayedName: "player1",
            health: 30,
            manaSlot: 1,
            activeMana: 0,
            cardsInHand: [0, 2, 3],
          },
          inactive: {
            displayedName: "player2",
            health: 29,
            manaSlot: 1,
            activeMana: 1,
            cardsInHand: [0, 1, 2, 3],
          }
        },
      }));
    });

    it("the active players active mana decreases by 1", async () => {
      render(<App />);
      const button = await screen.findByTestId("test1");
      userEvent.click(button);
      const element = await screen.findByText(/Active mana: 0/i);
      expect(element).toBeInTheDocument();
    });

    it("the inactive players health decreases by 1", async () => {
      render(<App />);
      const button = await screen.findByTestId("test1");
      userEvent.click(button);
      const element = await screen.findByText(/Inactive players health: 29/i);
      expect(element).toBeInTheDocument();
    });
  });

  // TODO

  // winning/losing
  // change player manually
  // start new game with everything clearing
  // testing routes 
});
