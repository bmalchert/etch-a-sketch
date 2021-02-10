const container = document.querySelector('#container');

// Setup the initial sketch table
let dimension = 4;
const CONTAINERSIZE = 600;
container.style.height = CONTAINERSIZE + 'px';
container.style.width  = CONTAINERSIZE + 'px';
createSketchTable(dimension);

// add reset button event listener
const resetButton = document.querySelector('button');
resetButton.addEventListener('click', reset);

function changeColor(e) {
  const square = document.querySelector(`#${e.target.id}`);
  square.className += ' drawn';
}

// create reset button event handler
function reset() {
  const squares = Array.from(document.querySelectorAll(".square.drawn"));
  for (let i = 0; i < squares.length; i++) {
    squares[i].className = 'square';
  }

  do {
    dimension = prompt("Enter dimension", dimension);
  } while (dimension > 100);
  deleteSketchTable();
  createSketchTable(dimension)
}

function createSketchTable(dimension) {
  for (let i = 0; i < dimension*dimension; i++) {
    const square = document.createElement('div');

    // create the dimension string
    let dimensionString = CONTAINERSIZE / dimension - 2;
    dimensionString += 'px';

    square.style.width  = dimensionString;
    square.style.height = dimensionString;  
    square.className = 'square'
    square.id = 'square' + i;
    square.addEventListener('mouseover', changeColor);
  
    container.appendChild(square);
  }
}

function deleteSketchTable() {
  const squares = Array.from(document.querySelectorAll(".square"));
  for (let i = 0; i < squares.length; i++) {
    container.removeChild(squares[i]);
  }
}