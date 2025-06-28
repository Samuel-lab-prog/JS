/* --------------------#1.5 Node Properties -------------------- */

//Every DOM node may have different properties,
//But many of them are commoon since all of them Inherits EventTarget

//The nodeType property provides one more, “old-fashioned” way to get the “type” of a DOM node.

alert(document.querySelector("h1").nodeType); //Prints 1 for element nodes
alert(document.body.firstChild.nodeType); //Prints 3 for element nodes
alert(document.nodeType); //Prints 9 for the document object

//We also have the node/tag name property

alert(document.querySelector("h1").nodeName);
alert(document.querySelector("h1").tagName);

//The innerHTML property allows to change the HTML inside an element

document.body.innerHTML = "<h1>Hello World!</h1>";
document.body.innerHTML += "<p>Today is a beautiful day!</p>";

//The outerHTML is like innerHTML + the element itself

document.querySelector("h1").outerHTML =
  "<h1>Hello People</h1> <p>Today is a nice day!</p>";

//The innerHTML property is only valid for element nodes
//But we have other propertis for that, like textNode or value
//The textContent property give acess to the text inside a element as a String

document.querySelector("h1").textContent = "The fox jumped over the river";

//The hidden property is used to hide an element in the document

document.querySelector("p").hidden = true;

//There are many more, but these are the main ones
