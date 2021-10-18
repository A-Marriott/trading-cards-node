import './App.css';
import { useState, useEffect } from 'react';
import { startGame, playTurn } from './Game';

function App() {
  const [game, setGame] = useState({});

  useEffect(() => {
    async function fetchData() {
      const fetchedGame = await startGame()
      setGame(fetchedGame)
    }
    fetchData();
  }, []);

  const handleClick = async () => {
    const fetchedGame = await playTurn()
    setGame(fetchedGame)
  }

  return (
    <div className="App">
      <div className="active-player-info">
        <h1>Active player: {game.players?.active.displayedName}</h1>
        <h3>Health: {game.players?.active.health}</h3>
        <h3>Mana slot: {game.players?.active.manaSlot}</h3>
        <h3>Active mana: {game.players?.active.activeMana}</h3>
        <h3>Cards in hand:</h3>
        {game.players?.active.cardsInHand.map(card => {
            return <button title="card">{card}</button>
        })}
      </div>
      <button
        onClick={() => handleClick()}
      >
        Start turn
      </button>
    </div>
  )
}

export default App;
