import './App.css';
import { useState, useEffect } from 'react';

import startGame from './Game';

function App() {
  const [game, setGame] = useState({});

  useEffect(() => {
    async function fetchData() {
      const fetchedGame = await startGame()
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
        <h3>Active mana: {game.players?.active.manaSlot}</h3>

      </div>
    </div>
  )
}

export default App;
