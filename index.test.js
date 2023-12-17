const { getMessage, cambiarMensaje } = require('./index');
const fs = require('fs');

test('Comprobación del mensaje ', () => {
  expect(getMessage()).toBe("Mensaje de prueba para la practica final");
});

// Ejecutar las pruebas
test('Cambio de mensaje en el HTML', () => {
  const mensaje = document.getElementById('mensaje');
  cambiarMensaje();
  expect(mensaje.innerText).toBe('Mensaje cambiado');
});