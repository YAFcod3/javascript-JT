//al igual q los sets son listas ordenandas solo q almacenan los valores como llave y valor
//no repite valores


let cliente =new Map()
cliente.set('nombre','Karen')
cliente.set('tipo','Premium')
cliente.set('saldo',3000)

//acceder a valores
console.log(cliente.get('nombre')) //Karen


console.log(cliente.size) //3

//comprobar si existe key
console.log(cliente.has('apellido')) //false

//borrar elemento del map
cliente.delete('nombre')
//borra todo
cliente.clear()



//
// const paciente = new Map()


//patrametero por defsault por si no viene
const paciente = new Map([['nombre','paciente'],['habitacion','no definido']])



paciente.set('nombre','Antonio')
paciente.set('habitacion',400)



paciente.forEach((datos,index)=>{
  console.log(`${index} : ${datos}`)   //a diferencia de set si muestra llave-valor 
})


// nombre : Antonio
// habitacion : 400
