// fetch('https://jsonplaceholder.typicode.com/posts/')
// .then((response) => response.json())
// .then((json) => console.log(json));


const leerTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  const data = await res.json();

  return data;
};


leerTodos().then(usuarios =>console.log(usuarios)).catch(err=> console.log(err))



