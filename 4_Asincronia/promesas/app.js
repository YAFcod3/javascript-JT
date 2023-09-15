//Promesas

const esperando = new Promise(function (resolve, reject) {
  //resolve se ejecuta qndo la promesa se cumple y reject qndo no se cumple

  setTimeout(function () {
    resolve("Se ejecuto"); //estoy simulando como si respondiera la api ok
  }, 5000);
});

esperando.then(function (mensaje) {
  console.log(mensaje); //Se ejecuto
});

//----------------------------------------------
const aplicarDescuento = new Promise(function (resolve, reject) {
  const descuento = false;

  if (descuento) {
    resolve("Descuento Aplicado");                  //simulando q la api respondio ok
  } else {
    reject("No se pudo Aplicar el descuento");      // simulando q hubo un problema con la api
  }
});

aplicarDescuento
  .then(function (resultado) {               //  resolve asociado a  then
    console.log(resultado);
  })
  .catch(function (error) {                   //  reject asociado a catch
    console.log(error);
  });
