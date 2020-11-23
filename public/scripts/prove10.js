/****************************************************
 * You can use client side scripts by placing them in
 * the public/scripts folder. They can then be linked
 * to your EJS files and used there.
 ****************************************************/
let card = document.getElementById("card book-item");
let cardHeader = document.getElementById("card__header");
let item = document.getElementById("book_title");
let button = document.getElementById("getList");
let newAvenger = document.getElementById("newAvengerButton");
let populate = document.getElementById("populate");

button.onclick = runMe;
newAvenger.onclick = addAvenger;

function runMe() {
  fetch("/prove/prove10/fetchAll")
    .then((res) => res.json())
    .then((data) => {
      populateList(data);
      button.remove();
    })
    .catch((err) => console.log(err));
}

// POST Request
function addAvenger() {
  let newAvengerInput = document.getElementById("newAvenger").value;
  fetch("/prove/prove10/insert", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      newAvenger: newAvengerInput,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      let p = document.createElement("p");
      p.innerText = data.avengers[data.avengers.length - 1].name;
      populate.appendChild(p);
    })
    .catch(console.error);
}

function populateList(data) {
  for (let i = 0; i < data.avengers.length; i++) {
    let p = document.createElement("p");
    p.innerText = data.avengers[i].name;
    populate.appendChild(p);
  }
}
