/* --------------------#1.8 Styles and classes -------------------- */

//This will print a String with all classes
alert(document.body.className)

//If we want ger a collenction of all classes, we need to use classList
document.body.classList.add('cute')
document.body.classList.toggle('cute')

//The property elem.style is an object that corresponds to what’s written in the "style" attribute.
document.body.style.marginTop = '100px'

document.body.style.display = "none"; // hide

setTimeout(() => document.body.style.display = "", 1000); // back to normal

//To set the full style as a string, there’s a special property style.cssText:
//Never forget to add the unities!
//The style property operates only on the value of the "style" attribute, without any CSS cascade.
//But we can use this instead
/* getComputedStyle(element, [pseudo]) */ //Returns the final style of the element
//We should always ask for the exact property that we want, like paddingLeft or marginTop or borderTopWidth. Otherwise the correct result is not guaranteed.


