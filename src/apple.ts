import { columns, rows } from "./gameConfig";
import {
  coordToId,
  idToCoord,
  randomCoordinate,
  removeStyleSquare,
  styleSquare,
} from "./utils";

///////////////////
//// getApple ////
///////////////////
export function getRandomApple() {
  const [appleRow, appleColumn] = randomCoordinate(rows, columns);
  return coordToId([appleRow, appleColumn]);
}
///////////////////
//// updateApple ////
///////////////////

export function updateApple(snake: string[], apple: string) {
  if (snake[0] === apple) {
    const element = document.getElementById(apple) as HTMLDivElement;
    removeStyleSquare(element, "apple-square");

    return getRandomApple();
  }
  return apple;
}

///////////////////
//// drawApple ////
///////////////////
export function drawApple(appleCoords: string) {
  const square = document.getElementById(appleCoords) as HTMLDivElement;
  styleSquare(square, "apple-square");
}
