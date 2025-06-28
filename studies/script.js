/* --------------------#1.11 Coordinates -------------------- */

//Most JavaScript methods deal with one of two coordinate systems:
//1. The document coordinate system, which is the coordinate system of the entire document. (let's denotate as clientX and clientY)
//2. The viewport coordinate system, which is the coordinate system of the visible part of the browser window. (let's denotate as pageX and pageY)

//This method returns an object with properties that describe the position and size of the element in the viewport coordinate system.
alert(document.querySelector('h1').getBoundingClientRect().top);

//It has the following properties:
//- top: The distance from the top of the viewport to the top of the element.
//- right: The distance from the left of the viewport to the right of the element.
//- bottom: The distance from the top of the viewport to the bottom of the element.
//- left: The distance from the left of the viewport to the left of the element.
//- width: The width of the element.
//- height: The height of the element.
//- x: The same as left.
//- y: The same as top.
//- toJSON: A method that returns a JSON representation of the object.
//- toString: A method that returns a string representation of the object.

//The elementFromPoint method returns the topmost element at the specified coordinates in the viewport coordinate system.
//It takes two arguments: the x and y coordinates of the point in the viewport coordinate system
alert(document.elementFromPoint(100, 100));




