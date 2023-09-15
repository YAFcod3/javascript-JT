//todo  async await


//una funcion asincrona simpre va a requerir un promise

async function obtenerClientes(){

  //crear un promise  //la promesa recibe un callback (arrow functions)
  const clientes= new Promise( (resolve,reject)=>{

    setTimeout(()=>{
      resolve('Clientes descargados')
    },2000)

  });

  //error o  no 
  const error= true
  if (!error){
    const respuesta = await clientes ;  //el await detiene la ejecucion d esta lineaa hasta q termine la ejecuncion asincrona
    return respuesta;
  }else{
    await Promise.reject(('Hubo un error'))
  }


}

obtenerClientes().then(res=>console.log(res)).catch(err=>console.log(err))