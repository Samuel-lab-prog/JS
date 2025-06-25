/* --------------------#1.4 Searching inside the DOM -------------------- */

//Sometimes, only using relationships is not enough, so we may use special selectors
//Here's a list of them:

//getElementById() --> Returns the element with the given ID
//querySelectorAll --> Returns a collection of elements with the given CSS selector
//querySelector --> Returns the first element with the given CSS selector

//Here are some examples:

const secondH1 = document.getElementById("theSecH1")
alert(secondH1)

const allP = document.querySelectorAll('body p')
for(let p of allP){
    alert(p)
}
const firstP = document.querySelector('body > p')
alert(firstP)

//Those methods searchs the DOM, but sometimes we just want to know if a element respects a specific CSS selector
//For that, we can use matches()

if(firstP.matches('body > p'))
    alert('I am inside the body')

//The method elem.closest() looks for the nearest ancestor that matches the CSS-selector. The elem itself is also included in the search.
//In other words, the method closest goes up from the element and checks each of parents.
//If it matches the selector, then the search stops, and the ancestor is returned.

let myOL = document.querySelector('ol')
let theSection = myOL.closest('.future-class')

alert(theSection.tagName)

//There are many methods getElementsBy*, here are some examples:

//ByTag 
//ByClass
//ByName

//You get the idea...
//Ending this section, remember that getElementBy returns a live collection. Querys return a static collection







