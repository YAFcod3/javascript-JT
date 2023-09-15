//document.getElementById('app').innerHTML='Hola Mundo'

//let nombre=prompt('Cual es tu nombre ? ') 
//let edad= prompt('Cual es tu edad ?')    

//document.getElementById('app').innerHTML=`Bienvenido ${nombre} de ${edad} años`

// todo prompt confirm alert 

document.querySelector('h1') ; //busca selector pa Comprobar si existe

console.log('consola')
console.log(2+2)
console.log('ID:' + 20)

console.table([1,2,3])
console.error('mi error')
console.warn('mi warn')
//console.clear()
console.time('Hola')
console.warn('hubo un error')
console.warn('hubo un error')
console.warn('hubo un error')
console.timeEnd('Hola')  //me dice el tiempo de ejecucio de las 3 lineas anteriores


//todo-----------------------------------------------------------------

// *todo VARIABLES   var/let/const

//!var

var nombre='Juan'
var nombre = 'Mario'
console.log(nombre)

var carrito;
console.log(carrito)
carrito='mi carrito'
console.log(carrito)


var deporte1 = 'beisbol' , deporte2='futbol'
console.log(deporte1)
console.log(deporte2) 

//ESTO ES UN ERROR ....   var 99dias=99    var *hola = 'hola'
//ESTO ES OK..........    var dias99=99

var primerNombre= 'Jose'  //camelCase
var primer_nombre='Juan'   //underscore
var PrimerNombre='Mario'   //pascal case



//! let

//A diferencia de var no puedo sobreescribir en let
//lo siguiente es un error
/*
let name='Yasmani'
let name='Maria'
*/
// esto si lo puedo hacer::::
let name = 'Yasmani'
name='Maria'
console.log(name)  // por tanto let lo podemos usar en caso donde esa variable puede cambiar de valor en le transcurso del programa



//!const

//usar qndo se q el valor no cambiara
const producto ='Libro'
console.log(producto)


// a diferencia de los anteriores , en const no podemmos hacer lo sgte
/*
const apellido;
apellido='Rodgz'
 */


//*CADENAS

let mensaje= 'Y entonces dije : "Buen Curso" '
console.log(mensaje)
let mensaje1=" Y entonces dije : 'Buen Curso1' "
console.log(mensaje1)
let mensaje2 = ' Y entonces dije : \'Buen Curso2\''
console.log(mensaje2)




//*CONCATENAR
let mensaje3= 'JAVA' + 'SCRIPT'
console.log(mensaje3)

let aprendiendo= 'Aprendiendo',
    javascript=  'JavaScript'

console.log(aprendiendo + ' ' + javascript) 
//template literal
console.log(`${aprendiendo} ${javascript}`) 






