const inputUsername = document.querySelector('#username');
const button = document.querySelector('form button');
const showUsers = document.querySelector('#showUsers');
const showData = document.querySelector('#dataUsers');

const reducer = (accumulator, currentValue) => accumulator + currentValue;

let username = null;
let dataUsers = null;

let countMasc = null;
let countFem = null;
let sumIdades = [];
let medIdades = null;

let allUsers = [];
let filteredUsers = [];

let userHTML = '';

let teste = [
  {
    nome: 'Jean',
    picture:
      'https://boostchiropractic.co.nz/wp-content/uploads/2016/09/default-user-img.jpg',
    age: 25,
    gender: 'Male',
  },
  {
    nome: 'Katniss',
    picture:
      'https://boostchiropractic.co.nz/wp-content/uploads/2016/09/default-user-img.jpg',
    age: 25,
    gender: 'Female',
  },
  {
    nome: 'Sledge',
    picture:
      'https://boostchiropractic.co.nz/wp-content/uploads/2016/09/default-user-img.jpg',
    age: 25,
    gender: 'Male',
  },
  {
    nome: 'Yeshua',
    picture:
      'https://boostchiropractic.co.nz/wp-content/uploads/2016/09/default-user-img.jpg',
    age: 25,
    gender: 'Male',
  },
];

window.addEventListener('load', () => {
  fetchUsers();
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
      name: name.first,
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
    userHTML = '';
    username = inputUsername.value;
    //let allUsersArray = Object.keys(allUsers).map((i) => allUsers[i]);
    //console.log(allUsersArray);
    filteredUsers = [filterUsers(allUsers, username)];
    render();
  }

  document.querySelector('form').addEventListener('submit', (e) => {
    searchUser();

    e.preventDefault();
  });
}

function render() {
  function renderData() {
    medIdades = sumIdades.reduce(reducer) / sumIdades.length;

    dataUsers = `
    <h6>Estatísticas</h6>
    <p>Sexo masculino: ${countMasc === null ? 0 : countMasc}</p>
    <p>Sexo feminino: ${countFem === null ? 0 : countFem}</p>
    <p>Soma das idades:${sumIdades.reduce(reducer)}</p>
    <p>Média das idades:${medIdades}</p>
    `;

    showData.innerHTML = dataUsers;

    countMasc = null;
    countFem = null;
    sumIdades = [];
    medIdades = null;
  }

  filteredUsers.forEach((user) => {
    user.forEach((res) => {
      const { nome, picture, age, gender } = res;

      if (gender === 'Male') {
        countMasc++;
      } else {
        countFem++;
      }

      sumIdades.push(age);

      const userInnerHTML = `
      <div class='row'>
      <span class='img-user'><img src='${picture}' alt='user img'></span>
      <span class='name-user'>${nome}, <span class='age'>${age} anos</span></span>
      </div>
      
      `;

      userHTML += userInnerHTML;
    });
    showUsers.innerHTML = userHTML;
    renderData();
  });
}

function filterUsers(arr, query) {
  return arr.filter(
    (el) => el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
}
