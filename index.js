function cambiarMensaje() {
    document.getElementById('mensaje').innerText = 'Mensaje cambiado';
  }
  
  function getMessage() {
    return "Mensaje de prueba para la practica final";
  }
  
  module.exports = { getMessage, cambiarMensaje };
  