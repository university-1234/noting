const newProgram = document.getElementById("new-program");
const newCombination = document.getElementById("new-combination");
const but = document.getElementById("updateProBut");

import { programs } from "./program.js";



const cleanedComb = newCombination.value.trim();

but.addEventListener("click", () => {
  
  if (newProgram.value.length === 0) {
    alert("Fill the empty fields first.");
  } else if (programs.includes(newProgram.value.trim().toLowerCase()) === false) {
    alert("Your program was not found, check if the name you provided is the standard name of the program.");
  }
  else {
    localStorage.setItem("program", newProgram.value);
    localStorage.setItem("combination", newCombination.value);
    alert("Updated successfully, you can go back and refresh the page to view new content");
    newProgram.value = "";
    newCombination.value = "";
  }
})