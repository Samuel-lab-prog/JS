/* --------------------#3.4 Pointer events -------------------- */

//Mouse events were replaced by pointer events in 2010.
//Pointer events are a superset of mouse events, meaning they include all mouse events and more.
//Pointer events are designed to handle input from various devices, including touchscreens, styluses,
//Thet have similar properties and methods to mouse events, but they also include additional properties
//and methods to handle touch and stylus input.

//1. Pointer id
//Each pointer event has a unique pointerId property, which is used to identify the specific pointer (e.g., finger, stylus) that is generating the event.
//This is particularly useful for distinguishing between multiple simultaneous pointers, such as when using multi-touch gestures.
//2. Pointer type
//The pointerType property indicates the type of input device that generated the event, such as "
//3.isPrimary
//The isPrimary property indicates whether the pointer is the primary pointer for the current interaction.

//Whwn a user touches the screen with multiple fingers, each finger generates a separate pointer event. with a unique pointerId.
//The first finger to touch the screen is considered the primary pointer, and subsequent fingers are considered secondary pointers.

//The pointerCancel event is fired when a pointer is no longer active, such as when a user lifts their finger off the screen or when a stylus is removed from a touchscreen.
//The method setPointerCapture() allows an element to capture pointer events from a specific pointer, even if the pointer moves outside the element's bounds.
//In other words, elem.setPointerCapture(pointerId) retargets all subsequent events with the given pointerId to elem.