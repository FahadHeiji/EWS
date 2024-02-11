
### Status: #week-18

### Tags: #EWS  , #Programming 


``

````JS
/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/

class User {
  // Private Property
  #e;
  constructor(id, username, eSalary) {
    this.i = id;
    this.u = username;
    this.#e = eSalary;
  }
  getSalary() {
    return parseInt(this.#e);
  }
}

let userOne = new User(100, "Elzero", "5000 Gneh");

console.log(userOne.u);
console.log(userOne.getSalary() * 0.3);

````

**Encapsulation** is a fundamental concept in object-oriented programming. It’s the practice of keeping fields within a class private, then providing access to them via public methods. It’s a protective barrier that keeps the data and code safe within the class itself. This way, we can hide the values or state of a structured data object inside a class, preventing unauthorized parties’ direct access to them.

Here’s how encapsulation is demonstrated in your code:

- **Class Definition**: The `User` class is defined with three properties: `i`, `u`, and `#e`. The `#` in front of `e` makes it a private field, meaning it can only be accessed within the `User` class.
- **Constructor**: The `constructor` is a special method for creating and initializing an object within a class. In this case, it initializes `i`, `u`, and `#e` when a new `User` object is created.
- **Getter Method**: The `getSalary` method is a getter for the private field `#e`. It’s the only way to read the value of `#e` from outside the `User` class.
- **Object Creation**: A new `User` object `userOne` is created with `id`, `username`, and `eSalary` as `100`, `"Elzero"`, and `"5000 Gneh"`, respectively.
- **Accessing Properties**: `userOne.u` accesses the `u` property of `userOne`, and `userOne.getSalary()` accesses the private `#e` property through the public `getSalary` method.

This encapsulation makes the app more flexible, manageable, and reduces errors. It also simplifies the app and helps achieve the target without revealing complex details. It’s a key part of effective application design.

______________________________________________________________________


## Related : 

- [[Class Inheritance]].
- [[First Principle-Concept of OOP (Encapsulation)]].
- 

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-06 17:12 
  
  
   ## Modification date :
   
   Tuesday 6th February 2024 17:12:19