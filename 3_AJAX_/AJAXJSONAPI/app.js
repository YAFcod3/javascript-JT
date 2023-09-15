const cargarPosts=document.querySelector('#cargar')
cargarPosts.addEventListener('click',cargarApi)



 function cargarApi(){


  const xhr=new XMLHttpRequest()
  const url='https://jsonplaceholder.typicode.com/posts'

  xhr.open('GET',url,true)
  xhr.onload=function(){

    if(this.status===200){
      // console.log(JSON.parse(this.responseText))
      // console.log(this.responseText)
      const posts=JSON.parse(this.responseText)
      console.log(posts)

      let htmlTemplate=''

      posts.forEach(function(post){

        htmlTemplate += `

        
          <h3>${post.title}</h3>
          <p>${post.body}</p>

        
        `
      });

      document.getElementById('listado').innerHTML=htmlTemplate

    }
  }


  xhr.send()
}
