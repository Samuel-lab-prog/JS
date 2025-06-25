/* --------------------#1.1 The Browser Environment -------------------- */

//A host environment is a place where the code is executed
//It may be a browser or a server, like node.js
//A host environment provides APIs to interact with the system

//in this studying series, we will be using the browser as our host environment
//Every variable, function or object in JavaScript is inherited from the global object
//In the browser, the global object is the window object

//The DOM (Document Object Model) is a representation of the HTML document
//The DOM is a tree-like structure that represents the HTML document
//And as I commented before, the DOM is a part of the global object (window)

//Parallel to the DOM, there is the BOM (Browser Object Model)
//The BOM is a representation of the browser window
//The BOM provides APIs to interact with the browser window
//The BOM is also a part of the global object (window)
//You can use the BOM to interact with the browser window, like opening a new window, or getting the screen size

//There's no much code in this file, but it's important to understand the concepts
//Here are some examples of how to use the DOM and BOM in JavaScript

window.alert(window.document.body)
window.alert(navigator.userAgent)
window.confirm("Wanna go to wiki?") ? window.open("https://en.wikipedia.org/wiki/JavaScript") : window.alert("You didn't want to go to wiki")

