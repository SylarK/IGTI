const freteGratis = require('./freteGratis');

test('Validando Frete Grátis - Valor R$ 100', () => {
  expect(freteGratis(100)).toBe(false);
})

test('Validando Frete Grátis - Valor R$ 200', () => {
  expect(freteGratis(200)).toBe(true);
})

test('Validando Frete Grátis - Valor R$ 150', () => {
  expect(freteGratis(150)).toBe(false);
})

test('Validando Frete Grátis - Valor R$ 150', () => {
  expect(freteGratis('180')).toBe(true);
})

test('Validando Frete Grátis - Valor R$ 150', () => {
  expect(freteGratis('string')).toBe(false);
})