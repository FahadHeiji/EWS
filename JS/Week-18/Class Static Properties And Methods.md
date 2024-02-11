
### Status: #week-18

### Tags: #EWS  , #Programming 



In JavaScript, **static properties** and **static methods** are features of a class that are not tied to an instance of the class. They’re accessed on the class itself, not on instances of the class.

Here’s how it works in your code:

```javascript
class User {
  // Static Property
  static count = 0;

  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
    User.count++;
  }

  // Static Methods
  static sayHello() {
    return `Hello From Class`;
  }
  static countMembers() {
    return `${this.count} Members Created`;
  }
}
```

In your `User` class, `count` is a static property. It’s incremented each time the `User` constructor is called, tracking the total number of `User` instances created.

`sayHello` and `countMembers` are static methods. `sayHello` returns a greeting from the class, and `countMembers` returns the number of `User` instances created.

You create new `User` objects like this:

```javascript
let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Ahmed", 5000);
let userThree = new User(102, "Sayed", 5000);
```

And then access the static property and methods like this:

```javascript
console.log(userOne.count); // Outputs: undefined
console.log(User.count); // Outputs: 3
console.log(User.sayHello()); // Outputs: Hello From Class
console.log(User.countMembers()); // Outputs: 3 Members Created
```

Note that trying to access the static property `count` on an instance of the class (`userOne.count`) returns `undefined`, because static properties are not available on class instances.

In summary, static properties and methods in JavaScript classes provide functionality that’s associated with the class itself, not any particular instance of the class.


______________________________________________________________________


## Related : 

- [[Static Members]].
- [[Static Methods (Functions)]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-06 16:49 
  
  
   ## Modification date :
   
   Tuesday 6th February 2024 16:49:58