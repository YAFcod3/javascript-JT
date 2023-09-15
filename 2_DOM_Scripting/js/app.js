let elemento;

elemento=document;

elemento=document.all; //esta en desuso 
elemento=document.all[10];  

elemento=document.head
elemento=document.body
elemento=document.domain
elemento=document.URL
elemento=document.characterSet

elemento=document.forms
elemento=document.forms[0]
elemento=document.forms[0].id //busqueda
elemento=document.forms[0].classList
elemento=document.forms[0].classList[0] //formulario
elemento=document.forms[0].className  //formulario clase2 clase3


elemento=document.images  //regresa collecion de imagenes del sitio
elemento=document.images[2]
elemento=document.images[2].src
elemento=document.images[2].getAttribute('src')  //img/curso1.jpg

elemento=document.scripts


console.log(elemento)  //estructura del documento

//?ejercicio

let imagenes=document.images
let imagesArr=Array.from(imagenes)   //convertir en arreglo 
console.log(imagesArr)

imagesArr.forEach(function(imagen){
  console.log(imagen)
})




