/* --------------------#4.2 Focus and blur -------------------- */

// Focus is the ability to direct the user's attention to a specific element on the page.
// This is often used for form inputs, buttons, and other interactive elements.
// The focus can be set programmatically using JavaScript, and it can also be managed through keyboard navigation.
// Losing the focus (blur), means that the data in the input field is no longer being edited.

// Focus and blur are events. Here's a quick example of how to use them:

let myEmail = document.getElementById('emailInput');
let error = document.getElementById('emailError');
myEmail.onblur = function() {
  if(!myEmail.value.includes('@')) 
    error.innerHTML = 'Please enter a valid email address.';
  else
    myEmail.style.backgroundColor = error.innerHTML = '';
}
myEmail.onfocus = function() {
    error.innerHTML = '';
}

// The methods focus() and blur() can be used to set or remove focus from an element.
// Let's make the user not be able to exist the input field until they enter a valid email address:
let secondEmail = document.getElementById('secondEmailInput');
secondEmail.onblur = function() {
  if(!secondEmail.value.includes('@')) {
    error.innerHTML = 'Please enter a valid email address.';
    secondEmail.focus(); // Set focus back to the input field
  } else {
    error.innerHTML = '';
  }
}

// Some elements are not focusable by default, such as <div> or <span>.
// To make them focusable, you can add the tabindex attribute:

let myList = document.getElementById('list');
let listItems = myList.getElementsByTagName('li');
listItems[0].tabIndex = 1; // Make the first list item focusable
listItems[1].tabIndex = 2; // Make the second list item focusable
listItems[2].tabIndex = 0; // Skips the third list item
// This means that the third list item will not be focusable, but the fourth will be
listItems[3].tabIndex = 4; // Make the fourth list item focusable
listItems[4].tabIndex = -1; // Make the fifth list item not focusable

// Blur and focus events do not bubble, meaning they do not propagate up the DOM tree.
// This means that if you have an event listener on a parent element, it will not be triggered when a child element receives focus or loses focus.
// However, you can use the focusin and focusout events, which do bubble:

myList.addEventListener('focusin', function(event) {
    event.target.style.backgroundColor = 'lightblue'; // Change background color of focused element
});

myList.addEventListener('focusout', function(event) {
    event.target.style.backgroundColor = ''; // Reset background color when focus is lost
});