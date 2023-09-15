document.getElementById("txtBtn").addEventListener("click", cargarTxt);

// fetch().then().then().catch()         reciben callbacks
function cargarTxt() {
  //fetch es una  promesa
  fetch("datos.txt") //normalmente son 2 then
    .then(function (res) {
      //1er then  para conectarse y traer la informacion  ahi vou a decir como queiro los datos
      return res.text();
    })
    .then(function (empleados) {
      //2do para  ya obtener los datos
      console.log(empleados);
      document.getElementById("resultado").innerHTML = empleados;
    })
    .catch(function (error) {
      console.log(error);
    });
}
//-----------------------------------------------------
document.getElementById("jsonBtn").addEventListener("click", cargarJSON);

function cargarJSON() {
  // fetch().then(callback).then(callback).catch(callback)

  fetch("empleados.json")
    .then(function (res) {
      //todo  res=> res.json()   esto es en arrow functions lo q puede recibir el then
      console.log(res);
      return res.json();
    })
    .then(function (data) {
      //todo  data=> {    }   esto es en arrow functions lo q puede recibir el then
      console.log(data);
      let html = "";
      data.forEach((empleado) => {
        html += `
      <li>${empleado.nombre} - ${empleado.puesto}</li>
      `;
      });

      document.getElementById("resultado").innerHTML = html;
    })
    .catch(function (err) {
      //todo err => console.log(err), esto es en arrow functions lo q puede recibir el catc
      console.log(err);
    });
}

//----------------------------------------------------
document.getElementById("apiBTN").addEventListener("click", cargarREST);

function cargarREST() {
  fetch("https://picsum.photos/list")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      let html = "";

      data.forEach((element) => {
        html += `
         <li><a href=${element.post_url}>Ver imagen  </a> -- ${element.author}</li>
        `;
      });

      document.getElementById("resultado").innerHTML = html;
    })
    .catch(function (err) {
      console.log(err);
    });
}
