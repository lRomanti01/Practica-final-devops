function getMessageFromHTML() {
    const element = document.getElementById('mensaje').innerHTML
    return element
  }
  
  function getMessage() {
    return "Mensaje de prueba para la practica final";
  }
  
  module.exports = { getMessage, getMessageFromHTML };
  