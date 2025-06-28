/* --------------------#2.2 Event Bubbling -------------------- */

//If an events is assigned to an element that contains other elements, the event will bubble up to the parent element.
//This is called event bubbling.

function handleClick(event) {
  this.style.color = "red";
  this.style.backgroundColor = "black";
  this.style.fontSize = "30px";
  this.style.border = "3px solid red";
  this.style.padding = "20px";
  this.style.textAlign = "center";
  alert('This element triggered: ' + event.target.tagName);
}
const cuteText = document.getElementById("cuteText");
cuteText.addEventListener("mouseenter", handleClick);

//You can get the element that triggered the event using `event.target`.
const firstButton = document.getElementById("firstButton");
firstButton.addEventListener('mouseenter', handleClick);

const body = document.body;
body.addEventListener('click', handleClick);

//if you want to stop the event from bubbling up, you can use `event.stopPropagation()`.
const secondButton = document.getElementById("secondButton");
secondButton.addEventListener('click', function(event) {
  handleClick.call(this, event);
  event.stopPropagation(); // This will stop the event from bubbling up to the body
});
//You can also use `event.stopImmediatePropagation()` to stop all other event listeners from being called.

//During an event propagation, there are three phases:
//1. Capturing phase: The event starts from the root and goes down to the target
//2. Target phase: The event reaches the target element
//3. Bubbling phase: The event bubbles up from the target element to the root
//You can specify the phase in which you want to listen to the event by passing a third argument to `addEventListener`.