/*
  Alguns eventos: 
  - onload
  - onchange
  - onfocus
  - onblur
  - onselect
  - onsubmit
  - onkeydown
  - onkeypress
  - onkeyup
  - onclick

  Importante : evento.preventDefault . 
  Evitar o comportamento padrão do evento.
*/

//Boa prática
window.addEventListener('load', start);

function start() {
  let nameInput = document.querySelector('#name');
  nameInput.addEventListener('keyup', countName);

  let form = document.querySelector('form');
  form.addEventListener('submit', preventSubmit);
}

function countName(event) {
  let span = document.querySelector('#nameLength');
  //let count = event.target.value;
  let count = event.target.value.length;
  span.textContent = count;
}

function preventSubmit(e) {
  e.preventDefault();
  alert(document.querySelector('#name').value + ' cadastrado com sucesso! ');
}
