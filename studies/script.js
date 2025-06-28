/* --------------------#2.5 Dispatching custom events -------------------- */

//You can create and dispatch custom events in JavaScript to handle specific actions or interactions in your application.
//This is useful for decoupling components and allowing them to communicate without direct references.
//Let's create a custom event called doubleClickEvent that will be dispatched when a user double-clicks on a button.

const button = document.querySelector('.button');

// Create a custom event
const doubleClickEvent = new CustomEvent('doubleClickEvent', {
  detail: { message: 'Button was double-clicked!' }
});

// Dispatch the custom event when the button is double-clicked
button.addEventListener('dblclick', function() {
  button.dispatchEvent(doubleClickEvent);
});

// Listen for the custom event
button.addEventListener('doubleClickEvent', function(event) {
  alert(event.detail.message);
});
// This code listens for a double-click on the button and dispatches a custom event.

const button2 = document.getElementById('btn2');


button2.addEventListener("hello", function(event) {
    alert("Hello from " + event.target.tagName); 
  });

  let event = new Event("hello", {bubbles: true}); 
  button2.dispatchEvent(event);