class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    // this.apellido;
    this.saldo = saldo;
  }

  imprimirSaldo() {
    return `Hola ${this.nombre} ,tu saldo es de : ${this.saldo}`;
  }

  tipoCliente() {
    let tipo;
    if (this.saldo > 10000) {
      tipo = "Gold";
    } else if (this.saldo > 500) {
      tipo = "Platinum";
    } else {
      tipo = "Normal";
    }
    return tipo;
  }

  retirarSaldo(retiro) {
    return (this.saldo -= retiro);
  }

  //*atributos estaticos, no se necesitan q se instancien

  static bienvenda() {
    return `Bienvenido al cajero`;
  }
}

const maria = new Cliente("Maria", 100000);

console.log(maria);
console.log(maria.imprimirSaldo());
console.log(maria.tipoCliente());
console.log(maria.retirarSaldo(100));
console.log(Cliente.bienvenda()); //solo le paso el nombre de la clase , no la instancia

//todo Subclases, Herencia








class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, tipo) {
    //super va al constructor padre y trae los vaalores
    super(nombre, saldo);

    this.telefono = telefono;
    this.tipo = tipo;
  }
}

const empresa = new Empresa("Empresa1", 100, 454656, "Construccion");

console.log(empresa);
console.log(empresa.imprimirSaldo());
console.log(maria.imprimirSaldo());
