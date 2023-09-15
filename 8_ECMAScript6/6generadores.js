// es una func q va a retornar un iterador

//?Generadores

function *crearGenerador(){
  //yield

  yield 1;
  yield 'Nombre'
  yield 3+3
  yield true
}


const iterador= crearGenerador()

console.log(iterador.next().value)  //1
console.log(iterador.next().value)   //Nombre
console.log(iterador.next().value)    // 6
console.log(iterador.next().value)    //true
console.log(iterador.next().value) //undefined



//******************** */


function *nuevoGenerador(){
  
 for(let i = 0; i < carrito.length; i ++){
  yield carrito[i]
 }

}


const carrito = ['Producto1','Producto2','Producto3','Producto4']

let iterador2 = nuevoGenerador(carrito)

console.log(iterador2.next().value)  //Producto1
// console.log(iterador2.next().done)
console.log(iterador2.next().value)  //Producto2
console.log(iterador2.next().value)  //Producto3

console.log(iterador2.next().value)  //Producto4
console.log(iterador2.next().value)  //Producto4








