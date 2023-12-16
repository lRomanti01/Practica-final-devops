const message = require('./index')

test('Comprobación del mensaje ', () => {
  expect(message()).toBe("Mensaje de prueba para la practica final");
});
