
### Status: #week-18

### Tags: #EWS  , #Programming 


**Object Meta Data and Descriptors** in JavaScript, which control how object properties behave.

```JS
/*
  Object Meta Data And Descriptor
  - Define Multiple Properties
  - Check Descriptors
*/

const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperties(myObject, {
  c: {
    configurable: true,
    value: 3,
  },
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
});

console.log(myObject);

console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
console.log(Object.getOwnPropertyDescriptors(myObject));
````

Here’s how these concepts are demonstrated in your code:

- **Object Creation**: `myObject` is created with properties `a` and `b`.
    
- **Define Multiple Properties**: `Object.defineProperties()` is used to add new properties `c`, `d`, and `e` to `myObject`. The properties are set to be configurable, but not writable or enumerable.
    
- **Log Object**: `myObject` is logged to the console, showing that `c`, `d`, and `e` have been added.
    
- **Check Descriptors**: `Object.getOwnPropertyDescriptor()` is used to log the descriptor of property `d` of `myObject`. `Object.getOwnPropertyDescriptors()` is used to log the descriptors of all properties of `myObject`.
    

This code demonstrates how property descriptors provide control over how properties can be interacted with in JavaScript. It’s a powerful feature for managing access to object data.

______________________________________________________________________


## Related : 

- [[Object Meta Data And Descriptor Part 1]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-06 18:08 
  
  
   ## Modification date :
   
   Tuesday 6th February 2024 18:08:25