//tipo de datos primitivo

console.log(Symbol() === Symbol())   //esto da false ,cada symbol q se es diferente


const nombre = Symbol()
const apellido = Symbol('descripcion aqui')



//?crear una  persona
let persona= {}
persona.nombre= 'YAF'
//la asignacion con symbols tiene q ser con []
persona[nombre]='Yaf'   
persona[apellido]='af'

console.log(persona[nombre]) //Yaf


//solo se accede a symbols con  []