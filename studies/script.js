/* --------------------#4.3 Form events -------------------- */

//The change event triggers when the element has finished changing.
//For text inputs that means that the event occurs when it loses focus.
let myFirstEmail = document.getElementById("email1");
myFirstEmail.addEventListener("change", function() {
    alert("The email has changed to: " + myFirstEmail.value);
});
//For checkboxes, the change event occurs when the checkbox is checked or unchecked.
let myCheckbox = document.getElementById("checkbox1");
myCheckbox.addEventListener("change", function() {
    if (myCheckbox.checked) {
        alert("The checkbox is checked.");
    } else {
        alert("The checkbox is unchecked.");
    }
});

//The input event triggers when the value of an input changes.
let feedback = document.getElementById("feedback");
let mySecondEmail = document.getElementById("email2");
mySecondEmail.addEventListener("input", function() {
    feedback.textContent = "The email is: " + mySecondEmail.value;
    if(feedback.textContent === "The email is: ") {
        feedback.textContent = "Please enter an email.";
    }
});

//Cut, copy and paste are also events that can be handled.
//We can use preventDefault() to stop the default action of these events.
let myTextArea = document.getElementById("textarea1");
myTextArea.addEventListener("copy", function(event) {
    event.preventDefault();
    alert("Copying is disabled. you cannot copy");
});