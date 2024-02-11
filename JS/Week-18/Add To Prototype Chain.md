
### Status: #week-18

### Tags: #EWS  , #Programming 

In JavaScript, the **prototype chain** is a mechanism that allows one object to inherit properties and methods from another. When you try to access a property or method of an object, JavaScript will first look at the object’s own properties. If it doesn’t find it there, it will then look at the properties of the object’s prototype. This process continues up the chain until either the property is found or the end of the chain is reached.

Here’s how the prototype chain works in your code:

```JS
/*
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features
*/

class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOne = new User(100, "Elzero");
console.log(userOne.u);
console.log(User.prototype);
console.log(userOne);

User.prototype.sayWelcome = function () {
  return `Welcome ${this.u}`;
};

Object.prototype.love = "Elzero Web School";

String.prototype.addDotBeforeAndAfter = function (val) {
  return `.${this}.`;
};

let myString = "Elzero";
````

- **User Class**: The `User` class is defined with a constructor and a method `sayHello`. Instances of `User` will have access to this method.
    
- **User Instance**: `userOne` is an instance of `User` and can access properties and methods defined in `User`.
    
- **Adding to Prototype**: The `sayWelcome` method is added to the `User` prototype. This means all instances of `User`, including `userOne`, now have access to this method.
    
- **Extending Built-In Constructors**: The `love` property is added to the `Object` prototype, which is the top of the prototype chain. This means all objects, including `userOne`, now have access to this property. Similarly, the `addDotBeforeAndAfter` method is added to the `String` prototype, so all string objects can use this method.
    

This is a powerful feature of JavaScript, allowing for a flexible and dynamic way to share behavior across objects. However, it should be used with caution, as modifying built-in prototypes can lead to unpredictable behavior in your code.

______________________________________________________________________


## Related : 

- [[Prototype Introduction]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-06 17:42 
  
  
   ## Modification date :
   
   Tuesday 6th February 2024 17:42:38