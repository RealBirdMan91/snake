import "./style.css";
import { Direction } from "./types";
import { coordToId } from "./utils";

///////////////////////
//// Prepare Board ////
///////////////////////

/* const rows = 21;
const columns = 21;

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++) {
    const gridSquare = document.createElement("div");
    gridSquare.id = coordToId([i, j]);
    gridSquare.classList.add("grid-square");
    snakeGrid.appendChild(gridSquare);
  }
} */

export default function createBoard(
  numRows: number,
  numCols: number,
  container: HTMLDivElement
) {
  container.style.display = "grid";
  container.style.gridTemplateRows = `repeat(${numCols},1fr)`;
  container.style.gridTemplateColumns = `repeat(${numCols},1fr)`;

  for (let i = 0; i < numRows * numCols; i++) {
    //console.log(i, numCols, i % numCols);
    const gridSquare = document.createElement("div");
    gridSquare.id = coordToId([Math.floor(i / numCols), i % numCols]);
    gridSquare.classList.add("grid-square");
    container.appendChild(gridSquare);
  }
}

///////////////////////
////  Board Controls ////
///////////////////////

export function boardControls(e: KeyboardEvent, snakeDirection: Direction) {
  switch (e.key) {
    case "ArrowLeft":
      if (snakeDirection.v == 0 && snakeDirection.h == 1) {
        break;
      } else {
        snakeDirection.v = 0;
        snakeDirection.h = -1;
      }
      break;
    case "ArrowUp":
      if (snakeDirection.v == 1 && snakeDirection.h == 0) {
        break;
      } else {
        snakeDirection.v = -1;
        snakeDirection.h = 0;
      }
      break;
    case "ArrowRight":
      if (snakeDirection.v == 0 && snakeDirection.h == -1) {
        break;
      } else {
        snakeDirection.v = 0;
        snakeDirection.h = 1;
      }
      break;
    case "ArrowDown":
      if (snakeDirection.v == -1 && snakeDirection.h == 0) {
        break;
      } else {
        snakeDirection.v = 1;
        snakeDirection.h = 0;
      }
      break;
  }
}

// prevent scrolling when using arrow keys
window.addEventListener("keydown", function (event) {
  const keysDisabledDefault = [
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
  ];

  if (keysDisabledDefault.includes(event.key)) {
    event.preventDefault();
  }
});
