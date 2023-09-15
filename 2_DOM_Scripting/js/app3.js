//todo  crear elementos 



//crear enlace
const enlace=document.createElement('a')


//!agregamos la clase 
enlace.className='enlace';
//!anadir id
enlace.id='nuevo-id'
//!atributo href
enlace.setAttribute('href','#')
//!add texto
enlace.textContent='Nuevo Enlace'
//! add text
//enlace.appendChild(document.createTextNode('Nuevo Enlace'))

console.log(enlace)


//agregar al html

document.querySelector('#secundaria').appendChild(enlace)



//todo  modificar elementos ya existentes en el DOM

//remplazando elementos
const nuevoEncabezado=document.createElement('h2')


//id
nuevoEncabezado.id='encabezado'
//new text
nuevoEncabezado.appendChild(document.createTextNode('Nuevo Encabezado'))


console.log(nuevoEncabezado)


//remplazar por h1 q ya esta

const anterior=document.querySelector('#encabezado')

console.log(anterior.parentElement)

const elPadre=document.querySelector('#lista-cursos')

//replace
elPadre.replaceChild(nuevoEncabezado,anterior)




//todo  eliminar elementos 

const enlaces=document.querySelectorAll('.enlace');
const navegacion=document.querySelector('#principal')


//?eliminacion directa
//enlaces[0].remove()

//?eliminar con refererncia al padre
navegacion.removeChild(enlaces[0])



//?obtener una clase de css

const primerLi=document.querySelector('.enlace')

let elemento;
elemento=primerLi.className  //nombre de la clase

//*add nueva clase
elemento=primerLi.classList.add('nueva-clase')

elemento=primerLi.classList // devuelve una lista de todas sus clases NodeList

console.log(elemento)
// DOMTokenList(2) ['enlace', 'nueva-clase', value: 'enlace nueva-clase']
// 0: "enlace"
// 1: "nueva-clase"
// length: 2
// value: "enlace nueva-clase"


//? -----------Atributos
//getAttribute
//setAttribute
//hasAttribute
//removeAttribute

//? leer atributos
elemento=primerLi.getAttribute('href')


//* modificar atributo

primerLi.setAttribute('href','http://facebook.com')

primerLi.setAttribute('data-id',20)

elemento=primerLi

console.log(elemento)




//? comprobar atributo
elemento=primerLi.hasAttribute('data-id')
console.log(elemento)   //true


//? eliminar atributo
primerLi.removeAttribute('data-id')


