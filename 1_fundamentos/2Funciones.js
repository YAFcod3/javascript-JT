
// todo  FUNCION DECLARADA  (FUNCTION DECLARATION)
// function saludar(){
//   console.log('Hola Miguel')
// }

// saludar();

// function saludar(nombre){
//   console.log(`Hola ${nombre}`)
// }

// saludar('Alma'); 
// saludar('Pablo'); 

// function sumar(a,b){
//   console.log(a+b)
// }

// sumar(1,2)
// sumar(3,4)


function sumar(a,b){
  return a+b
}

let suma=sumar(1,2)
console.log(suma)

console.log(sumar(3,4))





function saludar(nombre){
  return `hola ${nombre}`

}

saludo=saludar('Miguel')
console.log(saludo)





//**FORMA VIEJA
function saludar(nombre){
  if(typeof nombre === 'undefined'){
    nombre='Visitante'
  }
  return `hola ${nombre}`

}

saludo=saludar('Miguel')
console.log(saludo)
saludo=saludar()
console.log(saludo)


//**FORMA ACTUAL
function saludar(nombre="VISITANTE"){
 
  return `hola ${nombre}`

}

saludo=saludar('Miguel')
console.log(saludo)
saludo=saludar()
console.log(saludo)



//todo FUNCION EXPRESADA  (FUNCTION EXPRESSION)
//crear variable
const suma2=function(a,b){
  return a+b;
}

console.log(suma2(4,5))   //9




const suma3=function(a=3,b=2){
  return a+b;
}

console.log(suma3(5) )  //5+2=7






//todo IIFE
//FUNCION AUTOEJECUTABLE
//existen varios tipos(diferentes formas de definirse)

//***

// (function(){
//     console.log('CREANDO UN IIFE')
// })();


// (function(tecnologia){
//   console.log(`Aprendiendo ${tecnologia}`)
// })('JavaScript');


//todo METODOS DE PROPIEDAD
//CUANDO UNA FUNCION SE PONDE DENTRO DE UN OBJETO

const musica={
  reproducir: function(id){
    console.log(`Reproducinedo cancion ${id}`);
  },

  pausar:function(){
    console.log('Pausar Musica')
  }
}


musica.reproducir(30)
musica.pausar()


//*OJO: TAMB SE PUEDE CREAR LA FUNC FUERA DEL OBJETO

musica.borrar= function(){
  console.log('borrar cancion')
}



musica.borrar()
