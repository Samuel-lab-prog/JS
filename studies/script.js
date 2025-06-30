/* --------------------#5.1 Page events-------------------- */

//The lifecycle of an HTML page has three important events:
//DOMContentLoaded – the browser fully loaded HTML, and the DOM tree is built, but external resources like pictures <img> and stylesheets may not yet have loaded.
//load – not only HTML is loaded, but also all the external resources: images, styles etc.
//beforeunload/unload – the user is leaving the page.
//All these are events that we can listen to and react to.
document.addEventListener("DOMContentLoaded", function() {
    alert("DOM fully loaded and parsed");
});
//One important thing to note is that the DOMContentLoaded has to read all scripts before it can fire
//so if you have a script that is loaded before the DOMContentLoaded event, it will not be able to access the DOM elements that are not yet loaded.
//To avoid this, you can either place your script at the end of the body or use

//The load event is fired when the whole page is loaded, including all dependent resources such as stylesheets and images.
window.addEventListener("load", function() {
    alert("Page fully loaded");
});
//The unload event is fired when the user is leaving the page, for example, when they close the tab or navigate to another page.
window.addEventListener("unload", function(event) {
    alert("You are leaving the page");
});

window.onbeforeunload = function(event) {
    return "Are you sure you want to leave this page? Stay with us!";
}
//The readyState property of the document object can be used to check the current state of the page.
//It can have three values:
//loading – the document is still loading
//interactive – the document has finished loading and the DOM is ready, but external resources like images may still be loading
//complete – the document and all external resources are fully loaded
document.onreadystatechange = function() {
    if (document.readyState === "loading") {
        alert("Document is loading");
    } else if (document.readyState === "interactive") {
        alert("Document is interactive");
    } else if (document.readyState === "complete") {
        alert("Document is fully loaded");
    }
};