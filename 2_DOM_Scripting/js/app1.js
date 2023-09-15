//todo -------getElementById----solo para id
//*solo retorna un elemento  id unico

//! devuelve un solo elemento
//getElemnetById
//querySelector
//!devuelve varios
//getElementByClassName
//getElementByTagName
//querySelectorAll




let elemento;

elemento=document.getElementById('hero')
console.log(elemento)   //div#hero  me trae el elemento
console.log(elemento.id)  //hero

let encabezado;

encabezado=document.getElementById('encabezado')
//? encabezado=document.getElementById('encabezado').id //encabezado
//? encabezado=document.getElementById('encabezado').className //encabezado
//? encabezado=document.getElementById('encabezado').innerText  //Cursos En Línea

//? encabezado=document.getElementById('encabezado').textContent  //Cursos En Línea

//? console.log(encabezado)

//*  modificar su estilo a traves de STYLE
encabezado.style.background='#333';
encabezado.style.color='#fff'
encabezado.style.padding='20px'
encabezado.textContent='Los mejores textos'
encabezado.textContent='Los mejores textos!!!'

console.log(encabezado.innerText)   //Los mejores textos!!!





//todo -------query Selector---para id,clases o etiquetas
//*solo retorna un elemento///el 1ro q encuentre en el DOM

//?  id --> se usa #
//? clase --> se usa .

const encabezado1=document.querySelector('#encabezado');

//*Aplicar CSS
encabezado1.style.background='#fff';
encabezado1.style.color='#000'
encabezado1.style.padding='10px'


const encabezado2=document.querySelector('h1');

console.log(encabezado2)


const enlace=document.querySelector('.enlace');
console.log(enlace)   // solo regresa el 1er enlace


const imagen=document.querySelector('img');
console.log(imagen)   // solo regresa la 1ra img




//? otra manera de usar los   SELECTORES en query Selector

const img= document.querySelector('.card img')
console.log(img)


let enlace1=document.querySelector('#principal a:first-child').textContent;

console.log(enlace1)   //Para tu Negocio

 enlace1=document.querySelector('#principal a:last-child').textContent;

 console.log(enlace1)   //Temas

 enlace1=document.querySelector('#principal a:nth-child(3)').textContent;

 console.log(enlace1) // Aplicaciones Moviles




 //todo   getElemntByClassName  getElementByTag 
 //?  Devuelven multiples Elementos

 const enlaces=document.getElementsByClassName('enlace')

 console.log(enlaces)
 console.log(enlaces[3])



 //?
 const listaEnlaces=document.querySelector('#principal');
 console.log(listaEnlaces)   




 //todo mezclar querySelector con getElementByClassName

const listaEnlaces2=document.querySelector('#principal').getElementsByClassName('enlace')
 
console.log(listaEnlaces2)   //devuelve todos los enlaces


const links=document.getElementsByTagName('a')

console.log(links)   //devuelve coleccion de enlaces

links[18].style.color='red'
links[18].textContent='Nuevo Enlace'

//?convertir links en un arreglo

let enlaceArr=Array.from(links)
console.log(enlaceArr)

enlaceArr.forEach(function(enlace){
  console.log(enlace.textContent)
})



//todo querySelectorAll
const enlaces1=document.querySelectorAll('#principal .enlace')   //regresa todos los tag 'a' dentro de principal
console.log(enlaces1)     //? regresa un NodeList con todos los enlaces

console.log(enlaces1[1])
enlaces1[1].style.color='green'
enlaces1[1].textContent='Nuevo Enlace'


const imagenes=document.querySelectorAll('img')
console.log(imagenes)   //? me devuelve todas las imagenes del html

const enlaces2=document.querySelectorAll('#principal a:nth-child(odd)')   //?regresa los impares

enlaces2.forEach(function(impares){
  impares.style.backgroundColor='red'
  impares.style.color='white'
})

