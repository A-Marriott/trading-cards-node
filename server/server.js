const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const Game = require("./index")

let game = new Game();
game.turnStart();

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json(game);
});

app.get("/playcard/:cardindex", (req, res) => {
  game.playCard(req.params.cardindex);
  res.json(game);
});

app.get("/changeplayer", (req, res) => {
  game.switchPlayer();
  res.json(game);
});

app.get("/restartgame", (req, res) => {
  game = new Game();
  game.turnStart();
  res.json(game);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
