//Object Literal
// let saldo=2300

const cliente = {
  nombre: "Yasma",
  saldo: 200,
  tipoCliente: function () {
    let tipo;

    if (this.saldo > 1000) {
      tipo = "Gold";
    } else {
      tipo = "Normal";
    }
    return tipo;
  },
};

console.log(cliente.tipoCliente()); //error , no sabe quien es saldo por tanto poner this.saldo
console.log(cliente.saldo);

//? Antes de EmS6 se  hacia
//Metodo

function Client(name, credit) {
  //constructor
  this.name = name;
  this.credit = credit;
  this.typeClient = function () {
    let type;

    if (this.credit > 1000) {
      type = "Gold";
    } else if (this.credit > 500) {
      type = "Platinium";
    } else {
      type = "Normal";
    }
    return type;
  };
}

//instancia
const person = new Client("Pedro", 2000);
console.log(person);
console.log(person.typeClient());

//otra instancia
const person2 = new Client("Karen", 100);
console.log(person2);
console.log(person2.typeClient());

//--------------------------------------------------------------
//todo objetos y constructores

//?String
const nombre1 = "Pedro";
const nombre2 = new String("Pedro");

console.log(typeof nombre1); //string
console.log(typeof nombre2); //object
console.log(nombre2); // en proto m sale todos los metodos  q le puedo aplicar

//? qndo se crea algo con 'new' ,es q es un 'objeto'

//todo operador NO estricto ==
if (nombre1 == nombre2) {
  console.log("Si son iguales");
} else {
  console.log("no son iguales");
} //Si son iguales

//todo operador  estricto ===
if (nombre1 === nombre2) {
  console.log("Si son iguales");
} else {
  console.log("no son iguales");
} //No son iguales

//---------------------------------------------------
const numero1 = 20;
const numero2 = new Number(20);

console.log(numero1); //20
console.log(numero2); //20   en version objeto

//todo existe tamb
//new Boolean(true) new Date () new Function() new Object() new Array
//etc
//------------------------------------------------
const funcion1 = function (a, b) {
  return a + b;
};

const funcion2 = new Function("a", "b", "return a + b");

console.log(funcion1(2, 2)); //4
console.log(funcion2(3, 3)); //6

//------------------------------------------------
const persona1 = {
  nombre: "Juancito",
};

const persona2 = new Object({ nombre: "Juan Juan" });

console.log(persona1);
console.log(persona2);
//-------------------------------------------

const arreglo1 = [1, 2, 3, 4, 5];
const arreglo2 = new Array(6, 7, 8, 9, 0);

console.log(arreglo1);
console.log(arreglo2);

//----------------------------------------------------
//todo Prototipos

function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

//crear un  Prototype
//?permite q solo accedan al metodo los objetos tipo cliente
Cliente.prototype.typeClient = function () {
  let type;

  if (this.credit > 1000) {
    type = "Gold";
  } else if (this.credit > 500) {
    type = "Platinium";
  } else {
    type = "Normal";
  }
  return type;
};

Cliente.prototype.nombreClienteSaldo = function () {
  return `Nombre : ${this.nombre}, tu saldo es de ${
    this.saldo
  },tipo de cliente ${tipo.typeClient()}`;
};

Cliente.prototype.retirarSaldo= function(retiro){
  return this.saldo -= retiro;
}

const cliente1 = new Client("Pedrito", 120);
const cliente2 = new Client("Ivan", 340);
const cliente3 = new Client("Miguel", 140);

console.log(cliente1);
console.log(cliente1.typeClient());
// console.log(cliente2.nombreClienteSaldo())
// console.log(cliente3.retirarSaldo(100))



//todo HEREDAR PROTOTYPES con call
//todo VER Object.create