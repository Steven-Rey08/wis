/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function validarSiNumero(numero){
    if (!/^([0-9])*$/.test(numero))
        alert("El valor " + numero + " no es un número");
        }