const RESOLUTION = 8;

let grid = [];

let cols;
let rows;

function setup() {
    createCanvas(windowWidth, windowHeight);

    // Calculate the number of columns and rows
    cols = floor(width / RESOLUTION);
    rows = floor(height / RESOLUTION);

    // Create a 2D array
    for (let i = 0; i < cols; i++) {
        grid[i] = [];
        for (let j = 0; j < rows; j++) {
            grid[i][j] = floor(random(2));
        }
    }

    // set frame rate
    frameRate(24);
}

let is_paused = false;

function keyPressed() {
    if (key === 'p' || key === 'P') {
        is_paused = !is_paused;

        if (is_paused) {
            noLoop();
        } else {
            loop();
        }
    }

    if (key === 'r' || key === 'R') {
        // Create a 2D array
        for (let i = 0; i < cols; i++) {
            grid[i] = [];
            for (let j = 0; j < rows; j++) {
                grid[i][j] = floor(random(2));
            }
        }
    }
}

function drawGrid() {
    // Draw the grid
    stroke(255);
    strokeWeight(1);
    for (let i = 0; i < width; i += RESOLUTION) {
        line(i, 0, i, height);
    }
    for (let i = 0; i < height; i += RESOLUTION) {
        line(0, i, width, i);
    }
}

function drawCells() {
    // Draw the cells
    noStroke();

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {

            let x = i * RESOLUTION;
            let y = j * RESOLUTION;

            if (grid[i][j] === 1) {
                fill(255);
                rect(x, y, RESOLUTION - 1, RESOLUTION - 1);
            }
        }
    }
}

function calculateNextGeneration() {

    // Make a copy of the current grid
    let next = grid.map(arr => [...arr]);

    // Loop through every spot in our 2D array and check spots neighbors
    for (let i = 1; i < cols - 1; i++) {
        for (let j = 1; j < rows - 1; j++) {

            // Add up all the states in a 3x3 surrounding grid
            let neighbors = 0;
            for (let x = -1; x <= 1; x++) {
                for (let y = -1; y <= 1; y++) {
                    neighbors += grid[i + x][j + y];
                }
            }

            // Subtract the current cell's state since we added it in the above loop
            neighbors -= grid[i][j];

            // Rules of Life
            if ((grid[i][j] === 1) && (neighbors < 2)) {
                next[i][j] = 0; // Loneliness
            } else if ((grid[i][j] === 1) && (neighbors > 3)) {
                next[i][j] = 0; // Overpopulation
            } else if ((grid[i][j] === 0) && (neighbors === 3)) {
                next[i][j] = 1; // Reproduction
            }
        }
    }

    // Swap!
    grid = next;
}


function draw() {
    // Set the background
    background(0);

    // Draw the grid
    drawGrid();

    // Draw the cells
    drawCells();

    // Calculate next generation
    calculateNextGeneration();
}