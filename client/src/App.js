import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [game, setGame] = useState({});

  useEffect(() => {
    startGame();
  }, []);

  const startGame = () =>
  fetch("http://localhost:3000/", {
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => setGame(data))
  
  return (
    <div className="App">
      <h1>{game.player1?.health}</h1>
    </div>
  )
}

export default App;
