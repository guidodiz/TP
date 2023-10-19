function enviar (){

    if (document.formulario.nombre.value.length <= 6) {

        alert("El nombre y apellido deben contener como mínimo 3 letras cada uno y estar separados")
        document.formulario.nombre.focus();
        return;

    }


    let edad = document.formulario.edad.value;

    edad = validarEdad(edad);

    document.formulario.edad.value = edad;

    if(edad == ""){

        alert("Debe ingresar un número para la edad")
        document.fomrulario.edad.focus();
        return;
    } else if (edad < 12) {
            alert("Debe tener al menos 12 años para enviar el formulario")
            document.formulario.edad.focus();
            return;
        
    } else {
        if(edad >= 100){
            alert("debe ingresar un número real para la edad")
            document.formulario.edad.focus();
            return;
        }
    }


    validarEmail(document.formulario.email.value)



    if(document.formulario.motivo.selectedIndex == 0){
        alert("Debe seleccionar un motivo de la consulta")
        document.formulario.motivo.focus();
        return;
    }


    
    if(document.formulario.texto.value.length <= 3){
        alert("Debe ingresar una consulta válida")
        document.formulario.texto.focus();
        return;
    }



    alert("Su consulta ha sido enviada con exito");
    document.formulario.submit();

}




function validarEdad(valor){

    valor = parseInt(valor);

    if (isNaN(valor)) {
       
        return "";
    } else {
      
        return valor;
    }
}



function validarEmail(email){

    let expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    let esValido = expReg.test(email);

    if (esValido == false) {

        alert("Debe ingresar una dirección de email")
        document.formulario.email.focus();
        return;
    }

}