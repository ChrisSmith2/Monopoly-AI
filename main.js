let chanceDeck
let chestDeck
function setup() {
  createCanvas(750, 750);
  chanceDeck = chance()
  chestDeck = chest()
}

let board
let shoe
function preload() {
  board = loadImage("https://www.dropbox.com/s/2q4rdu2o0mtxb4k/monopoly_board.jpg?dl=1");
  shoe = loadImage("https://www.dropbox.com/s/omdnb754hlz0107/shoe.png?dl=1");
}

function draw() {
  background(220);
  image(board, 0, 0, width, height);

  total = createDice()[0]

  createMarker()
  noLoop()
}

function turn(playerNumber) {
  draw()
}

//https://github.com/intrepidcoder/monopoly (git code for a monoploy game)
//https://towardsdatascience.com/pathwayz-ai-3c338fb7b33 (how to make an ai that can beat you at your own game)
// https://towardsdatascience.com/create-your-own-board-game-with-powerful-ai-from-scratch-part-1-5dcb028002b8 (How to make a game and some basics for teaching machine learning)
