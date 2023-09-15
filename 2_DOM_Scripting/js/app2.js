//todo ---------TRAVERSING-----(recorriendo el dom)


//?NodeList
//? children
//? childNodes
//?nodeType:
//tipo1  elemnetos html
//tipo2 atributos
//tipo3 text node
//tipo8 comentarios
//tipo9 documentos
//tipo10 doctype

//todo   HIJOS

const navegacion=document.querySelector('#principal')

 console.log(navegacion.children) // HTMLCollection(5) [a.enlace, a.enlace, a.enlace, a.enlace, a.enlace]

 console.log(navegacion.children[0])  //a.enlace

 console.log(navegacion.children[0].nodeName)  //A
 //? los nodos son las etiquetas html

//**seleccionar hijo de id principal y hacer modificaciones
navegacion.children[1].textContent='NUEVO ENLACE'




const barra =document.querySelector('.barra')
console.log(barra.children[0].children[0].children)


const cursos=document.querySelectorAll('.card')
console.log(cursos)
// NodeList(12) [div.card, div.card, div.card, div.card, div.card, div.card, div.card, div.card, div.card, div.card, div.card, div.card]

console.log(cursos[0])  //div.card

console.log(cursos[0].lastChild)
console.log(cursos[0].lastElementChild)
console.log(cursos[0].firstElementChild)

console.log(cursos[0].childElementCount)  //2  cuantos hijos tiene


//todo PADRES


//? parentElement
//? parentNode

const enlaces3=document.querySelectorAll('.enlace')

console.log(enlaces3)
//NodeList(8) [a.enlace, a.enlace, a.enlace, a.enlace, a.enlace, a.enlace, a.enlace, a.enlace]

console.log(enlaces3[0].parentNode)
console.log(enlaces3[0].parentElement)  //su padre
console.log(enlaces3[0].parentElement.parentElement.parentElement)


const cursos2=document.querySelectorAll('.card')

console.log(cursos2[0].parentElement.parentElement.parentElement.children)

console.log(cursos2[0].parentElement.parentElement.parentElement.children[0].textContent='hola desde traversing')




//todo SIBLING



//?  ANTERIOR
const enlaces4=document.querySelectorAll('.enlace')

console.log(enlaces4[4].previousSibling)         //nodo anterior
console.log(enlaces4[4].previousElementSibling)  //etiqueta anterior

console.log(enlaces4[4].previousElementSibling.previousElementSibling) 



//? SIGUIENTE

console.log(enlaces4[0].nextSibling)         //nodo anterior
console.log(enlaces4[0].nextElementSibling)  //etiqueta anterior

console.log(enlaces4[0].nextElementSibling.nextElementSibling) 


console.log(enlaces4[0].nextElementSibling.nextElementSibling.parentElement.children[4]) 
