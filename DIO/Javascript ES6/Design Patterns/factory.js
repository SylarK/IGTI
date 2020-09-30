function Pessoa(customProperties) {
  return {
    name: 'Lucas',
    lastname: 'Amado',
    ...customProperties,
  };
}

const p = Pessoa({ name: 'Custom Name', age: 26 });
console.log(p);
