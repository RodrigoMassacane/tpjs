
console.log ("eventos");

//validacion de nombre en formulario//
const nombre = document.getElementById("nombre");
const errornombre = document.getElementById("errornombre").innerHTML = "El Nombre es incorrecto";
const botoenviar = document.getElementById("enviarnombre");


console.log(nombre.value.length);


function validarnombre () {
    if (nombre.value.length<3){
        document.getElementById("errornombre").innerHTML = "El Nombre es incorrecto";
    } else {
        document.getElementById("errornombre").innerHTML = "El Nombre es Correcto";
    }
}

botoenviar.addEventListener("click",validarnombre)

//validacion de apellido en formulario//
const apellido = document.getElementById("apellido");
const errorapellido = document.getElementById ("errorapellido").innerHTML = "el apellido es incorrecto";
const botoenviarr = document.getElementById("enviarapellido");
console.log(apellido.value.length);
function validarapellido () {
    if (apellido.value.length<3){
        document.getElementById("errorapellido").innerHTML = "El apellido es incorrecto";
    } else {
        document.getElementById("errorapellido").innerHTML = "El apellido es Correcto";
    }
}

botoenviar.addEventListener("click",validarapellido,)



//validacion de email en formulario//

const email = document.getElementById("email");
const regexp= /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
function validarEmail () {
    if(!regexp.test(email.value)){
        document.getElementById("erroremail").innerHTML = "el email no es correcto ";

    }else {
        document.getElementById("erroremail").innerHTML = "el email es correcto  ";
    }
}

botoenviar.addEventListener("click",validarEmail,);


//sweet alert //


const sweet = document.getElementById("enviarnombre");
sweet.addEventListener("click", () => {
  swal.fire(
       {
        title: "Felicitaciones ",
        text: "Sus datos han sido cargados de forma satifactoria , gracias por participar ",
        icon: "success",
        confirmbuttontext: "aceptar",
         backdrop:"#B7950B"

      }
   );
});


