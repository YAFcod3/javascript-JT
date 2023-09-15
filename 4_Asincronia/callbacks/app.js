//funcion q se ejecuta dentro de otra


//callbacks en foreach

const ciudades=['Londres','New York','Madrid','Paris','Viena']


//inline cllaback (la func no tienen nombre)
ciudades.forEach(function(ciudad){
  console.log(ciudad)
})

//con funcion definida
//* en otro caso a la funcion le pongo noombre (desp d la palabra reservada: function)

function myCity(ciudad){
  console.log(ciudad)
}

ciudades.forEach(myCity)


//-------------------------------------------
const paises= ['Francia','Espania','Portugal','Australia','Inglaterra','Irlanda']


//todo se agrega un nuevo pais despues de 2 segundos

function nuevoPais(pais,mostrarPaises){

  setTimeout(function(){

    paises.push(pais)
    mostrarPaises()

  },2000)
}


//todo los paises  desp de 1 seg

function mostrarPaises(){

  setTimeout( function(){
    let html='';

    paises.forEach(function(pais){

      html += `<li>${pais}</li>`
    })

    document.getElementById('app').innerHTML=html

  },1000)
}



nuevoPais('Alemania',mostrarPaises)

mostrarPaises()