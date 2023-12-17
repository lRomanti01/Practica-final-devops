const fs = require("fs");

function getMessageFromHTML() {
  const html = fs.readFileSync("index.html");
  if (html) {
    return true;
  } else {
    return false;
  }
}

function getMessage() {
  return "Mensaje de prueba para la practica final";
}

module.exports = { getMessage, getMessageFromHTML };
