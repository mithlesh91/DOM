const users = [
  {
    username: "john_doe",
    age: 25,
    profession: "Engineer"
  },
  {
    username: "alice123",
    age: 30,
    profession: "Designer"
  },
  {
    username: "mike_k",
    age: 28,
    profession: "Teacher"
  }
];

console.log(users);


let sum = "";

users.forEach(function(users){   
    sum = sum + `   <div class="card">
            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="profile picture">
            <h2>${users.username}</h2>
            <h3>${users.age}</h3>
            <p>${users.profession}</p>
        </div>`
})

let main = document.querySelector("main");
main.innerHTML = sum;