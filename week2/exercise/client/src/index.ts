const fetchTodos = fetch("http://localhost:8081/api/todo")
  .then((res) => res.json());


const app = async () => {
  const todos = await fetchTodos;
  console.log(todos);
};

app();
