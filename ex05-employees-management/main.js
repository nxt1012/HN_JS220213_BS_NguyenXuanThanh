let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let entries = document.getElementById("entries");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Name cannot be blank!";
  } else {
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["name"] = input.value;
  console.log(data);
  createEntry();
};

let createEntry = () => {
  entries.innerHTML += `
  <div>
    <span>${data.name}</span>
    <span class="options">
      <i onClick="editEntry(this)" class="fas fa-edit"></i>
      <i onClick="deleteEntry(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
  `;
  input.value = "";
};

let deleteEntry = (e) => {
  e.parentElement.parentElement.remove();
};

let editEntry = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};