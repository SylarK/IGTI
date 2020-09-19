let name = document.querySelector('#name');
let email = document.querySelector('#email');

name.value = 'Lucas Amado';
email.value = 'syst.lucasamado@gmail.com';

document.querySelector('form').addEventListener('submit', () => {
  console.log('Funcionando');
});
