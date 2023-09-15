const boton1=document.getElementById('boton1')
boton1.addEventListener('click', function(){
  

  const xhr = new XMLHttpRequest()
  xhr.open('GET','empleado.json',true)
  xhr.onload=function(){

    if (this.status===200){

      console.log(this.responseText)
      console.log(JSON.parse(this.responseText))   //json a objeto real

      // document.getElementById('empleado').innerHTML=`<h2>${this.responseText }</h2>`
      const persona=JSON.parse(this.responseText)
      // console.log(persona.nombre)
      const htmlTemplate=`
      <ul>
        <li> ID: ${persona.id}</li>
        <li> Nombre: ${persona.nombre}</li>
        <li> Empresa: ${persona.empresa}</li>
        <li> Actividades: ${persona.trabajo}</li>
      </ul>
      `

      document.getElementById('empleado').innerHTML=htmlTemplate
    


    }
  }
  
  xhr.send()

})

//---------------------------------------------------------------------------------------------

const boton2 =document.getElementById('boton2')
boton2.addEventListener('click',function(){

  const xhr =new XMLHttpRequest()
  xhr.open('GET','empleados.json',true)
  xhr.onload=function(){

    if(this.status===200){
      console.log(JSON.parse(this.responseText))

      const personas=JSON.parse(this.responseText)
      console.log(personas)


      let htmlTemplate=''
      personas.forEach(persona => {

        htmlTemplate +=
        `
        <ul>
          <li> ID: ${persona.id}</li>
          <li> Nombre: ${persona.nombre}</li>
          <li> Empresa: ${persona.empresa}</li>
          <li> Actividades: ${persona.trabajo}</li>
        </ul>
        `
    
        
      });

      document.getElementById('empleados').innerHTML=htmlTemplate

    }
  }
  xhr.send()
})

