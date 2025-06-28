/* --------------------#1.10 Window sizes and scrolling -------------------- */

//The root document element is html element
const root = document.documentElement;
//If you want to get the width of the viewport, you can use the following code:
const viewportWidth = root.clientWidth;
//If you want to get the height of the viewport, you can use the following code:
const viewportHeight = root.clientHeight;
//If you want to get the width of the viewport including the scrollbar, you can use the following code:
const viewportWidthWithScrollbar = root.offsetWidth;
//If you want to get the height of the viewport including the scrollbar, you can use the following code:
const viewportHeightWithScrollbar = root.offsetHeight;

//To reliably obtain the full document height, we should take the maximum of these properties:

let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);

alert('Full document height, with scrolled out part: ' + scrollHeight);


//To get the current scroll position in pixels, we can use the following code:
alert('Current scroll position in pixels: ' + window.pageYOffset);  
alert('Current scroll position in pixels: ' + window.pageXOffset);

//The method scrollBy() scrolls the document by the specified number of pixels in the vertical direction.
window.scrollBy(0, 300); // Scrolls down by 300 pixels

//The method scrollTo() scrolls the document to the specified position in the vertical direction.
window.scrollTo(0, 300); // Scrolls to the position 300 pixels

//The scrollIntoView() method scrolls the document so that the specified element is visible in the viewport.
const cuteText = document.getElementById('cuteText');
cuteText.scrollIntoView({ behavior: 'smooth' });

//if you want to make the body unscrollable, you can use the following code:
document.body.style.overflow = 'hidden';