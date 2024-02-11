
### Status: #week-18

### Tags: #EWS  , #Programming 



In JavaScript, **class inheritance** is a way for one class to extend another class. Here’s how it works in your code:

1. **User Class**: This is the parent or base class. It has properties like `id` and `username`, and a method `sayHello()`.

```javascript
class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}
```

2. **Admin Class**: This is a derived or child class that extends the User class. It inherits all properties and methods from the User class, and adds a new property `permissions`.

```javascript
class Admin extends User {
  constructor(id, username, permissions) {
    super(id, username);
    this.p = permissions;
  }
}
```

The `super()` function is used to call the constructor of the parent class. In this case, it’s passing the `id` and `username` parameters to the User class constructor.

3. **Superman Class**: This is another derived class that extends the Admin class. It inherits all properties and methods from the Admin class, and adds a new property `ability`.

```javascript
class Superman extends Admin {
  constructor(id, username, permissions, ability) {
    super(id, username, permissions);
    this.a = ability;
  }
}
```

In your code, `userOne` is an instance of the User class, and `adminOne` is an instance of the Admin class. They can access the properties and methods defined in their respective classes.

Inheritance allows us to write reusable and organized code in JavaScript. It’s a key part of the object-oriented programming (OOP) paradigm. 


______________________________________________________________________


## Related : 

- [[Third Principle Concept of OOP Inheritance]].
- [[Constructor Function New Syntax]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-06 17:02 
  
  
   ## Modification date :
   
   Tuesday 6th February 2024 17:02:19