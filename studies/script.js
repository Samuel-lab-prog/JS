/* --------------------#6.2 Selection and range-------------------- */

//A range is a object that represents a fragment of a document that can contain nodes and parts of text nodes.
//It is used to manipulate the content of the document, such as selecting text or inserting new content.
//The concept of a range is similar to the concept of a selection, but it is more powerful and flexible.
//A range can be created using the Range constructor, which is a built-in JavaScript object.
let range = new Range();
range.setStart(document.body, 0); // Set the start of the range to the body element
range.setEnd(document.body, 1); // Set the end of the range to the body element
//This creates a range that includes the entire body element.
//The first argument can be a node or a text node. If it is a text node, the second argument is the offset within the text node.
let test = document.getElementById("test");
let range2 = new Range();
range2.setStart(test.firstChild, 0); 
range2.setEnd(test.firstChild, 5);
alert(range2.toString()); 
//Alternatively, if node is an element node, then offset must be the child number.
let otherTest = document.getElementById("otherTest");
let range3 = new Range();
range3.setStart(otherTest, 0);
range3.setEnd(otherTest, 2);
alert(range3.toString());
//The range object has several methods that can be used to manipulate the range, such as collapsing the range,
//deleting the contents of the range, and inserting new content into the range.
//The range object also has several properties that can be used to get information about the range, such as the start and end nodes,
//the start and end offsets, and the collapsed state of the range.
// 1. The `collapse()` method collapses the range to a single point, which can be useful for inserting new content at that point.
range2.collapse(true); // Collapse the range to the start point
alert(range2.toString()); // This will show an empty string since the range is collapsed
// 2. Start and end container
alert(range2.startContainer); // This will show the start container of the range
alert(range2.endContainer); // This will show the end container of the range
//Once the range is created, we can manipulate its content using these methods:
// 3. The `deleteContents()` method deletes the contents of the range, which can be useful for removing text or elements from the document.
range2.deleteContents(); // This will delete the contents of the range
alert(range2.toString()); // This will show an empty string since the contents of the range
// 4. The `insertNode()` method inserts a new node at the start of the range, which can be useful for adding new content to the document.
let newNode = document.createElement("span");
newNode.textContent = "New content";
range2.insertNode(newNode);
alert(range2.toString()); // This will show the new content that was inserted into the range
// 5. The `extractContents()` method extracts the contents of the range and returns a DocumentFragment, which can be useful for moving content around in the document.
let extractedContent = range2.extractContents(); // This will extract the contents of the range
alert(extractedContent); // This will show the extracted content