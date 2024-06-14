var input = document.querySelector("#txt-input");
var btn = document.querySelector(".btn-add");
var ul = document.querySelector(".add-list");


// when i click on btn some function will run
function add() {
  // if & else statment run under condition if input value is none then give alert message to user,  else give output to user
  if (input.value === "") {
    alert("Write Something there!!!");
  } else {
    // create li element for html
    const li = document.createElement("li");

    // write in li the user input value and add button

    li.innerHTML = `<p>${input.value}</p>` + `<button class="btn btn-line">&#10006;</button>`;

    ul.appendChild(li);

    // initialize the lisner variable with the first li element
    const lisner = document.querySelector("li");
  }
  // after the program run input text value will be none
  input.value = "";
}
ul.addEventListener( "click",function (p) {
    if (p.target.tagName === "LI") {
      p.target.classList.toggle("check-li");
      p.target.childNodes[0].classList.toggle("check");
      console.log(p.target)
      
    } else if (p.target.tagName === "BUTTON") {
      p.target.parentElement.remove();
    }
  },
  false
);