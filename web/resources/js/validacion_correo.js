/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function validar(){
    let email = document.getElementById('correo').value;
    let pass = document.getElementById('pass').value;

    if (email == 'supervisor@gmail.com' && pass == "12345") {
        window.location.href = '../si/supervisor.html';	
    }else if(email == 'ingeniero@gmail.com' && pass == "123456"){
        window.location.href = '../si/ingeniero.html';

    }else if(email == 'contratista@gmail.com' && pass == "1234567"){
         window.location.href = '../si/contratista.html';

    }else if(email == 'trabajador@gmail.com' && pass == "12345678"){
         window.location.href = '../si/trabajador.html';
    }
    else {
    swal({
      title: "Que mal!",
      text: "Has ingresado un usuario no registrado!",
      icon: "error",
      button: "Cerrar!",
    });
    }
}