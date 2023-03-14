import { drawApple, getRandomApple, updateApple } from "./apple";
import createBoard, { boardControls } from "./board";
import {
  columns,
  defaultSnake,
  defaultSnakeDirection,
  rows,
} from "./gameConfig";
import { drawSnake, updateSnake } from "./snake";
import { Direction } from "./types";
import { removeStyleSquare } from "./utils";

///////////////////////
//// Prepare Board ////
///////////////////////
const container = document.querySelector("#snake-grid") as HTMLDivElement;

createBoard(rows, columns, container);

///////////////////////////////
//// Initialize Game State ////
///////////////////////////////
let done = false;
const delay = 200; // ms

///////////////////
//// Game Loop ////
///////////////////

function init() {
  //init snake
  let snake = defaultSnake.slice(0);
  const snakeDirection = { ...defaultSnakeDirection };
  document.addEventListener("keydown", (e) => boardControls(e, snakeDirection));
  //init apple
  let apple = getRandomApple();

  //start loop
  function gameLoop() {
    if (!done) {
      //updateSnake & updateApple
      const updatedSnake = updateSnake(snake, snakeDirection);
      snake = updatedSnake;
      const updatedApple = updateApple(snake, apple);
      //check if snake head and apple are equal
      if (updatedSnake[0] === apple) {
        const updatedSnake = updateSnake(snake, snakeDirection, true);
        snake = updatedSnake;
      }

      apple = updatedApple;
      //drawSnake & drawApple
      drawSnake(updatedSnake);
      drawApple(apple);
      setTimeout(() => {
        window.requestAnimationFrame(gameLoop);
      }, delay);
    }
  }
  gameLoop();
}

const startBtn = document.getElementById("start") as HTMLButtonElement;
startBtn.addEventListener("click", () => init());
