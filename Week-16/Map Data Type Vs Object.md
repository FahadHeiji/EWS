
### Status: #week-16

### Tags: #EWS  , #Programming 


A `Map` is a built-in JavaScript object that allows you to store key-value pairs. Unlike regular objects, `Map` has several advantages:

- **Key Types**: In a `Map`, keys can be of any type: functions, objects, and any primitive data types. In an `Object`, keys can only be strings or symbols.
- **Order**: A `Map` is ordered by insertion, whereas an `Object` does not guarantee order.
- **Size**: A `Map` has a `size` property that returns the number of entries. To get the size of an `Object`, you need to do it manually (e.g., using `Object.keys(obj).length`).
- **Iteration**: A `Map` can be directly iterated using methods like `map.keys()`, `map.values()`, or `map.entries()`. An `Object` is not directly iterable and needs methods like `Object.keys()` or `Object.values()`.
- **Performance**: A `Map` has better performance in scenarios involving frequent additions and removals of key-value pairs.

## Organized Notes


# JavaScript Map Object vs Regular Object

- **Map**
  - Can store key-value pairs where keys can be any data type.
  - Ordered by insertion.
  - Has `size` property.
  - Can be directly iterated.
  - Better performance when adding or removing data.

- **Object**
  - Can store key-value pairs where keys are strings or symbols.
  - Order is not guaranteed.
  - Does not have `size` property.
  - Not directly iterable, needs `Object.keys()` or similar.
  - Lower performance when compared to Map when adding or removing data.

```JS
let myObject = {};
let myEmptyObject = Object.create(null);
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);

let myNewObject = {
  10: "Number",
  "10": "String",
};

console.log(myNewObject[10]);

let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean");
myNewMap.set({a: 1, b: 2}, "Object");
myNewMap.set(function doSomething() {}, "Function");

console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));

console.log("####");

console.log(myNewObject);
console.log(myNewMap);

````



______________________________________________________________________


## Related : 

- [[Object – Introduction]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-01-15 13:55 
  
  
   ## Modification date :
   
   Monday 15th January 2024 13:55:43