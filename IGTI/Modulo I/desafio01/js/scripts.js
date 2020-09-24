window.addEventListener('load', start);
let rangeRed = document.querySelector('#red');
let rangeGreen = document.querySelector('#green');
let rangeBlue = document.querySelector('#blue');
let valueRed = document.querySelector('#value-red');
let valueGreen = document.querySelector('#value-green');
let valueBlue = document.querySelector('#value-blue');
let res = document.querySelector('.output-color');

let colorBox = ['0', '0', '0'];

function start() {
  rangeRed.addEventListener('input', () => {
    valueRed.value = rangeRed.value;
    colorBox.splice(0, 1, rangeRed.value);
    render();
  });

  rangeBlue.addEventListener('input', () => {
    valueBlue.value = rangeBlue.value;
    colorBox.splice(2, 1, rangeBlue.value);
    render();
  });

  rangeGreen.addEventListener('input', () => {
    valueGreen.value = rangeGreen.value;
    colorBox.splice(1, 1, rangeGreen.value);
    render();
  });

  render();

  function render() {
    res.style.background =
      'rgb(' +
      valueRed.value +
      ',' +
      valueGreen.value +
      ',' +
      valueBlue.value +
      ')';
  }
}
