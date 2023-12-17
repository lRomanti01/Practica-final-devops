const { getMessage, getMessageFromHTML } = require("./index");

test("Comprobación del mensaje ", () => {
  expect(getMessage()).toBe("Mensaje de prueba para la practica final");
});

// Ejecutar las pruebas
test("Comprobación existe documento html", () => {
  getMessageFromHTML()
  expect(getMessageFromHTML()).toBe(true);
});
