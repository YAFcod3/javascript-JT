//todo iteradores



//todo -----------FOR EACH PARA RECORRER ARREGLOS

const pendientes=['Tarea','Comer','Proyecto','Aprender','JavaScript']

pendientes.forEach(function(pendiente,index){
  console.log(`${index}: ${pendiente}`)
})

// 0: Tarea
// 1: Comer
// 2: Proyecto
// 3: Aprender
// 4: JavaScript

//todo------- Map para recorrer un arreglo de objetos

const carrito=[
  {id:1,producto:'Libro'},
  {id:2,producto:'Camisa'},
  {id:3,producto:'Guitarra'},
  {id:4,producto:'Disco'}
]

const nombreProducto= carrito.map(function(carrito){
  return carrito.producto;

})

console.log(nombreProducto)

// (4) ['Libro', 'Camisa', 'Guitarra', 'Disco']
// 0: "Libro"
// 1: "Camisa"
// 2: "Guitarra"
// 3: "Disco"
// length: 4
// [[Prototype]]: 
// Array(0)








//todo -----------------------------------Recorrer Objeto   for in-----------------------

const automovil={
  modelo:'Camaro',
  motor:'6.1',
  anio:'1969',
  marca:'Chevrolet'
}

for(let auto in automovil){    // for i in automovil
  console.log(`${auto} : ${automovil[auto]}`)    // llave : valor
}

// modelo : Camaro
// motor : 6.1
// anio : 1969
// marca : Chevrolet




//?-------------------------------------------------iteradores-----------------------------------------------



//? ARREGLOS /SET /MAP
const ciudades=['Londres','New York','Madrid','Paris'];
const ordenes=new Set([123,231,131,102])

const datos = new Map();
datos.set('nombre','juan')
datos.set('profesion','desarrollador web')

console.log(ciudades)
// 0: "Londres"
// 1: "New York"
// 2: "Madrid"
// 3: "Paris"
console.log(ordenes)

// [[Entries]]
// 0: 123
// 1: 231
// 2: 131
// 3: 102
console.log(datos)

// [
//   {
//       "key": "nombre",
//       "value": "juan"
//   },
//   {
//       "key": "profesion",
//       "value": "desarrollador web"
//   }
// ]

//? ademas de recorrer con forEach while etc




//todo -----------------------------------------------for of------------------------------------------------
//? a diferencia de el FOR IN (para objetos), FOR OF es para elementos iterables

//Entries iterador    //* Entries a las ciudades (arreglo)
for(let entrada of ciudades.entries()){   
  console.log(entrada)
}

// (2) [0, 'Londres']
// (2) [1, 'New York']
// (2) [2, 'Madrid']
// (2) [3, 'Paris']




 //* Entries a los datos (MAP)   SI LE QUITO EL entries() HACE LO MISMO
for (let entrada of datos.entries()){
  console.log(entrada)
}


// (2) ['nombre', 'juan']
// 0: "nombre"
// 1: "juan"


// (2) ['profesion', 'desarrollador web']
// 0: "profesion"
// 1: "desarrollador web"



//**values a las ciudades (arreglo)  por default es values de todas maneras

for(let entrada of ciudades.values()){   
  console.log(entrada)
}

// Londres
// New York
// Madrid
// Paris



//**values a las ordenes (set ) funcionna tam asi el keys

for(let entradas of ordenes.values()){   
  console.log(entradas)
}

// 123
// 231
// 131
// 102


//*keys a las ciudades (arreglo)

for(let entradas of ciudades.keys()){   
  console.log(entradas)
}

//0
// 1
// 2
// 3


//*keys a las datos (MAP)

for (let entrada of datos.keys()){
  console.log(entrada)

}
// nombre
// profesion




//todo-----------------------iteradores para STRING--------------------------------------------------

const mensaje='Aprende JS';

//*forma vieja

// for(let letra;letra<mensaje.length;letra++){
//   console.log(letra)
// }

for (let letra of mensaje){
  console.log(letra)
}

// A
// p
// r
// e
// n
// d
// e
 
// J
// S


//todo    ---------------------------RECORRER UN NODE LIST--------------------------------

const enlaces=document.getElementsByTagName('a')

for(let enlace of enlaces){
  console.log(enlace.href)
}
