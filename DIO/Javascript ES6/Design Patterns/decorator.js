let loggedIn = false;

function callAuthenticated(fn) {
  return !!loggedIn && fn();
}

function sum(a, b) {
  return a + b;
}

console.log(callAuthenticated(() => sum(2, 3)));
loggedIn = true;
console.log(callAuthenticated(() => sum(2, 3)));
