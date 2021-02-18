const container = document.querySelector('#container');

// Setup the initial sketch table
let dimension = 4;
let drawColor = {
  fill: 'black',
  border: 'black'
};
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

// add red button event listener
const redButton = document.querySelector('button#red');
redButton.addEventListener('click', changeColor);

function draw(e) {
  const square = document.querySelector(`#${e.target.id}`);
  square.style.backgroundColor = drawColor.fill;
  square.style.borderColor = drawColor.border;
}

// create reset button event handler
function reset() {
  

  // Capture user input for dimension of sketch table. It has to be between
  // 1 and 100
  let userInput;
  do {
    userInput = prompt(
                'Enter dimension in range 1-100\n'
              + 'or enter 0 or hit ESC to cancel.',
                dimension);
    console.log(userInput);

    if (userInput == 0 || !userInput) {
      userInput = 'cancel';
    } else if (!Math.floor(userInput)) {
      userInput = -1;
    } else if (userInput < 1) {
      dimension = 1;
    } else if (userInput > 100) {
      dimension = 100;
    } else {
      // Convert userInput to number and then converts to integer
     dimension = Math.floor(userInput);
     console.log('final else');
    }

  } while (userInput === -1);

  if (userInput !== 'cancel') {
    // const squares = Array.from(document.querySelectorAll(".square.drawn"));
    // for (let i = 0; i < squares.length; i++) {
    // squares[i].className = 'square';
    // }

    deleteSketchTable();
    createSketchTable(dimension)
  }
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
    square.addEventListener('mouseover', draw);
  
    container.appendChild(square);
  }
}

function deleteSketchTable() {
  const squares = Array.from(document.querySelectorAll(".square"));
  for (let i = 0; i < squares.length; i++) {
    container.removeChild(squares[i]);
  }
}

// Event handler for changing the drawing color
function changeColor(e) {
  const buttonPressed = document.querySelector(`#${e.target.id}`);
  drawColor.fill = e.target.id;
  drawColor.border = e.target.id;
}