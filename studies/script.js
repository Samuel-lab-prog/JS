/* --------------------#1.7 Modifying the document -------------------- */

//To create DOM nodes, there are two methods:

//document.createElement(tag)
//document.createTextNode(text)

let firstDiv = document.createElement('div')

firstDiv.className = 'card'

firstDiv.innerHTML = '<p>Hello World'

//Now, we just need to insert. There are some ways of doing that

document.body.append(firstDiv)

//We can append the element in any place

document.body.querySelector('h1').append(firstDiv)

//Notice that the div were removed form the bottom and inserted in the top

//Here are more insertion methods, they specify different places where to insert:
/* 
node.append(...nodes or strings) – append nodes or strings at the end of node,
node.prepend(...nodes or strings) – insert nodes or strings at the beginning of node,
node.before(...nodes or strings) –- insert nodes or strings before node,
node.after(...nodes or strings) –- insert nodes or strings after node,
node.replaceWith(...nodes or strings) –- replaces node with the given nodes or strings.
 */

//Insert adjacentHTML (inserts html as a string)
//The first parameter is a code word, specifying where to insert relative to elem. Must be one of the following:

/* "beforebegin" – insert html immediately before elem,
"afterbegin" – insert html into elem, at the beginning,
"beforeend" – insert html into elem, at the end,
"afterend" – insert html immediately after elem.
The second parameter is an HTML string, that is inserted “as HTML”. */

//Let's remove our firstDiv
firstDiv.remove()

//We can clone this div to put another identical message
//The call elem.cloneNode(true) creates a “deep” clone of the element
//  – with all attributes and subelements. If we call elem.cloneNode(false), then the clone is made without child elements.

let secondDiv = firstDiv.cloneNode(true);
document.body.append(secondDiv);

//DocumentFragment
//Is like a temporary, invisible container used to build DOM structures off-screen—without triggering reflows or repaints
//Until you're ready to insert everything at once.

function getListContent() {
  let fragment = new DocumentFragment();

  for(let i=1; i<=3; i++) {
    let li = document.createElement('li');
    li.append(i);
    fragment.append(li);
  }

  return fragment;
}
ulSpecial.append(getListContent())

