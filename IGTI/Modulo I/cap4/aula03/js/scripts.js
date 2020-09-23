window.addEventListener('load', () => {
  let arraySpread = [];
  //doSpread();
  doRest();
});

function doSpread() {
  let array1 = ['John', 'Piper', 'Alex'];
  let array2 = ['Megan', 'Kenel', 'Katniss'];

  arraySpread = [...array1, ...array2];
  console.log('Spread : ' + arraySpread);
}

function doRest() {
  console.log(infiniteSum(1, 2));
  console.log(infiniteSum(1, 2, 5, 10, 50));
  console.log(infiniteSum(1, 2, 20, 500, 45, 35));
}

function infiniteSum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

function doDestructuring() {
  // const { username , password } = first.login
}
