
### Status: #week-18

### Tags: #EWS  , #Programming 


In JavaScript, the `class` keyword introduced in ES6 provides a new syntax for creating objects and dealing with inheritance. It's a syntactic sugar over JavaScript's existing prototype-based inheritance. Here's how it works in your code:

```javascript
class User {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary + 1000;
  }
}
```

This is your class definition for `User`. The `constructor` method is a special method for creating and initializing an object created with a class. It takes three parameters: `id`, `username`, and `salary`. Inside the constructor, `this` refers to the new object being created. The properties `i`, `u`, and `s` are set on `this`, meaning they will be properties of any new objects created with this class.

Next, you create a new `User` object like this:

```javascript
let userOne = new User(100, "Elzero", 5000);
```

The `new` keyword is used to create a new instance of the class, and the arguments passed in (`100, "Elzero", 5000`) are used as the `id`, `username`, and `salary` for the new user.

Finally, you access the properties of the new object and check its type like this:

```javascript
console.log(userOne.i); // Outputs: 100
console.log(userOne.u); // Outputs: Elzero
console.log(userOne.s); // Outputs: 6000

console.log(userOne instanceof User); // Outputs: true
console.log(userOne.constructor === User); // Outputs: true
```

Here, `userOne.i`, `userOne.u`, and `userOne.s` access the `i`, `u`, and `s` properties of the `userOne` object, respectively. `userOne instanceof User` checks if `userOne` is an instance of the `User` class, and `userOne.constructor === User` checks if the constructor of `userOne` is the `User` class.

In summary, the `class` syntax in JavaScript provides a more intuitive and less error-prone way of dealing with objects and inheritance.

______________________________________________________________________


## Related : 

- [[Constructor Function Introduction]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-06 15:33 
  
  
   ## Modification date :
   
   Tuesday 6th February 2024 15:33:57