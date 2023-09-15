//todo STRING  metodos

let tecnologia='JavaScript'
console.log(tecnologia.length)    //10
console.log(tecnologia.concat(' ','es genial'))  //JavaScript es genial
console.log(tecnologia.toUpperCase())
console.log(tecnologia.toLowerCase())

let mensaje='Aprendiendo JavaScript, CSS, HTML para ser Frontend'
console.log(mensaje.indexOf('JavaScript'))   //12 , posicion donde  empieza la palabre
console.log(mensaje.indexOf('PHP'))   //-1 porq no aparece
console.log(mensaje.substring(0,5 ))   //Apren    //corta la cadena
console.log(mensaje.slice(-4 ))   //tend    //corta , se queda con las ultimas 4
console.log(mensaje.slice(12, 16))   //Java    //corta
console.log(mensaje.split(' '))    //separa por espacios y lo conv en elementos de un array
console.log(mensaje.split(','))    //separa por comas y los conv en elementos de un array
console.log(mensaje.replace('CSS','PHP'))    //cambia CSS por PHP
console.log(mensaje.includes('CSS'))    //devuelve true si esta
console.log(tecnologia.repeat(10)) //repite 10 veces la palabra guardada en tecnologia



//todo  NUMBER  metodos

const numero1=30,numero2=20,numero3=20.20,numero4=.1020,numero5=-3;


let resultado;

resultado=numero1+numero2
resultado=numero1-numero2
resultado=numero1*numero2
resultado=numero1*2
resultado=numero1/numero2
resultado=numero1%numero2    //residuo   //10 ya q 30/20 tiene residuo 10

resultado=Math.PI
resultado=Math.round(2.4)   //REDONDEA A 2
resultado=Math.ceil(2.1)   //3, REDONDEA siempre hacia arriba
resultado=Math.floor(2.99)   //2, REDONDEA siempre hacia abajo
resultado=Math.sqrt(144)   //12, raiz cuadrada de 144
resultado=Math.abs(numero5)  //3, devuelve el numero absoluto
resultado=Math.pow(8,3)   // 8 a la 3 =512
resultado=Math.min(3,6,5,1,9,7,8)   // m da el minimo
resultado=Math.max(3,6,5,1,9,7,8)   // m da el maximo
resultado=Math.random()  // da un numero aleotorio

 

//**OPERADORES ARITMETICOS
resultado=10+20-5  //25
resultado=10+20*5  //110
resultado=(10+20)*5  //150

console.log(resultado)


let puntaje;
puntaje=10;
++puntaje    //11   ver variante puntaje++
--puntaje    //10   ver variante puntaje--
//lo anterior es incremento , decremento d 1 en 1
puntaje=20
puntaje += 3  //23
puntaje -= 3  //20

console.log(puntaje)

//__________________________________________________________________________________________________________


//todo TIPOS D DATOS

let valor;

//primitivos


valor='Cadena de texto'   //string
valor=20             //number
valor=true           //boolean
valor=null          // null ,tipo object
valor=undefined     //undefined
valor=Symbol('Simbolo')    //symbol


//compuestos o de refrerencia

valor={               //objeto es tipo  object
  nombre:'juan',
  profesion:'desarrollador web'
}

valor=[1,2,3,4,5]      //array   es tipo object

valor=new Date()    //tipo object


console.log(valor)
console.log(typeof valor)  //me dice el tipo de dato
console.log(typeof(valor))



//todo OPERADOORES

const num1=20;
const num2=50;
const num3='20';
let name1='juan'
let name2='pedro'

console.log(num1>num2)  //false
console.log(num1<num2)  //true
console.log(20 =='20')  //true     ,solo revisa el valor
console.log(num1 == num3)  //true
console.log(num3===num2)  //false   , revisa valor y tipo de dato

console.log(2 != 3)  //es 2 diferente de 3 ?  ES TRUE
console.log('hola' == ' hola')  //false por el espacio  //espacio es un caracter

//minuscula y final de abecedario ,tienen mas peso:
//de menor a mayor :     ABCDEF...   ...xyz
console.log('z'>'a')  //true
console.log('Z'>'A')  //true
console.log('Z'>'a')  //false
console.log('A'>'z')  //false

console.log(null == undefined)  //true
console.log(null === undefined)  //false

console.log(name1==name2) //false
console.log(name1===name2) //false


// todo CONVERTIR STRING A NUMERO
//**Number parseInt   parseFloat

const number="50",
number1=10,
number2='tres'

console.log(Number(number) + number1)   //60
console.log(parseInt(number) + number1)   //60
   
let dato;
dato=Number("20")
dato=Number('20.10931')
dato=Number(true)     //1
dato=Number(false)     //0
dato=Number(null)     //0
dato=Number(undefined)     //NaN
dato=Number('hola')     //NaN
dato=Number([1,2,3])     //NaN


dato=parseInt('100')   //100
dato=parseFloat('100')   //100
dato=parseFloat('100.2030')   //100.203
dato=parseInt('100.2030')   //100


console.log(dato)



//** toFixed
dato=18929173.9824125236534
console.log(dato.toFixed(3))   //18929173.982

dato='18929173.4125236534'
console.log(parseFloat(dato).toFixed(3))   //18929173.413




// todo CONVERTIR NUMERO A STRING
//** String    toString


let cp;
cp=90210

cp=String(cp)
console.log(cp.length)   //5


data='4'+'4'
console.log(data.length)   //2

data=true
data=String(data)
console.log(data.length)   //4

data=[1,2,3]
console.log(String(data) )       //1,2,3
console.log(data.length)   //5


let codigo=4243
codigo=codigo.toString()
console.log(typeof codigo)   //string
console.log(codigo)   //4223



//todo Template Strings

const producto1='Pizza',
precio1=30,
producto2='Hamburguesa',
precio2=40

let html;

html=`
     <ul>
        <li>Orden: ${producto1}</li>
        <li>Precio: ${precio1}</li>
        <li>Orden: ${producto2}</li>
        <li>Precio: ${precio2}</li>
        <li>Total ${total(precio1,precio2)}</li>
     </ul>  

     `

     document.getElementById('app').innerHTML=html;

     function total(precio1,precio2){
      return precio1 +precio2
     }

 

     //todo ARREGLOS



     //generar arreglos:
     const numeros =[10,20,30,40,50]
     console.log(numeros)

     const meses = new Array('Enero','Febrero','Marzo')
     console.log(meses)

     const mezclado=['Hola',20,true,null,false,undefined]
     console.log(mezclado)

     console.log(meses.length)  //3

     //es un arrglo ?
     console.log(Array.isArray(meses))  //true

     console.log(meses[1])  //Febrero

     //anadir al array
     meses[3]='Abril'
     console.log(meses)  //['Enero', 'Febrero', 'Marzo', 'Abril']

     meses.push('Mayo')
     console.log(meses)  //['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

     //encontrar un elemento en el arreglo
     console.log(meses.indexOf('Abril')) //3

     //agregar ak inicio del array
     meses.unshift('Mes 0')
     console.log(meses)  //(6) ['Mes 0', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

     //Eliminar un elemneto del arreglo (finsl del array)
     meses.pop()
     console.log(meses)  //['Mes 0', 'Enero', 'Febrero', 'Marzo', 'Abril']

     //eliminar el 1er elemento del array
     meses.shift()
     console.log(meses)  //['Enero', 'Febrero', 'Marzo', 'Abril']

     //quitar un rango

     meses.splice(2,2)  //**recibe 2 parametros,a partir de q posicion y cuantos a partir de esa posicion incluyendose a el
     console.log(meses)  //['Enero', 'Febrero']


     //cambiar orden del arreglo
     meses.reverse()
     console.log(meses) //['Febrero', 'Enero']

     //unir arreglos
     let array1=[1,2,3],
     array2=[9,8,7]

     console.log(array1.concat(array2))  //[1, 2, 3, 9, 8, 7]

     //ordenar un arreglo    sort
     const frutas=['Platano','Manzana','Fresa','Naranja']
     console.log(frutas)  //['Platano', 'Manzana', 'Fresa', 'Naranja']

     //ordena por forma alfabetica
     console.log(frutas.sort()) //['Fresa', 'Manzana', 'Naranja', 'Platano']


     //ordena por #os
     //los ordena MALLLLLL
     let arreglo1=[1,2,3,4,34,75,43,77,88]
      console.log(arreglo1.sort())    //(9) [1, 2, 3, 34, 4, 43, 75, 77, 88]

      //ordenar BIEN los #os
      arreglo1.sort(function(x,y){
        return x-y;
      })
      console.log(arreglo1)  //[1, 2, 3, 4, 34, 43, 75, 77, 88]

      arreglo1.sort(function(x,y){
        return y-x;
      })
      console.log(arreglo1)  //[88, 77, 75, 43, 34, 4, 3, 2, 1]

      //todo VARIABLE CONST EN ARREGLOS 
       const num=[1,2,3]
       //NO PUEDO MODIFICAR EL ARRGLO COMPLETO ASI => num=[2,4,6] PORQ ES CONST, PERO SI PUEDO HACER ESTO:
       num[0]=9
       console.log(num)   //9, 2, 3]
       num.push(5)
       console.log(num)  //[9, 2, 3, 5]




       //todo  OBJETOS

       const persona1={
        nombre:"Miguel",
        apellido:"Marinez",
        profesion:"Programador Web",
        email:"correo@correo.com",
        edad:20,
        musica:['Pop','Rock','Jazz'],
        hogar:{
          ciudad:'Guadalajara',
          pais:'Mexico'
        },
        nacimiento:function(){
          return new Date().getFullYear() - this.edad
        }
       }



       const persona2={
        nombre:"Miguel",
        apellido:"Marinez",
        profesion:"Programador Web",
        email:"correo@correo.com",
        edad:30,
        musica:['Pop','Rock','Jazz'],
        hogar:{
          ciudad:'Guadalajara',
          pais:'Mexico'
        },
        nacimiento:function(){
          return new Date().getFullYear() - this.edad
        }
       }
      



       console.log(persona1)
       console.log(persona1.nombre)
       console.log(persona1.musica[2])

       persona1.musica.push('Alternativa')
       console.log(persona1.musica)  //['Pop', 'Rock', 'Jazz', 'Alternativa']

       console.log(persona1.hogar.pais)  //Mexico
       console.log(persona1['hogar'])    //{ciudad: 'Guadalajara', pais: 'Mexico'}
       console.log(persona1['apellido'])  //Marinez
       console.log(persona1['hogar']['pais']) //Mexico



       console.log(persona1.nacimiento())  //2003
       console.log(persona2.nacimiento())  //1993


       //** AREEGLO DE OBJETOS
       const autos=[
                {modelo:'Mustang',motor:6.2},
                {modelo:'Camaro',motor:6.1},
                {modelo:'Challenger',motor:6.3},
       ]

       console.log(autos[0].modelo)  //Mustang
       console.log(autos.length) //3
       
       for(let i =0;i<autos.length;i++){
       // console.log(autos[i].modelo)
          console.log(`${autos[i].modelo} ${autos[i].motor}`)
       }



        //todo VARIABLE CONST EN  OBJETOS


         //NO PUEDO MODIFICAR EL objeto redefiniendolo PORQ ES con  CONST, PERO SI PUEDO HACER ESTO:

         autos[0].modelo='Audi'
         console.log(autos[0].modelo)//Audi


  


    















