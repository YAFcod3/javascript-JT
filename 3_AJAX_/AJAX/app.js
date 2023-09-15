document.getElementById("cargar").addEventListener("click", cargarDatos);

function cargarDatos() {
  //? 1.crear el objeto XMLHttpRequest
  const xhr = new XMLHttpRequest(); //instanciar XML Http Request

  //? 2.abrir una conexion
  xhr.open("GET", "datos.txt", true); //get post  delete put  //true lo hace asincrono

  //? 3.1 una vez q carga:
  //*version 1
  /*
  xhr.onload=function(){
    //200 : correcto | 403 :prohibido  | 404 : no encontrado
    if(this.status === 200){
      console.log(this.responseText)
      document.getElementById('listado').innerHTML=`<h1>${this.responseText}<h1>`
    }
  }
  */
  //? 3.2 una vez q carga
  //*version 2

  xhr.onreadystatechange = function () {
    console.log(`Estado : ${this.readyState}`)
    //ready status
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById(
        "listado"
      ).innerHTML = `<h1>${this.responseText}<h1>`;
    }
    /*
    0-no inicializado | 1-conexion | 2-recibido  | 3.procesando | 4. respuesta lista
      */
  };

  //? 4.enviar el request
  xhr.send();
}
