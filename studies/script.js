/* --------------------#6.1 Mutation observer-------------------- */

//MutationObserver is a built-in object that observes a DOM element and fires a callback when it detects a change.

let observer = new MutationObserver(mutatations);
let h1 = document.querySelector("h1");

//Config is an object that specifies what types of changes to observe.
config = {
  attributes: true, // Observe changes to attributes
  childList: true, // Observe changes to child elements
  subtree: true // Observe changes to all descendants
};
//After any change, the callback function will be called with an array of MutationRecord objects that describe the changes.
function mutatations(mutations) {
  mutations.forEach((mutation) => {
    alert(mutation.type + " detected on " + mutation.target.tagName);
    alert("Old value: " + mutation.oldValue);
    if (mutation.type === "attributes") { 
      alert("Attribute changed: " + mutation.attributeName);
    }
  });
}

observer.observe(h1, config);

h1.classList.add("card"); //This will trigger the observer and call the callback function
//To stop observing, you can call the disconnect method on the observer.
// observer.disconnect(); // Uncomment this line to stop observing
