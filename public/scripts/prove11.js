let card = document.getElementById("card book-item");
let cardHeader = document.getElementById("card__header");
let item = document.getElementById("book_title");
let button = document.getElementById("getList");
let newAvenger = document.getElementById("newAvengerButton");
let populate = document.getElementById("populate");

const socket = io("/");

socket.on("populate-list", () => {
  populateList();
}); 

button.onclick = runMe;
newAvenger.onclick = addAvenger;

// Initial run to populate list
async function runMe() {
  await fetch("/prove/prove11/fetchAll")
    .then((res) => res.json())
    .then((data) => {
      populateList(data);
      button.remove();
    })
    .catch((err) => console.log(err));
}

// Get data for socket
async function getData() {
  let newAvengerInput = document.getElementById("newAvenger").value;
  const data = await await fetch("/prove/prove11/insert", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      newAvenger: newAvengerInput,
    }),
  });
  return data.json();
}

// POST Request
async function addAvenger() {
  let newAvengerInput = document.getElementById("newAvenger").value;
  await fetch("/prove/prove11/insert", {
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

  updateSocket();
}

function updateSocket() {
  const newData = getData();

  newData.then(updatedData => {
      document.getElementById("newAvenger").value = "";
      // Confirm newly added avenger by sending back true
      socket.emit('new-avenger', true);
      console.log("Socket sent by client");
  })
}
