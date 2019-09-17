/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function() {
  'use strict';

  window.addEventListener('load', function() {
    var form = document.getElementById('needs-validation');
    form.addEventListener('click', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();

      } else if (form.checkValidity() === true) {
        alert('!Registro realizado con exito¡');
      }
      form.classList.add('was-validated');
    }, false);
  }, false);
})();