
    
    const name = document.querySelector("#name");
    const program = document.querySelector("#program");
    const combination = document.querySelector("#combination");
    const year = document.querySelector("#year");
    const semester = document.querySelector("#semester");
    const verify = document.querySelector("#approve");
    const save = document.querySelector("#save");
    
  
    program.addEventListener("input", () => {
      const regex = /[^a-zA-Z ]/gi;
      if (regex.test(program.value)) {
      alert("don't use punctuation including brackets and numbers. Ensure words are correctly spaced");
      program.value = program.value.replace(regex, "");
      }
    })
    
    import { programs } from "./program.js";
    
    verify.addEventListener("click", () => {
      const pValue = program.value;
      if ( name.value === "" || pValue === "" || year.value === "" || semester.value === "" ) {
        alert("Fill the empty fields first.");
      } 
      else if (Number(year.value) < 1 || Number(year.value) > 4) {
      alert("Provide a valid year between 1 and 4.");
      } else if (Number(semester.value) < 1 || Number(semester.value) > 2) {
        alert("Provide a valid semester between 1 and 2.");
      } 
      else if (programs.includes(pValue.toLowerCase().trim())) {
        alert("The information provided is correct you can now proceed to save.")
      } else {
      alert("Your program was not found check if the name you provided is the standard name of the program.");
      }
    });
    
    save.addEventListener("click", () => {
      let pValue = program.value;

      if ( name.value === "" || pValue === "" || year.value === "" || semester.value === "" ) {
        alert("Fill the empty fields first.");
      } else if (Number(year.value) < 1 || Number(year.value) > 4) {
      alert("Provide a valid year between 1 and 4.");
      } else if (Number(semester.value) < 1 || Number(semester.value) > 2) {
        alert("Provide a valid semester between 1 and 2.");
      }
      else if (programs.includes(pValue.toLowerCase().trim())) {
        localStorage.setItem("name", name.value);
      localStorage.setItem("program", program.value);
      localStorage.setItem("combination", combination.value);
      localStorage.setItem("year", year.value);
      localStorage.setItem("semester", semester.value);
      alert("CONGRATULATIONS! your information has been successfully saved. You can now go back and view your units for this semester as well as notes.");
      } else {
        alert("Your program was not found check if the name you provided is the standard name of the program.");
      }
      name.value = "";
      semester.value = "";
      year.value = "";
      combination.value = "";
      program.value = "";
    });
