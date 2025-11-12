const topE = document.querySelector(".top");
    const oneEf = document.querySelector(".one");
    const units = document.querySelector(".units");
    const list = document.querySelector(".list");
    const foot = document.querySelector("footer");
    const infor = document.querySelector(".information");
    const updateYear = document.querySelector("#update-year");
    const updateSemester = document.querySelector("#update-semester");
    
    
   const disclaimer = document.querySelector(".disclaimer");
    const removeDisclaimer = document.querySelector(".remove-disclaimer");
    
    removeDisclaimer.addEventListener("click", () => {
      disclaimer.classList.add("disclaimer-remover");
    })
    
    
    
    updateYear.addEventListener("click", () => {
      const newYear = prompt("Enter the current year you want to update to.");
      if (Number(newYear) >= 1 && Number(newYear <= 4)) {
      localStorage.setItem("year", newYear);
      localStorage.setItem("semester", "1");
      alert("Updated successfully, refresh the page to see new content.");
      }
    })
    
    updateSemester.addEventListener("click", () => {
      const newSemester = prompt("Enter the current semester you want to update to.");
      if (newSemester === "2" || newSemester === "1") {
        localStorage.setItem("semester", newSemester);
        alert("updated successfully, refresh the page to see new content.");
      }
    })
    
    
    
    
    const p = document.createElement("p");
    const year = new Date().getFullYear();
    const body = document.querySelector("body");
    const main = document.querySelector("main");
    
    const program = localStorage.getItem("program");
    const combination = localStorage.getItem("combination");
    const year2 = localStorage.getItem("year");
    const semester = localStorage.getItem("semester");
    
    const cleanP = program.toLowerCase().trim();
    const cleanComb = combination.trim();
    const cleanYear = Number(year2);
    const cleanSem = Number(semester);
    
    import { programsEducation } from "./program.js";
    //import { unitsOtherProgram } from "/modules/program//.js";
    if (programsEducation[cleanP].hasOwnProperty(cleanComb) === false) {
  
  const uText = document.createElement("p");
  const link = document.createElement("a");
  link.innerText = "Fill";
  link.href = "notingDetailForm.html";
  uText.innerText = "an unexpected error occured while trying to match your program with subject combination it seems you selected a wrong combination or none, try filling the form again this time be careful. ";
  uText.setAttribute("class", "error");
uText.appendChild(link);
  main.appendChild(uText);
  topE.style.display = "none";
  }
  
    import { notes } from "./program.js";
    
  const unitsEducation  = programsEducation?.[cleanP]?.[cleanComb]?.[cleanYear]?.[cleanSem];
  const trimmedP = program.toLowerCase().trim();
  
  
  
  //const unitsOtherProgram = //programsOther[program][year][semester];
  
  
  if (trimmedP === "bachelor of education science" || trimmedP === "bachelor of education arts") {
 for (let i = 0; i < unitsEducation?.length; i++) {
   const butParent = document.createElement("div");
    const but = document.createElement("div");
    but.classList.add("specific");
    but.innerText = unitsEducation[i];
    units.appendChild(but);
    but.addEventListener("click", () => {
      const header = document.createElement("header");
      header.classList.add("notes-header");
      header.style.overflow = "hidden";
      const backContainer = document.createElement("div");
      backContainer.classList.add("back-container");
      const link = document.createElement("a");
      link.style.textDecoration = "none";
      link.style.color = "black";
      link.href="noting.html";
      link.innerText = "<";
      backContainer.appendChild(link);
      
  
      header.appendChild(backContainer);
      body.innerHTML = "";
      body.appendChild(header);
      
      const examHeading = document.createElement("p");
      examHeading.classList.add("exam-heading");
      examHeading.innerText = "Past Examination Revision Questions and Marking scheme.";
      body.appendChild(examHeading);
      
      
      
    const arr = ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017" ];
    for (let k = 0; k < arr.length; k++) {
      const examTitle = document.createElement("p");
      examTitle.classList.add("exam-title");
      examTitle.innerText = arr[k] + ": " + "Examination Questions.";
      body.appendChild(examTitle);
    }
    

 });
} }/*else {
  for (let j = 0; j < unitsOtherProgram.length; j++) {
    const but = document.createElement("button");
    but.innerText = unitsOtherProgram[j];
    units.appendChild(but);
  };
};*/
    p.innerText = `© ${year}. Noting for you. All rights reserved.`;
    foot.appendChild(p);
    const first = document.createElement("p");
    first.innerText = "Name: " + localStorage.getItem("name");
    infor.appendChild(first);
    
    const second = document.createElement("p");
    second.innerText = "Program: " + program;
    infor.appendChild(second);
    
    if (combination !== "") {
      const secondA = document.createElement("p");
      secondA.innerText = "Combination: " + combination;
      infor.appendChild(secondA);
    }
    
    const third = document.createElement("p");
    third.innerText = "Year of study: " + year2;
    infor.appendChild(third);
    
    const fourth = document.createElement("p");
    fourth.innerText = "Semester:    " + semester;
    infor.appendChild(fourth);
    
    
    let currentC = true;
topE.addEventListener("click", () => {
    list.classList.toggle("increase");
  oneEf.classList.toggle("move");
  topE.style.color = currentC ? "yellow" : "black";
  currentC = !currentC;
});