//Agregar al Local storage

//agregar
//? set
localStorage.setItem('nombre','yasma')


//Agregar al sesion storage
//agregar
//? set
sessionStorage.setItem('apellido','armas')
//todo Desventaja de sesion storaage se borra qndo cierre en navegador



//? obtener
const nombre=localStorage.getItem('nombre')
console.log(nombre)



//?Eliminar
//localstorage
localStorage.removeItem('nombre') 
//?tambien puede ser:
localStorage.clear()


