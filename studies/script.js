/* --------------------#3.5 Scrolling -------------------- */

//The scroll event allows reacting to a page or element scrolling.

window.addEventListener('scroll', function(event) {
  document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
});
window.addEventListener('keydown', function(event) {
  if(event.key === 'PageUp' || event.key === 'PageDown') {
    event.preventDefault(); // Prevent default scrolling behavior
  }
});