/* --------------------#1.6 Node Properties -------------------- */

//Most standard HTML attributes becmome properties of element objects
//DOM nodes are regular JavaScript objects. We can alter them.
document.body.myData = {
  name: "Caesar",
  title: "Imperator",
};

alert(document.body.myData.title); // Imperator
//We can even add methods
document.body.sayTagName = function () {
  alert(this.tagName);
};

document.body.sayTagName(); // BODY (the value of "this" in the method is document.body)
//If we create a non-standard HTML attribute in an element, the DOM does not generate a property for this is attrubute
//So, if an attribute is non-standard, there won’t be a DOM-property for it. Is there a way to access such attributes?

//Sure. All attributes are accessible by using the following methods:

/* elem.hasAttribute(name) – checks for existence.
elem.getAttribute(name) – gets the value.
elem.setAttribute(name, value) – sets the value.
elem.removeAttribute(name) – removes the attribute. */

//The attributes collection is iterable
//When a standard attribute changes, the corresponding property is auto-updated, and (with some exceptions) vice versa.
//But there are exclusions, for instance input.value synchronizes only from attribute → property, but not back:
//DOM properties are not always strings. For instance, the input.checked property (for checkboxes) is a boolean

//All attributes starting with “data-” are reserved for programmers’ use. They are available in the dataset property.
//For instance, if an elem has an attribute named "data-about", it’s available as elem.dataset.about.

document.querySelector('h1').dataset.turnGreen = 'true'
alert(document.querySelector('h1').dataset.turnGreen)

