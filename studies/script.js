/* --------------------#3.1 Mouse events -------------------- */

//There are many mouse events, and just one can trigger many others mouse events.
//All click events have the button property, which indicates which button was pressed.

//The possible values of event.button are:
// 0 - the left button
// 1 - the middle button (usually the wheel button)
// 2 - the right button
// 3 - the back button (usually the side button on the left)
// 4 - the forward button (usually the side button on the right)

//We also can detect if the click happenend using a specific button, like alt, ctrl, or shift.

let button = document.querySelector("button");

button.addEventListener("click", (event) => {
  if (event.button === 0 && event.altKey) {
    alert("Left button clicked with Alt");
  } else if (event.button === 0 && event.ctrlKey) {
    alert("Left button clicked with Ctrl");
  } else if (event.button === 0 && event.shiftKey) {
    alert("Left button clicked with Shift");
  } else {
    alert("Left button clicked without any modifier keys");
  }
});

//All mouse events have the event.clientX and event.clientY properties, which indicate the position of the mouse cursor relative to the viewport.
//Double click event has a 'problem', it selects the text under the cursor.
let input = document.querySelector("input");
input.addEventListener("dblclick", (event) => {
  event.preventDefault();
  alert("Double click detected");
});
//But there are more ways of doing this
//You can even protect your content for copy-paste, but it's not recommended.
let h1 = document.querySelector("h1");
h1.addEventListener("copy", (event) => {
  event.preventDefault();
  alert("Copying is not allowed");
});