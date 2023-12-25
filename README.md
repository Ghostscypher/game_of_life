# Conway's game of life (Implementation in P5 JS)

## Introduction

This is an implementation of the Smart Rocket simulation from the Nature of Code book by Daniel Shiffman. The simulation uses a genetic algorithm to train the rockets to reach a target. The rockets are trained using a population of DNA. The DNA is a sequence of vectors that are used to control the movement of the rocket. The DNA is mutated and crossed over to create a new generation of rockets. The rockets are trained over multiple generations to reach the target.

## Installation

To run the simulation, simply clone the repository and open the `index.html` file in your browser. Alternatively, you can visit the [GitHub Pages](https://ghostscypher.github.io/game_of_life/src/index.html) for this repository.

## Explanation

Conways game of life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. The game is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. The game is played on a two-dimensional grid of square cells. Each cell can be in one of two possible states, alive or dead. Each cell interacts with its eight neighbors, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

1. Any live cell with fewer than two live neighbors dies, as if by underpopulation.
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

## Usage

The simulation can be controlled using the following keys:

1. `r` - Reset and restart the simulation.
2. `p` - Pause the simulation. To resume, press `p` again.

## Demo

<iframe src="https://ghostscypher.github.io/game_of_life/src/index.html" title="Conway's Game Of Life" width="100%" height="500px"></iframe>

## References

1. [Quadtree](https://en.wikipedia.org/wiki/conway's_game_of_life)
2. [P5 JS](https://p5js.org/)
3. [P5 JS Reference](https://p5js.org/reference/)
4. [P5 JS Examples](https://p5js.org/examples/)
5. [P5 JS Web Editor](https://editor.p5js.org/)
6. [Coding train - P5 JS Tutorials](https://www.youtube.com/user/shiffman/playlists?view=50&sort=dd&shelf_id=14)
7. [The Nature of Code](https://natureofcode.com/)
8. 