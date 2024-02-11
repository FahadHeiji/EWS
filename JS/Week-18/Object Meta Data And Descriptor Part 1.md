
### Status: #week-18

### Tags: #EWS  , #Programming 


**Object Meta Data and Descriptors** in JavaScript, which control how object properties behave. There are three main descriptors:

- **writable**: If `true`, the property value can be changed.
- **enumerable**: If `true`, the property can be looped over by `for...in` or `for...of`.
- **configurable**: If `true`, the property can be deleted and its attributes can be altered.


```JS
/*
  Object Meta Data And Descriptor
  - writable
  - enumerable
  - configurable [Cannot Delete Or Reconfigure]
*/

const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObject, "c", {
  writable: false,
  enumerable: true,
  configurable: false,
  value: 3,
});

// Object.defineProperty(myObject, "c", {
//   writable: false,
//   enumerable: true,
//   configurable: true, <= Cannot redefine property
//   value: 3,
// });

myObject.c = 100;

console.log(delete myObject.c);

for (let prop in myObject) {
  console.log(prop, myObject[prop]);
}

console.log(myObject);
````

Here’s how these concepts are demonstrated in your code:

- **Object Creation**: `myObject` is created with properties `a` and `b`.
    
- **Define Property**: `Object.defineProperty()` is used to add a new property `c` to `myObject`. The property is set to be non-writable and non-configurable, but enumerable. This means you can’t change or delete `c`, but you can see it in loops.
    
- **Attempt to Modify**: The code tries to change `c` to `100`, but this has no effect because `c` is non-writable.
    
- **Attempt to Delete**: The code tries to delete `c`, but this also has no effect because `c` is non-configurable.
    
- **Enumeration**: A `for...in` loop is used to log all enumerable properties of `myObject`, including `c`.
    
- **Log Object**: Finally, `myObject` is logged to the console, showing that `c` is still `3`.
    

This code demonstrates how property descriptors provide control over how properties can be interacted with in JavaScript. It’s a powerful feature for managing access to object data.

______________________________________________________________________


## Related : 

- [[OOP Introduction]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-06 18:06 
  
  
   ## Modification date :
   
   Tuesday 6th February 2024 18:06:44