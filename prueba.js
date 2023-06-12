const sweetticket = document.getElementById("buy");
sweetticket.addEventListener("click", () => {
    swal.fire(
         {
            title: "felicitaciones ",
             text: "su ticket sera enviado en brevedad a su casilla de correo ",
             icon: "success"
  
        }
     );
  });


  /** carrito de compras  */

  class ticket {
   constructor (id,nombre,precio,imagen) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.imagen = imagen;
      this.cantidad = 1;
   }
  }
  
  const trainee = new ticket (1,"trainee",1200,"imagenes/ticketa.png");
  const junior = new ticket (2,"junior",2200, "imagenes/ticketb.png");
  const senior = new ticket (3,"senior",4000, "imagenes/ticketr.png");

  /**array con tickets  */
  const tickets = [trainee, junior, senior];

/**array de carrito  */
  let carrito = []

//console.log(tickets);

/**con esta funcion mostramos los tickets de forma dinamica en el html*/


  const contendortickets = document.getElementById("contenedortickets");

  const mostrartickets = () => {
   tickets.forEach(ticket => {
      const card = document.createElement("div");
      card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
      card.innerHTML = `
            <div>
                  <img src= "${ticket.imagen}" class = "card-img-top imgticketss" alt = "${ticket.nombre}">
                        <div class = "card-body">
                     <h5>${ticket.nombre} </h5>
                     <p>${ticket.precio} </p>
                  <button class "btn colorBoton" id = "boton ${ticket.id}" > Agregar Al Carrito </button>
               </div>
            </div> `

      contendortickets.appendChild(card);

      //agregamos los tickets al carrito //

      const boton = document.getElementById(`boton ${ticket.id}`);
      boton.addEventListener("click", () => {
         agregaralcarrito(ticket.id)
      })


   })
  }
  

//funcion agregar al carrito // 

const agregaralcarrito = (id) =>{
   const ticketencarrito = carrito.find(ticket => ticket.id === id );
   if(ticketencarrito) {
      ticketencarrito.cantidad++;
   } else {
      const ticket = tickets.find (ticket => ticket.id === id);
      carrito.push(ticket);
   }
   calculartotal();
}




  mostrartickets();


  //mostrar el carrito de compras.//

  const contenedorticket = document.getElementById("contendortickets");

  const vercarrito = document.getElementById("vercarrito");

  vercarrito.addEventListener("click", () => {
  mostrarcarrito();
  })

  //funcion para mostrar el carrito //
  const mostrarcarrito = () => {
   contendortickets.innerHTML = "";


   carrito.forEach(ticket => {
      const card =document.createElement("div");
      card.classList.add("col-xl-3","col-md-6","col-xs-12");
      card.innerHTML = `
            <div class = "card" >
                  <img src= "${ticket.imagen}" class = "card-img-top imgticketss" alt = "${ticket.nombre}">
                        <div class = "card-body">
                     <h5>${ticket.nombre} </h5>
                     <p>${ticket.precio} </p>
                     <p>${ticket.cantidad} </p>
                  <button class "btn colorBoton" id = "eliminar${ticket.id}" > eliminar ticket </button>
               </div>
            </div> `

      contendortickets.appendChild(card);


      //eliminar tickets del carrito //

      const Button = document.getElementById (`eliminar${ticket.id}`);
      Button.addEventListener("click", () => {
         eliminar(ticket.id);
      } )
   })
  }

  //funcion para elimanar tickets del carrito //

  const eliminar = (id) => {
  const ticket = carrito.find(ticket => ticket.id === id);
   const indice = carrito.indexOf(ticket);
  carrito.splice(indice,1);

   mostrarcarrito();
  } 

  //vaciar carrito de compras//

  const vaciarcarritoentero = document.getElementById("vaciarcarrito");

  vaciarcarritoentero.addEventListener("click" , () => {
   eliminartodoelcarrito ();
  })
  
  const eliminartodoelcarrito = () => {
   carrito = [];
   mostrarcarrito();
  }



//const total = document.getElementById("totalcompra");

//const calculartotal = () =>{
//  let totalcompra = 0;
//   carrito.foreach(ticket  => {
//totalcompra += ticket.precio * ticket.cantidad;
//   })
//totalcompra.innerHTML = `totalcompra: $${totalcompra}`;
//}








 