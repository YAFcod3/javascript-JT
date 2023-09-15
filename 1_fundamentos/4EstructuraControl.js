//todo Estructuras de control IF ELSE / SWITCH CASE

//todo IF ELSE

const edad=17;

if(edad>18){
  console.log('si se puede entrar al sitio')
}else{
  console.log('no se puede entrar al sitio')
}

const edad1=18;

if(edad1>=18){
  console.log('si se puede entrar al sitio')
}else{
  console.log('no se puede entrar al sitio')
}


const edad2=18;

if(edad2==18){      //tamb === ,influye tipo de dato con triple=
  console.log('si se puede entrar al sitio')
}else{
  console.log('no se puede entrar al sitio')
}


const edad3=22;

if(edad3!=18){     //diferente de 18 si entra
  console.log('si se puede entrar al sitio')
}else{
  console.log('no se puede entrar al sitio')
}

//*COMPROBAR Q UNA VARIABLE TIENE UN VALOR

let puntaje;

if(puntaje){
  console.log(`El puntaje fue de ${puntaje}`)
}else{
  console.log('no hay puntaje')
}



//*otra via

if( typeof puntaje != 'undefined'){
  console.log(`El puntaje fue de ${puntaje}`)
}else{
  console.log('no hay puntaje')
}



let efectivo=500,
totalCarrito=800;

if(efectivo>totalCarrito){
  console.log('Pago Correcto')
}else{
  console.log('Fondos Insuficientes')
}

//*Otra via para cuando el cuerpo es de una sola linea

if(efectivo>totalCarrito) console.log('Pago Correcto')
else  console.log('Fondos Insuficientes')



//todo IF ELSE IF ELSE 
//todo && (and), || (or)
let hora=20;

if(hora >0 && hora<=10){
  console.log('Buenos dias!!');
}else if(hora <=18){
  console.log('Buenas tardes')
}else if(hora >18 && hora <=24){
  console.log('Buenas noches')
}
else{
  console.log('hora no valida')
}


//TODO ||
let efectivo2=300,
credito2=300,
disponible=efectivo+credito2,
totalCarrito2=500;

if(totalCarrito2<efectivo2 || totalCarrito2<credito2){
  console.log('puedo pagar')
}else if(totalCarrito2<disponible){
  console.log('pague con ambos')
}
else{
  console.log('No puedo pagar')
}




// SIN IF ELSE
if(totalCarrito2<efectivo2 || totalCarrito2<credito2 || totalCarrito2<disponible){
  console.log('puedo pagar')
}
else{
  console.log('No puedo pagar')
}





//casos q ambos se  cumplen

let puntaje2=100;

if(puntaje2<150){
  console.log('Puntaje de 150')     //todo SOLO SE EJECUTA ESTA PORQ ES LA 1RA 
}else if(puntaje2<200){
  console.log('Puntaje de 200')


}


//TODO TERNARIO
//? ? es if  , : es else  el cuerpo tiene q ser de una linea
const logeado=true;

console.log(logeado === true ?'Si se logueo' :'No se logueo')

//TODO--------------------------------------------------------------SWITCH------------------------------


//todo SWITCH

const metodoPago='tarjeta';

switch(metodoPago){
  
  case 'efectivo':
    console.log(`El usuario pago con ${metodoPago}`)
    break;
  case 'cheque':
    console.log(`El usuario pago con ${metodoPago}`)
    break;
  case 'tarjeta':
    console.log(`El usuario pago con ${metodoPago}`)
    break;  
  default:
    console.log('Metodo de pago no soportado')
    break;

}




//? OTRO EJEMPLO

let mes ;

switch(new Date().getMonth()){
  case 0:
    mes='Enero'
    break
  case 1:
    mes='Febreo';
    break;
  case 2:
    mes='Marzo';
    break;
  default:
    console.log('Otro mes desp de marzo')                                         
}

if(mes){
  console.log(`Este mes es ${mes}`)
}