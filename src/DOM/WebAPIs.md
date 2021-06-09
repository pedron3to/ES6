Adding Web APIs to the Picture
1. Requests execute on the stack using a single thread.

2. A request holds the thread until it is done executing all synchronous logic for that request.

3. New requests are queued until the thread is ready.

4.The event loop moves the next queued request into the stack when it becomes available.
We’re now adding web APIs to our picture of JavaScript. These extend the core JavaScript language. They surface interfaces that perform much of the work that is critical to the user experience of the modern web. For example, 

browser APIs can: 

* Interact with the structure of the current page rendered in the browser (Document Object Model or DOM API)
* Perform asynchronous requests to the server without leaving the current page (Fetch API)
Interact with audio, video, and graphics.

* Interact with device features surfaced to the browser (geolocation, device orientation, client-side data storage)
 
*Most of the time it is these APIs that add new requests to the queue. 