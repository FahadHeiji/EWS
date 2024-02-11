
### Status: #week-18

### Tags: #EWS  , #Programming 


In your code, you have a `User` class with a method `updateName` that updates the `u` property of a `User` object:

```javascript
class User {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
  }
  updateName(newName) {
    this.u = newName;
  }
}
```

You create a new `User` object `userOne` and then use the `updateName` method to change its `u` property:

```javascript
let userOne = new User(100, "Elzero", 5000);

console.log(userOne.u); // Outputs: Elzero
userOne.updateName("Osama");
console.log(userOne.u); // Outputs: Osama
```

This demonstrates how you can update the properties of an object through methods defined in its class.

The second part of your code deals with JavaScript’s built-in `String` constructor:

```javascript
let strOne = "Elzero";
let strTwo = new String("Elzero");

console.log(typeof strOne); // Outputs: string
console.log(typeof strTwo); // Outputs: object

console.log(strOne instanceof String); // Outputs: false
console.log(strTwo instanceof String); // Outputs: true

console.log(strOne.constructor === String); // Outputs: true
console.log(strTwo.constructor === String); // Outputs: true
```

Here, `strOne` is a string primitive, while `strTwo` is a String object. This is why `typeof strOne` returns `"string"` and `typeof strTwo` returns `"object"`. However, both `strOne` and `strTwo` are instances of the `String` constructor, which is why `strOne.constructor === String` and `strTwo.constructor === String` both return `true`.

In summary, your code demonstrates how to update object properties and how JavaScript’s built-in constructors work.

______________________________________________________________________


## Related : 

- [[Properties Set and Get]].
- [[Deal With Properties And Methods]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-06 16:45 
  
  
   ## Modification date :
   
   Tuesday 6th February 2024 16:45:47