document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();
  var nombre = document.getElementById('nombre').value;
  if(nombre.length == 0) {
    alert('No has escrito nada en el nombre');
    return;
  }
  var email = document.getElementById('email').value;
  if (email.length < 6) {
    alert('El email no es válido');
    return;
  }
  this.submit();
}