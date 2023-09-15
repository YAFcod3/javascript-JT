let aprendiendo;

aprendiendo = function () {
  console.log("Aprendiendo JS");
};

aprendiendo = () => {
  console.log("Aprendiendo JS");
};

//una linea no requiere llaves
aprendiendo = () => console.log("Aprendiendo JS");
//retorna valor
aprendiendo = () => "Aprendiendo JS";
//retorna objeto
aprendiendo = () => ({ aprendes: "Aprendiendo JS" });
//paso de parametros
aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
//pasando solo un parametro 
aprendiendo=(tecn1,tecn2)=> console.log(`Aprendiendo ${tecn1} y ${tecn2}`)

// aprendiendo("JS","ES7");


const productos = ['Disco','Camisa','Guitarra'];

const letrasProducto=productos.map(producto=> producto.length )

console.log(letrasProducto)


const lP=productos.forEach(producto => console.log(producto))
