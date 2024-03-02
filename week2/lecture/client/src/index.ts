fetch("http://localhost:8081/api/user")
  .then((res) => res.json())
  .then(console.log);
