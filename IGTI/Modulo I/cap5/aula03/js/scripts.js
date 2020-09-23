/*

Promisse: 
* Uma promessa de execução que pode ou não ser executada.
* then -> resolve
* catch -> rejeita
* Melhora a sintaxe, não deixa tão feio.
* Algo melhor é se utilizar Async/await

*/

window.addEventListener('load', () => {
  //https://api.github.com/users/SylarK
  // fetch('https://api.github.com/users/SylarK')
  //   .then((res) => {
  //     res.json().then((data) => {
  //       //console.log(data);
  //       showData(data);
  //     });
  //   })
  //   .catch((error) => {
  //     console.log('Erro na requisição');
  //   });

  doFetch();
  doFetchAsync();

  // divisionPromisse(12, 6)
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((errorMessage) => {
  //     console.log('Erro na divisão: ' + errorMessage);
  //   });
});

function showData(data) {
  const user = document.querySelector('#id-user');
  user.textContent = 'Login : ' + data.login + '\n Username: ' + data.name;
}

function divisionPromisse(a, b) {
  return new Promisse((resolve, reject) => {
    if (b === 0) {
      reject('Não é possível dividir por 0');
    }

    resolve(a / b);
  });
}

async function usingAsync() {
  const division = await divisionPromisse(12, 2);
  console.log(division);
}

function doFetch() {
  fetch('https://api.github.com/users/SylarK')
    .then((res) => {
      res.json().then((data) => {
        //console.log(data);
        showData(data);
      });
    })
    .catch((error) => {
      console.log('Erro na requisição');
    });
}

async function doFetchAsync() {
  const res = await fetch('https://api.github.com/users/SylarK');
  const json = await res.json();
  console.log('Utilizando async!');
  console.log(json);
}
