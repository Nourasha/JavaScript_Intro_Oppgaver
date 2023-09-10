// Oppgave 1
const removeText = document.getElementById("remove");
const removeBtn = document.getElementById("remove-btn");
removeBtn.addEventListener("click", () => {
  removeText.remove();
});

// Oppgave 2
const text = document.getElementById("change");
const btn = document.getElementById("change-btn");
btn.addEventListener("click", () => {
  text.innerHTML = "Life it seems will fade away";
});

// Oppgave 3
const inputOppgave_3 = document.getElementById("input");
const inputText = document.getElementById("input-text");
inputOppgave_3.addEventListener("input", () => {
  inputText.innerHTML = inputOppgave_3.value;
});

// Oppgave 4
const myList = ["item one", "item two", "item three"];
let elementUl = document.getElementById("ul");
const writeList = document.getElementById("write-list");
const createLi = () => {
  myList.forEach((element) => (elementUl.innerHTML += `<li>${element}</li>`));
};
writeList.addEventListener("click", createLi);

// Oppgave 5
const select = document.getElementById("select");
const input5 = document.getElementById("text");
const placeHolder = document.getElementById("placeholder");
const creat = document.getElementById("create");
creat.addEventListener("click", () => {
  switch (select.value) {
    case "h2":
      const h2 = document.createElement("h2");
      h2.innerHTML = input5.value;
      document.getElementById("placeholder").appendChild(h2);
      break;
    case "h3":
      const h3 = document.createElement("h3");
      h3.innerHTML = input5.value;
      document.getElementById("placeholder").appendChild(h3);
      break;
    case "span":
      const span = document.createElement("span");
      span.innerHTML = input5.value;
      document.getElementById("placeholder").appendChild(span);
      break;
    case "p":
      const p = document.createElement("p");
      p.innerHTML = input5.value;
      document.getElementById("placeholder").appendChild(p);
      break;
    default:
      input5.value;
  }
});

// Oppgave 6
const ul = document.getElementById("list");
const remove = document.getElementById("remove-li");
const listItems = document.querySelectorAll("#list li");
remove.addEventListener("click", () => {
  if (ul.hasChildNodes()) {
    ul.removeChild(ul.lastChild);
  }
});

// Oppgave 7
const inputBox = document.getElementById("name");
const knapp = document.getElementById("order");
inputBox.addEventListener("keypress", () => {
  if (inputBox.value.length >= 4) {
    knapp.style.border = "solid red";
  }
});

// Oppgave 8
const listElement = document.querySelector(".children").children;
const colorBtn = document.getElementById("color");
colorBtn.addEventListener("click", () => {
  for (let i = 0; i < listElement.length; i++) {
    if (i % 2 !== 0) {
      listElement[i].style.border = "solid pink";
    } else {
      listElement[i].style.border = "solid green";
    }
  }
});
