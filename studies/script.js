/* --------------------#4.1 Forms control -------------------- */

// Document forms are members of the special collection document.forms.
// The collection is an array-like object, which means that it has a length property and can be accessed by index.
// The collection is live, meaning that it is automatically updated when the document changes.

let firstForm = document.forms[0]; // Get the first form in the document
let secondForm = document.forms[1]; // Get the second form in the document
// You can also access forms by their name or id attribute
let namedForm = document.forms['firstForm']; // Get the form with name 'firstForm'
let idForm = document.forms['secondForm']; // Get the form with id 'secondForm

//Inside the collection, we may have many elements with the same name, in this case, if we acess the
//Element by name, we will get a collection of elements with that name

let radioButtons = firstForm.option; // Get all radio buttons with name 'option' in the first form
//Since this is a collection, we can iterate over it
for (let i = 0; i < radioButtons.length; i++) 
    alert(radioButtons[i].value); 

//The acess to the elements does not depends on the tag structure, so we can access the elements by their name or id

//You can get the form that an element belongs to by using the form property of the element
let inputElement = document.querySelector('input'); 
alert(inputElement.form.id); // Get the form that the input element belongs to

//To acess the content of an input element, you can use the value property
let inputValue = inputElement.value; // Get the value of the input element
//If the input element is a checkbox or radio button, you can use the checked property
let isChecked = inputElement.checked; // Get the checked state of the input element

//The select element has 3 special properties: options, selectedIndex, and value
// 1.1 Options: a collection of all the options in the select element
// 1.2 selectedValue: the value of the selected option
// 1.3 selectedIndex: the index of the selected option

//There's a short syntax to create a new option element and add it to the select element
option = new Option('Option 1', 'value1', false, false); // Create a new option element;

//Other input elements may have special properties such as text, but the most common ones are value and checked