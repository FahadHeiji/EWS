
### Status: #week-20

### Tags: #EWS  , #Programming 


[The **Event Loop** and the **Callback Queue** are key components in JavaScript’s concurrency model](https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript)[1](https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript)[2](https://stackoverflow.com/questions/67554089/what-is-the-difference-between-callback-queue-and-event-queue)[3](https://vegibit.com/node-js-call-stack-callback-queue-and-event-loop/)[4](https://javascript.plainenglish.io/understanding-javascript-heap-stack-event-loops-and-callback-queue-6fdec3cfe32e)[5](https://stackoverflow.com/questions/21607692/understanding-the-event-loop).

1. [**Event Loop**: The event loop is a constantly running process in JavaScript that checks if the call stack is empty](https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript)[1](https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript)[3](https://vegibit.com/node-js-call-stack-callback-queue-and-event-loop/). If the call stack is empty, it looks at the callback queue. [If there is something in the callback queue that is waiting to be executed, it is taken off the queue and pushed onto the call stack to be run](https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript)[1](https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript)[3](https://vegibit.com/node-js-call-stack-callback-queue-and-event-loop/). [The event loop allows JavaScript to be non-blocking and handle asynchronous operations](https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript)[1](https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript)[3](https://vegibit.com/node-js-call-stack-callback-queue-and-event-loop/).
    
2. [**Callback Queue**: The callback queue, also known as the task queue, is a list of all the callbacks that are ready to be executed](https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript)[2](https://stackoverflow.com/questions/67554089/what-is-the-difference-between-callback-queue-and-event-queue)[4](https://javascript.plainenglish.io/understanding-javascript-heap-stack-event-loops-and-callback-queue-6fdec3cfe32e)[5](https://stackoverflow.com/questions/21607692/understanding-the-event-loop). [Callbacks are functions that are passed to other functions to be executed later](https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript)[2](https://stackoverflow.com/questions/67554089/what-is-the-difference-between-callback-queue-and-event-queue)[4](https://javascript.plainenglish.io/understanding-javascript-heap-stack-event-loops-and-callback-queue-6fdec3cfe32e)[5](https://stackoverflow.com/questions/21607692/understanding-the-event-loop). [When an asynchronous operation completes, the callback for that operation is added to the callback queue](https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript)[2](https://stackoverflow.com/questions/67554089/what-is-the-difference-between-callback-queue-and-event-queue)[4](https://javascript.plainenglish.io/understanding-javascript-heap-stack-event-loops-and-callback-queue-6fdec3cfe32e)[5](https://stackoverflow.com/questions/21607692/understanding-the-event-loop). [The event loop takes callbacks from the callback queue and pushes them onto the call stack when the call stack is empty](https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript)[2](https://stackoverflow.com/questions/67554089/what-is-the-difference-between-callback-queue-and-event-queue)[4](https://javascript.plainenglish.io/understanding-javascript-heap-stack-event-loops-and-callback-queue-6fdec3cfe32e)[5](https://stackoverflow.com/questions/21607692/understanding-the-event-loop).
    

In summary, the event loop and the callback queue work together to handle asynchronous operations in JavaScript. [The event loop continuously checks the call stack and the callback queue, pushing callbacks onto the call stack to be executed when the stack is empty](https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript)[1](https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript)[2](https://stackoverflow.com/questions/67554089/what-is-the-difference-between-callback-queue-and-event-queue)[3](https://vegibit.com/node-js-call-stack-callback-queue-and-event-loop/)[4](https://javascript.plainenglish.io/understanding-javascript-heap-stack-event-loops-and-callback-queue-6fdec3cfe32e)[5](https://stackoverflow.com/questions/21607692/understanding-the-event-loop).

______________________________________________________________________


## Related : 

- [[Call Stack And Web API]].
- [[What is Queue Data Structure]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-10 10:30 
  
  
   ## Modification date :
   
   Saturday 10th February 2024 10:30:52