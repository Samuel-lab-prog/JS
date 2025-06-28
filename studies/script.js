/* --------------------#1.9 Size and Scrolling -------------------- */

let lastDiv = document.getElementById('cute')
let lastP = document.getElementById('cuteText')

alert(lastP.offsetParent) //This will return the nearest ancestor that is positioned (has a position other than static)

//The offsetLeft/Top properties return the distance of the element relative to its offsetParent
alert(lastP.offsetLeft + ' ' + lastP.offsetTop)

//There are some casses where the offsetParent is null:
//1. The element is positioned fixed
//2. The element is not in the document (e.g. display: none)
//3. The element is not an HTML element (e.g. a text node)

//The offsetWidth/Height properties return the width/height of the element including padding and border
alert(lastP.offsetWidth + ' ' + lastP.offsetHeight)

//The clientLeft/Top properties return the distance of the element relative to its border
alert(lastP.clientLeft + ' ' + lastP.clientTop) //This will return 3 because the p has a border of 3px
alert(lastDiv.clientLeft + ' ' + lastDiv.clientTop) //This will return 25 because the div has a border of 25px

//The clientWidth/Height properties return the width/height of the element including padding but not border
alert(lastDiv.clientWidth + ' ' + lastDiv.clientHeight)

//The scrollWidth/Height properties return the width/height of the element including the content that is not visible (the content that is scrolled)
alert(lastDiv.scrollWidth + ' ' + lastDiv.scrollHeight)

//The scrollLeft/Top properties return the distance of the element relative to its scrollable area
alert(lastDiv.scrollLeft + ' ' + lastDiv.scrollTop)

//The scrollLeft/Top can be modified to scroll the element
lastDiv.scrollTop = 100 //This will scroll the div 100px down
lastDiv.scrollLeft = 100 //This will scroll the div 100px to the right

//Please, don't take width/heigh of an element from the style property, because it will return the width/height without padding and border
//Use the offsetWidth/Height, clientWidth/Height or scrollWidth/Height properties instead
//CSS width/height depends on the box-sizing property
//If box-sizing is set to border-box, the width/height will include padding and border
//If box-sizing is set to content-box, the width/height will not include padding and border

//CSS width, height may be auto
//If the width/height is set to auto, the element will take the width/height of its content
//If the width/height is set to a specific value, the element will take that value