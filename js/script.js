const container = document.querySelector('#container');
console.log(container);

// Create 16 `div` squares
for (let i = 0; i < 16; i++) {
  const square = document.createElement('div');
  square.style.width  = '98px';
  square.style.height = '98px';
  square.textContent  = 'Square ' + i;
  square.className = 'square'
  square.id = 'square' + i;
  container.appendChild(square);
}