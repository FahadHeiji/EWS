
### Status: #week-16

### Tags: #EWS  , #Programming 


Sure, I’d be happy to explain and help you organize notes on the topic. The code you’ve shared is about the `Set` and `WeakSet` objects in JavaScript.

## Explanation

A `Set` is a built-in JavaScript object that allows you to store unique values of any type. Unlike arrays, sets don’t allow duplicate values and you can’t access elements by index. This makes them useful when you need to keep track of a list of items, but don’t care about their order or frequency.

A `WeakSet` is similar to a `Set`, but with some key differences:

- **Weak References**: References to objects in a `WeakSet` are held weakly. If no other references to an object stored in the `WeakSet` exist, those objects can be garbage collected. This makes `WeakSet` useful for storing objects that may need to be freed later.
- **Object Only**: While a `Set` can store any data values, a `WeakSet` can only store objects.
- **No Size Property**: A `WeakSet` does not have a `size` property, unlike a `Set`.
- **Limited Methods**: A `WeakSet` does not have methods like `clear`, `keys`, `values`, and `entries` that a `Set` does. Also, `WeakSet` cannot use `forEach`.

## Organized Notes


## JavaScript Set vs WeakSet

- **Set**
  - Can store any data values.
  - Has `size` property.
  - Has `keys`, `values`, `entries` methods.
  - Can use `forEach`.

- **WeakSet**
  - Can only store objects.
  - Does not have `size` property.
  - Does not have `clear`, `keys`, `values`, `entries` methods.
  - Cannot use `forEach`.
  - References to objects are held weakly, allowing them to be garbage collected if there are no other references.

- **Usage**: Store objects and removes them once they become inaccessible.

```JS
// Type Of Data

let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

console.log(mySet);

// Size
console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

// Values + Keys [Alias For Values]
let iterator = mySet.keys();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

// forEach

mySet.forEach((el) => console.log(el));

console.log("#".repeat(20));

// Type Of Data

let myws = new WeakSet([{ A: 1, B: 2 }]);

console.log(myws);
````



## `WeakSet` in JavaScript has several use cases:

1. **Garbage Collection**: The contents of a `WeakSet` can be garbage collected. [This means that if there are no other references to an object stored in the `WeakSet`, those objects can be automatically freed up, potentially lowering memory utilization](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)[2](https://www.geeksforgeeks.org/what-is-the-use-of-a-weakset-object-in-javascript/).
    
2. **Detecting Circular References**[: Functions that call themselves recursively need a way of guarding against circular data structures by tracking which objects have already been processed`WeakSet`s are ideal for this purpose](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet).
    
3. [**Class Branding**: `WeakSet` can be used for class branding, which is a way to mark an object as an instance of a particular class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)[2](https://www.geeksforgeeks.org/what-is-the-use-of-a-weakset-object-in-javascript/).
    

Here’s an example of how a `WeakSet` can be used to detect circular references:

```javascript
// Execute a callback on everything stored inside an object
function execRecursively(fn, subject, _refs = new WeakSet()) {
  // Avoid infinite recursion
  if (_refs.has(subject)) {
    return;
  }

  fn(subject);

  if (typeof subject === "object" && subject) {
    _refs.add(subject);
    for (const key in subject) {
      execRecursively(fn, subject[key], _refs);
    }
    _refs.delete(subject);
  }
}

const foo = {
  foo: "Foo",
  bar: {
    bar: "Bar",
  },
};

foo.bar.baz = foo; // Circular reference!

execRecursively((obj) => console.log(obj), foo);
```

In this example, a `WeakSet` is created on the first run, and passed along with every subsequent function call (using the internal `_refs` parameter). [The number of objects or their traversal order is immaterial, so a `WeakSet` is more suitable (and performant) than a `Set` for tracking object references, especially if a very large number of objects is involved](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet).

______________________________________________________________________


## Related : 

- [[Set Data Type And Methods]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-01-15 13:43 
  
  
   ## Modification date :
   
   Monday 15th January 2024 13:59:05