//sets, permite crear lista de vaalores ,similar a un array pero no va a tener duplicados, si un elemento ya existe ,no se agrega al set


//?ideal para eliminar duplicados

let carrito =new Set();
carrito.add('Camisa')
carrito.add('Disco1')
carrito.add('Disco2')
carrito.add('Disco3')
carrito.add('Disco2')

console.log(carrito) // {'Camisa', 'Disco1', 'Disco2', 'Disco3'}

carrito.forEach((producto,index)=>{
          console.log(`${index}: ${producto}`)   //? a diferencia del array,aqui llave(en array es indice numerico) y valor son el mismo valor
})

//convertr set a array

const arregloCarrito = [...carrito]
console.log(arregloCarrito)



let numeros = new Set([1,2,5,6,7,5,5,8,6])
console.log(numeros)  // 1 2 5 6 7 8

console.log(numeros.size)  //6

//comprobar q exista un elemento
console.log(carrito.has('Guitarra'))  //false

//eliminar del set
carrito.delete('Camisa')
console.log(carrito) // {'Disco1', 'Disco2', 'Disco3'}

//limpiarlo todo el set, elimimnar todos los elementos
carrito.clear()
console.log(carrito)



