//todo-------------Window Object

//?--Prompt
// const nombre=prompt()

// console.log(`Bienvenido ${nombre}`)

// //?--confirm
// if(confirm('Eliminar')){
//    console.log('Eliminado')
// }else{
//   console.log('No paso nada! ')

// }

//todo---------

let altura,
anchura;


//? ventana con interfaz y todo
altura=window.outerHeight;
anchura=window.outerWidth;

console.log(altura )
console.log(anchura)
// 741  alto en ese momento
// 1366  ancho en ese momento

//? solo ventana sin interfaz del navegqdor
console.log(window.innerHeight)
console.log(window.innerWidth)
// 636
// 684


//todo UBICACION

let ubicacion;

//? location
ubicacion=window.location
console.log(ubicacion)

// Location {ancestorOrigins: DOMStringList, href: 'http://127.0.0.1:5500/index.html', origin: 'http://127.0.0.1:5500', protocol: 'http:', host: '127.0.0.1:5500', …}
// ancestorOrigins
// : 
// DOMStringList {length: 0}
// assign: ƒ assign()
// hash: ""
// host: "127.0.0.1:5500"
// hostname: "127.0.0.1"
// href: "http://127.0.0.1:5500/index.html"
// origin: "http://127.0.0.1:5500"
// pathname: "/index.html"
// port: "5500"
// protocol: "http:"
// reload: ƒ reload()
// replace: ƒ replace()
// search: ""
// toString: ƒ toString()


console.log(ubicacion.port)
//5500


//* hacer redireccion

//window.location.href='http://twitter.com'

// history

// window.history.go(-3)



//? Navigator
console.log(window.navigator)
console.log(window.navigator.appCodeName)   //Mozilla
console.log(window.navigator.language)   //es-ES