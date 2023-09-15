//todo BUCLES iteraciones-- for loop     FOR /WHILE/ DO WHILE/

for(let i=0; i<10;i++){
  console.log(`Numero ${i}`)
}

// Numero 0
// Numero 1
// Numero 2
// Numero 3
// Numero 4
// Numero 5
// Numero 6
// Numero 7
// Numero 8
// Numero 9

for(let i=0; i<10;i++){

  if(i==5){
    console.log('voy en el 5')
  }
  console.log(`Numero ${i}`)
}

// Numero 0
// Numero 1
// Numero 2
// Numero 3
// Numero 4
//voy en el 5
// Numero 5
// Numero 6
// Numero 7
// Numero 8
// Numero 9

//? Uso de continue

for(let i=0; i<10;i++){

  if(i==5){
    console.log('voy en el 5')
    continue
  }
  console.log(`Numero ${i}`)
}


// Numero 0
// Numero 1
// Numero 2
// Numero 3
// Numero 4
//voy en el 5
// Numero 6
// Numero 7
// Numero 8
// Numero 9


//? Uso de break

for(let i=0; i<10;i++){

  if(i==5){
    console.log('voy en el 5')
   break
  }
  console.log(`Numero ${i}`)
}

// Numero 0
// Numero 1
// Numero 2
// Numero 3
// Numero 4
//voy en el 5




//****

for(let i=0;i<10;i++){

  if(i % 2==0){
    console.log(`El numero ${i} es par`)
  }else{
    console.log(`El numero ${i} es impar`)
  }
}

// El numero 0 es par
// El numero 1 es impar
// El numero 2 es par
// El numero 3 es impar
// El numero 4 es par
// El numero 5 es impar
// El numero 6 es par
// El numero 7 es impar
// El numero 8 es par
// El numero 9 es impar


//******

const arreglosProductos=['Camisa','Boleto','Guitarra','Disco'];

for(let i=0;i<arreglosProductos.length; i++){
  console.log(`Tu producto ${arreglosProductos[i]} fue agregado`)
}



//TODO----------------------------WHILE--------------------------------------------------------------
//? primero revisa condicion y desp ejecuta el codigo

let i =0;

while(i<10){
  console.log(`Numero ${i}`)
  i++
}

// Numero 0
// Numero 1
// Numero 2
// Numero 3
// Numero 4
// Numero 5
// Numero 6
// Numero 7
// Numero 8
// Numero 9

i=0;

while(i<10){
  if(i===5){
    console.log('Cinco')
  }
  console.log(`Numero ${i}`)
  i++
}

// Numero 0
// Numero 1
// Numero 2
// Numero 3
// Numero 4
//Cinco
// Numero 5
// Numero 6
// Numero 7
// Numero 8
// Numero 9


//todo Continue
i=0;

while(i<10){
  if(i===5){
    console.log('Cinco')
    i++;
    continue
  }
  console.log(`Numero ${i}`)
  i++
}

// Numero 0
// Numero 1
// Numero 2
// Numero 3
// Numero 4
//Cinco
// Numero 6
// Numero 7
// Numero 8
// Numero 9


//todo Break
i=0;

while(i<10){
  if(i===5){
    console.log('Cinco')
    i++;
    break
  }
  console.log(`Numero ${i}`)
  i++
}

// Numero 0
// Numero 1
// Numero 2
// Numero 3
// Numero 4
//Cinco


//todo

const musica=['Cancion 1','Cancion 2','Cancion 3'];

i=0
while(i<musica.length){
  console.log(`Reproduciendo la cancion ${musica[i]}`)
  i++
}

// Reproduciendo la cancion Cancion 1
// Reproduciendo la cancion Cancion 2
// Reproduciendo la cancion Cancion 3


//TODO---------------------------DO WHILE--------------------------------------------------------------
//? primero  ejecuta el codigo  y desp revisa condicion


i=0;

do{
  console.log(`Numero ${i}`)
  i++

}while(i<10)

// Numero 0
// Numero 1
// Numero 2
// Numero 3
// Numero 4
// Numero 5
// Numero 6
// Numero 7
// Numero 8
// Numero 9



