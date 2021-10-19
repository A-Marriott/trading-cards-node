import "./App.css";
import { useState, useEffect } from "react";
import { startGame, playCard, switchPlayer, restartGame } from "./Game";

function App() {
  const [game, setGame] = useState({});
  const [impossibleMove, setImpossibleMove] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const fetchedGame = await startGame();
      setGame(fetchedGame);
    }
    fetchData();
  }, []);

  const handlePlayCard = async (cardIndex) => {
    const fetchedGame = await playCard(cardIndex);

    if (fetchedGame.message) {
      setImpossibleMove(true)
      setTimeout(() => setImpossibleMove(false), 1500)
    } else {
      setGame(fetchedGame)
      setImpossibleMove(false)
    }
  };

  const handleChangePlayer = async () => {
    const fetchedGame = await switchPlayer();
    setGame(fetchedGame);
    setImpossibleMove(false)
  };

  const handleRestartGame = async () => {
    const fetchedGame = await restartGame();
    setGame(fetchedGame);
    setImpossibleMove(false)
  }

  if (game.winner) {
    return (
      <>
        <div>The winner is: {game.winner?.displayedName}</div>
        <button onClick={() => {handleRestartGame()}}>Restart game</button>
      </>
    )
  }

  return (
    <div className="App">
      <div className="active-player-info">
        {game.players && (
          <>
            <h1>Active player: {game.players?.active.displayedName}</h1>
            <h3>Health: {game.players?.active.health}</h3>
            <h3>Mana slot: {game.players?.active.manaSlot}</h3>
            <h3>Active mana: {game.players?.active.activeMana}</h3>
            <h3>Cards in hand:</h3>
            {game.players?.active.cardsInHand.map((card, index) => {
              // return <button key={index} title="card">{card}</button>
              return (
                <button
                  key={index}
                  value={index}
                  data-testid={`test${index}`}
                  onClick={(e) => handlePlayCard(e.target.value)}
                >
                  {card}
                </button>
              );
            })}
            {impossibleMove &&
              <p>Impossible move!</p>
            }
          </>
        )}
        <button onClick={() => handleChangePlayer()}>Change player</button>
        {game.players?.inactive && (
          <>
            <h1>Inactive player: {game.players.inactive.displayedName}</h1>
            <h3>Inactive players health: {game.players.inactive.health}</h3>
          </>
        )}
      </div>
    </div>
  )
};

export default App;
