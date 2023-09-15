//! destructuring a objetos
const cliente = {
  nombre: "Alejandra",
  tipo: "Premium",
};

//antes
console.log(cliente.nombre);

//+ modrerno
let { nombre, tipo } = cliente;
console.log(nombre);

//********************** */

const cliente2 = {
  tipo: "Premium",
  nombre: "Antonio",
  datos: {
    ubicacion: {
      ciudad: "Habana",
      pais: "Cuba",
    },
    cuenta: {
      desde: "10-12-2020",
      saldo: 4000,
    },
  },
};


let {datos:{ubicacion}} = cliente2
console.log(ubicacion) //{ciudad: 'Habana', pais: 'Cuba'}
console.log(ubicacion.ciudad)  //Habana
let {datos:{cuenta}} = cliente2
console.log(cuenta) //{desde: '10-12-2020', saldo: 4000}
console.log(cuenta.desde) //10-12-2020






const cliente3 = {
nombre3:'Pedro',
tipo3:'Premium'
}


let {nombre3,tipo3,saldo=0}= cliente3
console.log(nombre3,tipo3,saldo=0)   //Pedro Premium 0



//! destructuring a arreglos

const ciudades= ['Londres','New York','Madrid','Paris']

const [primeraCiudad,segundaCiudad]= ciudades
console.log(primeraCiudad,segundaCiudad)   //Londres New York


//solo quiero extraer especificos
const [ , , madrid, paris] = ciudades
console.log(madrid,paris)             //Madrid Paris

const [ , , ciudad, ,] = ciudades
console.log(ciudad)   //Madrid






const client = {
  tipo2:'Premium',
  saldo:3000,
  datos:{
    apellido:'Perez',
    residencia:{
      ciudad:'Habana'
    }
  },
  movimientos:['12-03-2018','12-03-2017','12-03-2016']
}

let {tipo2,datos:{residencia}, movimientos: [ , dos]}=client

console.log(dos)  //12-03-2017

console.log(residencia) //{ciudad: 'Habana'}
console.log(tipo2)   //Premium




//! destructuring a funciones

//**forma vieja */

// function reservacion(completo,opciones){
//   opciones = opciones || {};

//   let metodo = opciones.metodoPago , 
//   cantidad = opciones.cantidad

//   console.log(metodo,cantidad)   //tarjeta 20000
// }
  


//**forma moderna */


// function reservacion(completo,opciones){

  // let {metodoPago,cantidad,dias}=opciones
  // function reservacion(completo,{metodoPago,cantidad,dias}={}){
    function reservacion(completo,{metodoPago='efectivo',cantidad=0,dias=0}={}){



 

  console.log(metodoPago,cantidad,dias)   //tarjeta 20000 3
}



reservacion(
  true,
  {
    metodoPago:'tarjeta',
    cantidad:20000,
    dias:3
  }
)
