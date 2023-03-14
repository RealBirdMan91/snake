import { columns, rows } from "./gameConfig";
import { Direction } from "./types";
import { coordToId, idToCoord, mod, styleSquare } from "./utils";

///////////////////
//// updateSnake ////
///////////////////

export function updateSnake(
  snake: string[],
  currentDirection: Direction,
  hasFood: boolean = false
) {
  const head = snake[0];

  const headVH = idToCoord(head);
  const newV = headVH[0] + currentDirection.v;
  const newH = headVH[1] + currentDirection.h;

  // wrap snake around if moves out of bounds
  const newSnakeV = mod(newV, rows);
  const newSnakeH = mod(newH, columns);

  const newSnakeId = coordToId([newSnakeV, newSnakeH]);

  // create new snake array with updated head and removed tail
  const slicedSnake = !hasFood ? snake.slice(0, snake.length - 1) : snake;
  const newSnake = [newSnakeId, ...slicedSnake];

  // return updated snake array
  return newSnake;
}

///////////////////
//// drawSnake ////
///////////////////
export function drawSnake(snake: string[]) {
  // remove styling from all snake squares
  const snakeSquares = document.querySelectorAll(".snake-square");
  snakeSquares.forEach((square) => {
    square.classList.remove("snake-square");
  });

  // add styling to all snake squares
  snake.forEach((id) => {
    const snakeSquare = document.getElementById(id) as HTMLDivElement;
    styleSquare(snakeSquare, "snake-square");
  });
}
