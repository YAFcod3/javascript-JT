//todo  SCOPE

var a='a'
let b='b'
const c='c'

console.log(a,b,c)     //a b c


//? Scope de la funcion
function funcionScope(){
  var a='A'
  let b='B'
  const c='C'
  console.log('FUNCION '+ a ,b, c)  //FUNCION A B C
}

 funcionScope()


 //?Scope de Bloque {}
 if(true){
  var a='AA'
  let b='BB'
  const c='CC'

  console.log('BLOQUE '+ a ,b, c)  //BLOQUE AA BB CC

 }

 //for
 for (let b=0;b<10;b++)
 [
  console.log(b)   // 0 1 2 3 4 5 6 7 8 9 //?b TOMO 10 VALORES DIFERENTES PERO SOLO EN SU SCOPE ,FUERA DE AQUI ES LO Q ESTA DEFINIDO EN SU RESPECTIVO SCOPE
 ]




 console.log('GLOBALES '+a,b,c) // GLOBALES AA b c
 //TODO ver como la de var se sobrescribio siempre ya q es global ,mientras q let y const solo variarion en su scope




 //?-------------------------------------------

//  if(true){

//   let d='d'
//  }

//  console.log(d)   //? fuera del scope no se ha definido

//  //!  app8.js:52 Uncaught ReferenceError: d is not defined
  

 //todo/ TIENE Q SER ASI:

 let e;

 if(true){
  e='e'
 }

 console.log(e)  //e