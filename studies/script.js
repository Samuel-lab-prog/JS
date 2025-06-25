/* --------------------#1.3 Walking inside the DOM -------------------- */

//As I said before, we can acess the DOM walking through the tree.
//This is possible because the DOM is a tree structure, and each node has a parent, children, and siblings.
//These concepets are the keks to walk through the DOM. Here are some types of relationships you can use to walk through the DOM:

// - Parent: The node that is one level above the current node.
// - Child: The node that is one level below the current node.
// - Sibling: A node that shares the same parent as the current node.
// - First Child: The first child of the current node.
// - Last Child: The last child of the current node.
// - Next Sibling: The next node that shares the same parent as the current node.
// - Previous Sibling: The previous node that shares the same parent as the current node.
// - Ancestor: A node that is above the current node in the tree.
// - Descendant: A node that is below the current node in the tree.

//You get the idea, right? You can walk through the DOM using these relationships. Let's see some examples.
//Lets say you wanna get the first child of the body element, you can do it like this:

const body = document.body; // Get the body element
const firstChild = body.firstChild; // Get the first child of the body element
alert(firstChild); // Show the first child in an alert

//As you can see, we do not get a h1, but a text node. This is because the body element has a text node as its first child, which is the whitespace before the h1 element.
//If you want to get the first element child, you can use the `firstElementChild` property instead:
const firstElementChild = body.firstElementChild; // Get the first element child of the body
alert(firstElementChild); // Show the first element child in an alert

//Sometimes, the relationships may return not a single node, but a collection of nodes. For example, if you want to get all the children of the body element, you can use the `children` property:
const children = body.children; // Get all the children of the body element

//Because `children` is a collection, you can loop through it using a for loop:
for (let i = 0; i < children.length; i++) {
    alert(children[i]); // Show each child in an alert
}

//In summary, you can walk through the DOM using the relationships between nodes.
//You can get the parent, child, and sibling nodes, as well as the first and last children, and the next and previous siblings.
//You can also get all the children of a node using the `children` property. This allows you to navigate through the DOM and manipulate it as needed.


