const inputUsername = document.querySelector('#username');
const button = document.querySelector('form button');
const showUsers = document.querySelector('#showUsers');

let username = null;
let dataUsers = null;

let countMasc = null;
let countFem = null;
let sumIdades = null;
let medIdades = null;

let allUsers = [];
let filteredUsers = [];

let teste = [
  { nome: 'Jean', picture: 'imagem', age: '25 anos' },
  { nome: 'Katniss', picture: 'imagem', age: '25 anos' },
  { nome: 'Sledge', picture: 'imagem', age: '25 anos' },
  { nome: 'Yeshua', picture: 'imagem', age: '25 anos' },
];

window.addEventListener('load', () => {
  //fetchUsers();
  typing();
  listenForm();
});

async function fetchUsers() {
  const res = await fetch(
    'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo'
  );
  const json = await res.json();
  allUsers = json.results.map((user) => {
    const { name, picture, dob, gender } = user;
    return {
      name,
      picture,
      dob: dob.age,
      gender,
    };
  });

  console.log(allUsers);
}

function typing() {
  inputUsername.addEventListener('keyup', () => {
    if (inputUsername.value.length > 0) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });
}

function listenForm() {
  function searchUser() {
    username = inputUsername.value;
    filteredUsers = [filterUsers(teste, username)];
    render();
  }

  document.querySelector('form').addEventListener('submit', (e) => {
    searchUser();

    e.preventDefault();
  });
}

function render() {
  console.log(filteredUsers);
  filteredUsers.forEach((user) => {
    console.log(user);
    console.log(user.nome);
  });
  /* filteredUsers.foreach((user) => {
    const { nome, picture, age } = user;

    const userInnerHTML = `
    <div class='row'>
    <span class='img-user'>${picture}</span>
    <span class='name-user'>${nome}</span>
    <span class='age'>${age}</span>
    </div>
    
    `;
  });
  console.log(userInnerHTML); */
}

function filterUsers(arr, query) {
  return arr.filter(
    (el) => el.nome.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
}
