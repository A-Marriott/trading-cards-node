import './App.css';
import { useState, useEffect } from 'react';

import startGame from './Game';

function App() {
  const [game, setGame] = useState({});

  useEffect(() => {
    async function fetchData() {
      const fetchedGame = await startGame()
      console.log("FECHE", fetchedGame)
      setGame(fetchedGame)
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="active-player-info">
        <h1>Active player: {game.players?.active.displayedName}</h1>
        <h3>Health: {game.players?.active.health}</h3>
        <h3>Mana slot: {game.players?.active.manaSlot}</h3>
        <h3>Active mana: {game.players?.active.activeMana}</h3>
        <h3>Cards in hand: {game.players?.active.cardsInHand.map((card) => `${card} `)}</h3>
      </div>
    </div>
  )
}

export default App;
