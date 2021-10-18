import App from './App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import startGame from './Game';

jest.mock("./Game");

describe("it displays players information", () => {
  beforeEach(() => {
    startGame.mockImplementation(() => ({players: { active: {displayedName: "player1", health: 30, manaSlot: 0, activeMana: 0, cardsInHand: [1,2,3]}}}))
  })

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

  it("it displays active player cardsInHand", async () => {
    const { findByText } = render(<App />);
    const element = await findByText(/Cards in hand: 1 2 3/i);
    expect(element).toBeInTheDocument();
  });

  it("it should change active player when button is clicked", async () => {
    const { findByText } = render(<App />);
    userEvent.click(screen.getByText('Start turn'))
    const element = await findByText(/Active player: player2/i);
    expect(element).toBeInTheDocument();
  });

});
