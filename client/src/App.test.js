import { render, screen } from '@testing-library/react';
import App from './App';
import startGame from './Game';
jest.mock("./Game", () => ({player1: {displayedName: "player1"}, health: 30}))
// WRONG OBJECT!!!!!!!! line 4
describe("it displays players information", () => {
  // beforeEach(() => {
  //   startGame.mockReturnValue(() => {
  //     const aaa = {player1: {displayedName: "player1"}, health: 30}
  //     console.log(aaa)
  //     return aaa
  //   })
  // })

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
    const element = await findByText(/Cards in hand: 3, 2, 8/i);
    expect(element).toBeInTheDocument();
  });
});
