import "./styles.css";
import { users } from "./util";
const main = document.getElementById("main");
const divNameWrapper = document.getElementById("nameWrapper");
const inputName = document.getElementById("name");
const ageWrapper = document.getElementById("ageWrapper");
const age = document.getElementById("age");
const filter = document.getElementById("filter");
const users = document.getElementById("users");

const listOfName = () => {
  const p = document.createElement("p");
  const names = main.appendChild(p);
  names.innerHTML = users;
};
console.log(listOfName());

// TODO: Hent HTML #id med getElementById
// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere
// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
