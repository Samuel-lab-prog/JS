/* --------------------#5.2 defer and async-------------------- */

//The defer attribute is a boolean attribute that can be added to the <script> tag.
//When present, it indicates that the script should be executed after the document has been parsed.
//This means that the script will not block the rendering of the page, and the browser can continue to load and display the content while the script is being fetched and executed.

//The async attribute is also a boolean attribute that can be added to the <script> tag.
//When present, it indicates that the script should be executed asynchronously as soon as it is available.
//This means that the script will be fetched and executed in parallel with the rest of the page, without blocking the rendering of the content.

//In general, it is recommended to use the defer attribute for scripts that need to access the DOM,
//and the async attribute for scripts that do not depend on the DOM or other scripts.