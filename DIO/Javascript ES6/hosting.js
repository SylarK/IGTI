function fn() {
  console.log(text);
  var text = 'Exemplo';

  console.log(text);
}

fn();

function fn2() {
  log('Hoisting de função');

  function log(value) {
    console.log(value);
  }
}

fn2();
