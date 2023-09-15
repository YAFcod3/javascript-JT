//estos permiten mas control 


function  crearIterador(carrito){

  //iniciar el indice
  let i =0

  return {
    siguiente : ()=>{
      let fin = (i >= carrito.length)

      let valor = !fin ? carrito[i++]  : undefined

        return {
        fin:fin,
        valor:valor
      }
    }
  }
}



const carrito = ['Producto1','Producto2','Producto3','Producto4']

const recorrerCarrito=crearIterador(carrito)

console.log(recorrerCarrito.siguiente())  //{fin: false, valor: 'Producto1'}
console.log(recorrerCarrito.siguiente())  //{fin: false, valor: 'Producto2'}
console.log(recorrerCarrito.siguiente())  // {fin: false, valor: 'Producto3'}
console.log(recorrerCarrito.siguiente()) //{fin: false, valor: 'Producto4'}
console.log(recorrerCarrito.siguiente())   //{fin: true, valor: undefined}