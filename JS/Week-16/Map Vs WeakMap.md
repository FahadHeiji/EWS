
### Status: #week-16

### Tags: #EWS  , #Programming 


A `Map` is a built-in JavaScript object that allows you to store key-value pairs. In a `Map`, keys can be of any type: functions, objects, and any primitive data types.

A `WeakMap` is similar to a `Map`, but with some key differences:

- **Weak References**: References to keys in a `WeakMap` are held weakly. If no other references to an object key stored in the `WeakMap` exist, those keys (and their associated values) can be automatically freed up, potentially lowering memory utilization.
- **Object Keys Only**: While a `Map` can have keys of any type, a `WeakMap` can only have keys that are objects.

In your code, you’ve demonstrated this difference. When you nullify the `mapUser` variable, the `Map` still retains the reference to the object and its value. But when you nullify the `wMapUser` variable, the `WeakMap` allows that reference to be garbage collected, effectively removing that key-value pair from the `WeakMap`.

### JavaScript Map vs WeakMap

- **Map**
  - Can store key-value pairs where keys can be any data type.
  - Retains references to key objects even if there are no other references to them.

- **WeakMap**
  - Can only store key-value pairs where keys are objects.
  - Does not prevent garbage collection of keys, potentially freeing up memory.

```javascript
let mapUser = { theName: "Elzero" };

let myMap = new Map();

myMap.set(mapUser, "Object Value");

mapUser = null; // Override The Reference

console.log(myMap);

console.log("#".repeat(20));

let wMapUser = { theName: "Elzero" };

let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "Object Value");

wMapUser = null; // Override The Reference

console.log(myWeakMap);
```

______________________________________________________________________


## Related : 

- [[Set vs WeakSet And Garbage Collector]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-01-15 15:18 
  
  
   ## Modification date :
   
   Monday 15th January 2024 15:30:51