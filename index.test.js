const { getMessage, getMessageFromHTML } = require("./index");
const fs = require("fs");

// Mockear las funciones de document y window para Jest
const { JSDOM } = require("jsdom");
const html = fs.readFileSync("index.html");
const { window } = new JSDOM(html);
global.document = window.document;
global.window = window;

test("Comprobación del mensaje ", () => {
  expect(getMessage()).toBe("Mensaje de prueba para la practica final");
});

// Ejecutar las pruebas
test("Comprobación de mensaje en el HTML", () => {
  expect(getMessageFromHTML()).toBe("Hola mundo");
});
