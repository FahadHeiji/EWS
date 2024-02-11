 
### Status: #week-20

### Tags: #EWS  , #Programming 


[The **Call Stack** and **Web API** are fundamental concepts in JavaScript, especially in understanding how asynchronous operations work](https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/)[1](https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/)[2](https://dev.to/bipinrajbhar/how-javascript-works-web-apis-callback-queue-and-event-loop-2p3e).

1. [**Call Stack**: The call stack is a data structure that uses the Last In, First Out (LIFO) principle to temporarily store and manage function invocation (call)](https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/)[1](https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/). When a function is invoked (called), the function, its parameters, and variables are pushed into the call stack to form a stack frame. This stack frame is a memory location in the stack. [The memory is cleared when the function returns as it is popped out of the stack](https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/)[1](https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/). The call stack is primarily used for function invocation (call). [Since the call stack is single, function(s) execution is done, one at a time, from top to bottom](https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/)[1](https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/).
    
2. [**Web API**: The Web APIs are provided by the web browser that gives additional functionality to the JavaScript engine](https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/)[2](https://dev.to/bipinrajbhar/how-javascript-works-web-apis-callback-queue-and-event-loop-2p3e). [The Web API calls are added to the Web API Container from the Call Stack](https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/)[2](https://dev.to/bipinrajbhar/how-javascript-works-web-apis-callback-queue-and-event-loop-2p3e). These Web API calls remain inside the Web API Container until an action is triggered. [The action could be a click event or HTTP request, or a timer finishes its set time](https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/)[2](https://dev.to/bipinrajbhar/how-javascript-works-web-apis-callback-queue-and-event-loop-2p3e). [Once an action is triggered, a callback function is added to the Callback Queue](https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/)[2](https://dev.to/bipinrajbhar/how-javascript-works-web-apis-callback-queue-and-event-loop-2p3e).
    

In Asynchronous JavaScript, we have a callback function, an event loop, and a task queue. [The callback function is acted upon by the call stack during execution after the callback function has been pushed to the stack by the event loop](https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/)[1](https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/).

[Understanding these concepts is vital to understanding how JavaScript handles synchronous and asynchronous operations](https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/)[1](https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/)[2](https://dev.to/bipinrajbhar/how-javascript-works-web-apis-callback-queue-and-event-loop-2p3e).

______________________________________________________________________


## Related : 

- [[Asynchronous vs Synchronous]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-10 10:24 
  
  
   ## Modification date :
   
   Saturday 10th February 2024 10:24:11