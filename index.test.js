const { getMessage, cambiarMensaje } = require('./index');
const fs = require('fs');
const { JSDOM } = require('jsdom');

// Mockear las funciones de document y window para Jest
const html = fs.readFileSync('index.html', 'utf-8'); 
const { window } = new JSDOM(html, { runScripts: 'dangerously' });
global.document = window.document;
global.window = window;

test('Comprobación del mensaje ', () => {
  expect(getMessage()).toBe("Mensaje de prueba para la practica final");
});

// Ejecutar las pruebas
test('Cambio de mensaje en el HTML', () => {
  const mensaje = document.getElementById('mensaje');
  cambiarMensaje();
  expect(mensaje.innerText).toBe('Mensaje cambiado');
});