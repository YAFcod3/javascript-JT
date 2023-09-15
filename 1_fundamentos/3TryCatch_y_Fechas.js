//todo  MANEJANDO ERRORES CON TRY CATCH

function obtenerClientes(){
  console.log('Descargando...');

  setTimeout( function(){console.log('completo')}, 3000 ) ;  

}

obtenerClientes()

//esto de arriba esta ok,
//de hecho con este tipo de funcion puedo invocar antes de la definicion PERO
//si ocurre un error antes de esta invocacion ,no se ejecutara y se para el programa

//*EJEMPLO

// algo()

// function obtenerClientes(){
//   console.log('Descargando2...');

//   setTimeout( function(){console.log('completo2')}, 3000 ) ;  

// }

// obtenerClientes()

//**POR TANTO USAR  TRY CATCH */
//**COMUN USARLO EN PETICIONES */


function obtenerClientes(){
  console.log('Descargando3...');
  setTimeout( function(){console.log('completo3')}, 3000 ) ;  
}


try {
  algo()
  
} catch (error) {
  console.log(error)
  
}



obtenerClientes()



//**POR TANTO USAR  TRY CATCH FINALLY */
//**FINALLY EJECUTA SU CODIGO AUNQ exista O NO ERROR */

try {
  algo()
  
} catch (error) {
  console.log(error)
  
}finally{
  console.log('No le importa, ejecuta de todos modos')
}



//todo FECHAS

//USO DE OBJETO LLAMADO Date
 const diaHoy= new Date()
 
 //fecha en especifico
 let navidad2017=new Date('12-25-2017')

 console.log(diaHoy)
 console.log(navidad2017) //Mon Dec 25 2017 00:00:00 GMT-0500

 let valor;
 //Mes
 valor=diaHoy.getMonth()  //new Date().getMonth()
 console.log(valor)  //0   enero es mes 0 ,diciembre es mes 11
 valor=new Date().getDate() // regresa el dia
 console.log(valor)    //5
 valor=diaHoy.getDay() //
 console.log(valor)   //4
 //obtener el anio
 valor = new Date().getFullYear()
 valor= new Date().getMinutes()
 valor=new Date().getHours()
 console.log(valor)
 //milisegundos desde 1970
 // valor=diaHoy.getTime()


 //Modificar SET
  let valor1= new Date().setFullYear(2015);
  console.log(valor1)
