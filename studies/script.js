/* --------------------#3.2 Moving the mouse -------------------- */

//The mouseover and mouseout have a special property called relatedTarget
//The relatedTarget is the element that the mouse is moving to or from

let table = document.querySelector("table");

table.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target.tagName === "TD") {
      target.style.backgroundColor = "lightblue";
      event.relatedTarget.style.backgroundColor = "lightgreen";
    }
});
//The related targer can be null, so be careful when using it

//If the mouse moves from the parent to a child element, we get a mouseout event on the parent

//Mouse enter and mouse leave are similar to mouseover and mouseout, but they do not bubble
