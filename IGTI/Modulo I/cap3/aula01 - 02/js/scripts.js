course1 = document.querySelector('#course1');
course3 = document.querySelector('#course3');
course2 = document.querySelector('#course2');
course1.textContent = 'Alteração Utilizando Javascript';

const email = document.querySelector('#email');
const idade = document.querySelector('#idade');
idade.innerHTML = '26 anos';
email.textContent = 'syst.lucasamado@gmail.com';

tecnologias = document.querySelectorAll('.tecnologia');

console.log('Tecnologias utilizadas: ');
for (let i = 0; i < tecnologias.length; i++) {
  console.log(tecnologias[i].textContent);
}

email.classList.add('change-gray');
//classList.remove()
