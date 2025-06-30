/* --------------------#5.3 Resource loading-------------------- */

//The browser allows us to track the loading of external resources – scripts, iframes, pictures and so on.
//There are two events for it:
//onload – successful load,
//onerror – an error occurred.

let script = document.createElement('script');
script.src = "test.js";

document.head.append(script);

script.onload = () => {
  sayHi();
};

script.onerror = () => {
  alert("Error loading script");
};

//You can use this for any external resource, not just scripts.
let img = document.createElement('img');
img.src = "../test.png";

document.body.append(img);

img.onload = () => {
  alert("Image loaded successfully");
};

img.onerror = () => {
  alert("Error loading image");
};

//There’s a rule: scripts from one site can’t access contents of the other site. So, e.g. a script at https://facebook.com can’t read the user’s mailbox at https://gmail.com.
//To allow cross-origin access, the <script> tag needs to have the crossorigin attribute, plus the remote server must provide special headers.
//There are three levels of cross-origin access:

//1 No crossorigin attribute – access prohibited.
//2 crossorigin="anonymous" – access allowed if the server responds with the header Access-Control-Allow-Origin with * or our origin. Browser does not send authorization information and cookies to remote server.
//3 crossorigin="use-credentials" – access allowed if the server sends back the header Access-Control-Allow-Origin with our origin and Access-Control-Allow-Credentials: true. Browser sends authorization information and cookies to remote server.