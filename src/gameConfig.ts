import { Direction } from "./types";

// number of board cols and rows
export const rows = 21;
export const columns = 21;

// top left starting
// +1 for rows is downward, -1 is upwards
// +1 for columns is rightward, -1 is leftward
export const defaultSnakeDirection: Direction = {
  v: -1,
  h: 0,
};

// array of coordinates specifying snake
// first element is always head of snake
// last element is tail of snake
export const defaultSnake = ["11-11", "12-11", "13-11", "14-11"];
