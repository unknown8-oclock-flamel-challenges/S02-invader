const gridSize = document.getElementById('grid-size');
const pixelSize = document.getElementById('pixel-size');
const validate = document.getElementById('validate');

validate.addEventListener('click',() => createGrid(gridSize.value, pixelSize.value));

const pixels = document.getElementById('pixels');

const colors = {
    gray: document.getElementById('gray'),
    black: document.getElementById('black'),
    orange: document.getElementById('orange'),
    green: document.getElementById('green'),
}

let pickedColor = null;
const colorsToArray = Object.entries(colors);

const resetPalette = () => colorsToArray.forEach(e => e[1].style = '');

colorsToArray.forEach(e => e[1].addEventListener('click', (click) => {
    resetPalette();
    pickedColor = click.target.value;
    click.target.style.height = "3rem";
    click.target.style.width = "3rem";
}))

const createGrid = (size, pixelSize) => {

    pixels.innerHTML = "";
    let gridSize = size * size;
    pixels.style.width = `${size*pixelSize}px`;
    
    for (let i = 0; i < gridSize; i++) {

        const pixel = document.createElement('div');
        pixels.appendChild(pixel);
        pixel.className = 'pixel';
        pixel.style.width = `${pixelSize}px`;
        pixel.style.height = `${pixelSize}px`;

        pixel.addEventListener('click', () => pixel.style.backgroundColor = pickedColor);
    }
}