/* --------------------#2.3 Event Delegation -------------------- */

//The idea is, instead of attaching an event listener to every single element, we attach it to a common ancestor
//And let the event bubble up from the target element to the ancestor. This way, we can handle events for multiple elements with a single event listener.
//For this example, we will use a table with multiple rows and cells, and we will attach a click event listener to the table itself.

let table = document.querySelector("table");

function highlightCell(event) {
  let target = event.target;
  if (target.tagName !== "TD") return;
  let cells = table.querySelectorAll("td");
  cells.forEach((cell) => {
    cell.classList.remove("card");
  });
  target.classList.add("card");
}
table.addEventListener("click", highlightCell);

//But there is a catch! Because if we click on a element inside the cell, it will not work.
//To fix this, we can use event delegation to check if the target is a cell or an element inside the cell.

function highlightCellCorrect(event) {
  let td = event.target.closest("td");
  if (!td) return;
  if (!table.contains(td)) return;
  let cells = table.querySelectorAll("td");
  cells.forEach((cell) => {
    cell.classList.remove("card");
  });
  td.classList.add("card");
}
table.removeEventListener("click", highlightCell);
table.addEventListener("click", highlightCellCorrect);

//Imagine that we have a menu with 3 buttons and we have an object with 3 methods.
//We can use event delegation to handle the click events for all buttons with a single event listener.

let menu = document.querySelector("#menu");

class Menu {
  constructor(elem) {
    this.elem = elem;
    elem.onclick = this.handleClick.bind(this);
  }
  save(){
    alert("Save");
  }
  load(){
    alert("Load");
  }
  reset(){
    alert("Reset");
  }
  handleClick(event) {
    let action = event.target.dataset.action;
    if(action){
      this[action]();
    }
  }
}
new Menu(menu);
