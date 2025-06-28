/* --------------------#2.4 Default browser events -------------------- */

//Clicking in a link, submitting a form, etc. are all default browser events.
// We can prevent these default events using the preventDefault() method.

let youtubeLink = document.querySelector("a");
youtubeLink.addEventListener("click", function(event) {
    event.preventDefault(); 
    alert("Link clicked, but default action prevented.");
});
//You can also just return false in the event handler to prevent the default action.