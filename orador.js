const nombre2 = document.getElementById("nombre2");
const expname2 = /^(([A-ZÁÉÍÓÚÑ]{1}[a-záéíóúüñ]*)(\s)?)((((((((de)|(del)|(la)|(las)|(los))\s)?)?){1,2})(([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*)(\s([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*))?){1})?)$/
function validarnombre2 () {
    if (!expname2.test(nombre2.value)) {
        document.getElementById("errornombre2").innerHTML = "el nombre es incorrecto por favor intente nuevamente ";

    }else {
        document.getElementById("errornombre2").innerHTML = "el nombre es correcto puede proseguir "
    }
}

btn.addEventListener("click",validarnombre2);



const apellido2 = document.getElementById("apellido2");
const expapellido2 = /^(([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü]*)|([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü]*,\s(de))|(((((de)|(del)|(De)|(Del)|(la)|(las)|(los))\s)?){1,2}([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*))|([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü]*\s)(((((de)|(del)|(De)|(Del)|(la)|(las)|(los))\s)?){1,2}([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*)))$/
function validarapellido2 () {
    if (!expapellido2.test(apellido2.value)){
        document.getElementById("errorapellido2").innerHTML = "el apellido es incorrecto por favor intente nuevamente ";

    }else {
        document.getElementById("errorapellido2").innerHTML = "el apellido es correcto puede proseguir "
    }  
}

btn.addEventListener("click",validarapellido2 );




const email2 = document.getElementById("email2");
const regexp2= /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
function validarEmail2 () {
    if(!regexp2.test(email2.value)){
        document.getElementById("erroremail2").innerHTML = "el email no es correcto ";

    }else {
        document.getElementById("erroremail2").innerHTML = "el email es correcto puede proseguir ";
    }
}

btn.addEventListener("click",validarEmail2,);


const telefono2 = document.getElementById("telefono2");
const exptelefono2 = /^((\+54\s?)?(\s?9\s?)?\d{2,3}[\s-]?\d{3,4}-?\d{3,4}|\d{10,11}|(\d{3,4}[\s-]){1,2}\d{3,4})$/g
function validartelefono2 () {
    if (!exptelefono2.test (telefono2.value)) { 
    
    document.getElementById("errortelefono2").innerHTML = "el telefono no es correcto ";

}else {
    document.getElementById("errortelefono2").innerHTML = "el telefono es correcto puede proseguir ";
}
}

btn.addEventListener("click",validartelefono2,);


const direccion2 = document.getElementById("direccion2");
const expdireccion2 = /^((\+54\s?)?(\s?9\s?)?\d{2,3}[\s-]?\d{3,4}-?\d{3,4}|\d{10,11}|(\d{3,4}[\s-]){1,2}\d{3,4})$/g
function validardireccion2 () {
    if (!expdireccion2.test (direccion2.value)) { 
    
    document.getElementById("errordireccion2").innerHTML = "la direccion no es correcta ";

}else {
    document.getElementById("errordireccion2").innerHTML = "la direccion  es correcta puede proseguir ";
}
}

btn.addEventListener("click",validardireccion2,);


var paises = ("argentina","chile","uruguay");
const pais2 = document.getElementById("pais2");
function validarpais2 () {
    if (pais2 === paises ) { 
        document.getElementById("errorpais2").innerHTML = "el pais no es correcto ";

    }else {
        document.getElementById("errorpais2").innerHTML = "el pais es correcto puede proseguir ";
  
}
}

btn.addEventListener("click",validarpais2,);



const sweetorador = document.getElementById("btn")
sweetorador.addEventListener("click", () => {
Swal.fire(
    {
  position: 'top-end',
  icon: 'success',
  title: 'ingreso exitoso',
  showConfirmButton: false,
  timer: 1500

}
)
});





















