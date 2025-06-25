/* --------------------#1.2 DOM Tree -------------------- */

//You can imagine your HTML document as a tree structure, where each element is a node in the tree.
//The root of the tree is the <html> element, and all other elements are its children.
//The DOM (Document Object Model) is a representation of this tree structure in memory.
//You can't directly access a specific element in the DOM tree, but you can walk through the tree to find it.
//Let's say you want change the background color of the <body> element to red.
//You can do this by accessing the <body> element and changing its style property.

window.document.body.style.backgroundColor = 'red';

//One important thing to know is the difference between a node and an element. 
//A node is a single point in the DOM tree, while an element is a specific type of node that represents an HTML element.
//For example, the <body> element is an element node, while a text node inside the <body> element is a text node.
//Pretty much everything in the DOM is a node, but not all nodes are elements, only tags are elements.

//There are 12 types of nodes in the DOM, but we will only focus on the most common ones:
//1. Element nodes: These represent HTML elements, such as <div>, <p>, <span>, etc.
//2. Text nodes: These represent the text content inside an element, such as "Hello World!" inside a <p> element.
//3. Comment nodes: These represent comments in the HTML, such as <!-- This is a comment -->.
//4. Document nodes: This represents the entire HTML document, and is the root of the DOM tree.






