fetch("http://localhost:8081/api/user")
  .then((res) => res.json())
  .then(console.log);

const btn = document.getElementById("fetch-users-btn");
console.log(btn);

btn.addEventListener("click", () => {
  fetch("http://localhost:8081/api/user")
    .then((res) => res.json())
    .then(console.log);
});


