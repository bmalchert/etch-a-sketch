const container = document.querySelector('#container');
console.log(container);

// Create 16 `div` squares
for (let i = 0; i < 16; i++) {
  const square = document.createElement('div');
  square.style.width  = '100px';
  square.style.height = '100px';
  square.textContent  = 'Square ' + i;
  container.appendChild(square);
}