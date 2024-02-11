
### Status: #week-18

### Tags: #EWS  , #Programming 


In JavaScript, a **class** can have **properties** and **methods**. Properties are values associated with an object, and methods are functions that perform actions on that object. Here’s how it works in your code:

```javascript
class User {
  constructor(id, username, salary) {
    // Properties
    this.i = id;
    this.u = username || "Unknown";
    this.s = salary < 6000 ? salary + 500 : salary;
    this.msg = function () {
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    };
  }
  // Methods
  writeMsg() {
    return `Hello ${this.u} Your Salary Is ${this.s}`;
  }
}
```

This is your class definition for `User`. The `constructor` method is a special method for creating and initializing an object created with a class. Inside the constructor, `this` refers to the new object being created. The properties `i`, `u`, `s`, and `msg` are set on `this`, meaning they will be properties of any new objects created with this class.

The `writeMsg` method is defined outside the constructor but still within the class body. This method is shared among all instances of the class, unlike the `msg` property which is redefined for each instance.

Next, you create new `User` objects like this:

```javascript
let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "", 6000);
```

The `new` keyword is used to create a new instance of the class, and the arguments passed in (`100, "Elzero", 5000`, etc.) are used as the `id`, `username`, and `salary` for the new user.

Finally, you access the properties and methods of these new objects like this:

```javascript
console.log(userOne.u); // Outputs: Elzero
console.log(userOne.s); // Outputs: 5500
console.log(userOne.msg()); // Outputs: Hello Elzero Your Salary Is 5500
console.log(userOne.writeMsg()); // Outputs: Hello Elzero Your Salary Is 5500

console.log(userTwo.u); // Outputs: Unknown
console.log(userTwo.s); // Outputs: 6000
console.log(userTwo.msg); // Outputs: function () { ... }
console.log(userTwo.writeMsg); // Outputs: function writeMsg() { ... }
```

Here, `userOne.u`, `userOne.s`, `userOne.msg()`, and `userOne.writeMsg()` access the `u`, `s`, `msg`, and `writeMsg` properties/methods of the `userOne` object, respectively. The same is done for `userTwo`.

Note that `userTwo.msg` and `userTwo.writeMsg` without parentheses return the function definitions, not the return values of the functions.

______________________________________________________________________


## Related : 

- [[OOP Introduction]].
- [[CSH Methods]].
- [[Class Members]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-06 16:26 
  
  
   ## Modification date :
   
   Tuesday 6th February 2024 16:26:21