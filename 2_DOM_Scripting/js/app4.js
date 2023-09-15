//todo EVENT LISTENER

//todo MOUSE


//**click al buscador del hero
document.querySelector('#submit-buscador').addEventListener('click',function(e){
  e.preventDefault()       //prevenir q vaya al action del form  (la accion por default  )
  alert('Buscando Cursos')
  let elemento;
  elemento=e;
  elemento=e.target;
  elemento=e.target.id;
  elemento=e.target.className;
  // elemento=e.target.innerText;
  console.log(elemento)
})


//? otra forma:
/*
document.querySelector('#submit-buscador').addEventListener('click',ejecutarBoton)  //NO ejecutarBoton()


function ejecutarBoton(e){
  e.preventDefault()       //prevenir q vaya al action del form  (la accion por default  )
  alert('Buscando Cursos,otra via')
}
*/




document.querySelector('#encabezado').addEventListener('click',function(e){
  console.log(e.target.innerText)   //Cursos En Línea

  //?voy a modificar ese texto de la web
  e.target.innerText='Nuevo Encabezado'   //tamb puedo poner x ejemplo: 2+2 y me saldra 4
})





//variables
const encabezado=document.querySelector('#encabezado');
const enlaces=document.querySelectorAll('.enlace');
const boton=document.querySelector('#carrito')


//?click 
//boton.addEventListener('click',obtenerEvento)      //Evento: click
//?doble click
//boton.addEventListener('dblclick',obtenerEvento)     //Evento: dblclick
//? mouse enter(solo con ponerme arriba del boton)
//boton.addEventListener('mouseenter',obtenerEvento)    //Evento: mouseenter
//?mouse leave
//boton.addEventListener('mouseleave',obtenerEvento)      //Evento: mouseleave
//?mouse over
// boton.addEventListener('mouseover',obtenerEvento)  
//?mouse out
// boton.addEventListener('mouseout',obtenerEvento)  
//?mouse down
// boton.addEventListener('mousedown',obtenerEvento)  
//?mouse up
// boton.addEventListener('mouseup',obtenerEvento) 


//?mouse move
encabezado.addEventListener('mousemove',obtenerEvento)    //mientas memueva encima del encabezado aplica la func


function obtenerEvento(e){

  console.log(`Evento: ${e.type}`)   
  // console.log(busqueda.value)
  // document.querySelector('#encabezado').innerText=busqueda.value

}





//todo PARA LOS INPUTS

const busqueda=document.querySelector('#buscador')
busqueda.addEventListener('keydown',obtenerEvento)

//? otros
//keyup  ,qndo sueltas la tecla
//keypress , qndo escribes
//focus    ,qndo da click en el input x ejemplo
//blur , sirve para validar
//cut     qndo pongo algo en el input y doy cortar 
//copy                                      copiar
//paste
//input        revisa los anteriores
//change      para Select

//!Event Bubbling
//
const card=document.querySelector('.card');
const infoCurso=document.querySelector('.info-card')
const agregarCarrito=document.querySelector('.agregar-carrito')

card.addEventListener('click',function(e){
  e.stopPropagation()
  console.log('click en card')
})
infoCurso.addEventListener('click',function(e){
  e.stopPropagation()
  console.log('click en infoCurso')
})
agregarCarrito.addEventListener('click',function(e){
  e.stopPropagation()
  console.log('click en agregarCarrito')
})


//? esto de arriba es el tema de como sse propaga el evento ,ya q card contiene a info-curso y este a su vez a agregar-carrito

//*PREVENIR LA PROPAGACION CON e.stopPropagation()

//todo OTRA FORMA DE EVITAR LA PROPAGACION ES CON LA delegacion de eventos

document.body.addEventListener('click',eliminarElemento)

function eliminarElemento(e){
  e.preventDefault()
  console.log('click')
  //console.log(e.target.classList)  //lo q toque en el dom , m dice su clase



  if(e.target.classList.contains('borrar-curso')){   //delegacion d eventos
    // console.log('Si')
    // console.log(e.target.parentElement)    //td
    console.log(e.target.parentElement.parentElement)  //tr
    console.log(e.target.parentElement.parentElement.remove(  ))

  }
  if(e.target.classList.contains('agregar-carrito')){
        console.log('Curso agregado')
  }



}


