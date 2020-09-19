/*
  IMPLEMENTAÇÃO DE UM CRUD
  (Create, Retrieve, Update, Delete)
*/

window.addEventListener('load', start);
let globalNames = ['Um', 'Dois', 'Três', 'Quatro'];

function start() {
  preventFormSubmit;
}

function preventFormSubmit() {
  function handleFormSubmit(event) {
    console.log('Parei ele para você!');
    event.preventDefault();
  }

  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}
