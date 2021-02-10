const container = document.querySelector('#container');

// Setup the initial sketch table
let dimension = 4;
const CONTAINERSIZE = 600;
container.style.height = CONTAINERSIZE + 'px';
container.style.width  = CONTAINERSIZE + 'px';
createSketchTable(dimension);

// add reset button event listener
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', reset);

// add clear button event listener
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearTable);

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

// create clear button event handler
function clearTable() {
  deleteSketchTable();
  createSketchTable(dimension);
}

function createSketchTable(dimension) {
  
  // setup the grid container
  container.style['grid-template-rows'] = 'repeat( ' + dimension + ','
      + '1fr)';
  container.style['grid-template-columns'] = 'repeat( ' + dimension + ','
      + '1fr)';

  for (let i = 0; i < dimension*dimension; i++) {

    // create a colorable square element
    const square = document.createElement('div');

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