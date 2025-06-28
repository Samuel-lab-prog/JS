/* --------------------#2.1 Introduction to browser events -------------------- */

//There are many types of events in the browser
//1. Click events
//2. Mouse events
//3. Keyboard events
//4. Form events
//5. Window events
//6. Touch events
//7. Drag and drop events
//8. Clipboard events
//9. Media events
//10. Animation events
//11. Transition events
//12. Custom events
//13. Pointer events

//When an event occurs, we have to handle it. There are two ways to handle events in JavaScript:
//1. Inline event handlers: These are defined directly in the HTML element using attributes like onclick, onmouseover, etc.
//2. Event listeners: These are defined in JavaScript using the addEventListener method
// The last one allows us to attach multiple event handlers to the same event type on the same element.

//Here are some examples of how to handle events in JavaScript:
//1. Inline event handler
function handleClick() {
    alert("Button clicked! 1!");
}
//2. onclick event handler
const secButton = document.getElementById("secondButton");
secButton.onclick = function() {
    alert("Button clicked! 2!");
};
//The value of this inside a handler is the element. The one which has the handler on it.

//3. addEventListener method
const thirdButton = document.getElementById("thirdButton");
thirdButton.addEventListener("click", function() {
    alert("Button clicked! 3!");
});
//There's a third argument to the addEventListener method, which is an options object. It can have two properties:
//1. capture: If true, the event will be captured during the capturing phase.
//2. once: If true, the event listener will be removed after the first invocation.
//3. passive: If true, the event listener will not call preventDefault().

//To remove an event listener, we can use the removeEventListener method. It takes the same arguments as addEventListener.
//IT MUST BE THE SAME FUNCTION REFERENCE, NOT A NEW FUNCTION.
function handleClickAgain() {
    alert("Button clicked! 3 again!");
} 
thirdButton.addEventListener("click", handleClickAgain);
thirdButton.removeEventListener("click", handleClickAgain);

//When an event occurs, the browser creates an event object that contains information about the event.
//We can access this object in the event handler function using the event parameter.
//The event object has many properties. Here is a example 

function mouseHoverHandler(event) {
    alert("Mouse over event:"+ event);
    alert("Event type:"+ event.type);
    alert("Target element:"+ event.target);
    alert("Mouse coordinates:"+ event.clientX + event.clientY);
}
const fourthButton = document.getElementById("fourthButton");
fourthButton.addEventListener("mouseover", mouseHoverHandler);