
### Status: #week-18

### Tags: #EWS  , #Programming 


In JavaScript, a **constructor function** is a special type of function used to initialize new objects of the same type. Here’s how it works in your code:

```javascript
function User(id, username, salary) {
  this.i = id;
  this.u = username;
  this.s = salary + 1000;
}
```

This is your constructor function, named `User`. It takes three parameters: `id`, `username`, and `salary`. Inside the function, `this` refers to the new object being created. The properties `i`, `u`, and `s` are set on `this`, meaning they will be properties of any new objects created with this constructor.

Next, you create new `User` objects like this:

```javascript
let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Hassan", 6000);
let userThree = new User(102, "Sayed", 7000);
```

The `new` keyword is used to call the constructor function, creating a new object each time. The arguments passed in (`100, "Elzero", 5000`, etc.) are used as the `id`, `username`, and `salary` for each new user.

Finally, you access the properties of these new objects like this:

```javascript
console.log(userOne.i); // Outputs: 100
console.log(userOne.u); // Outputs: Elzero
console.log(userOne.s); // Outputs: 6000
```

Here, `userOne.i`, `userOne.u`, and `userOne.s` access the `i`, `u`, and `s` properties of the `userOne` object, respectively. The same is done for `userTwo` and `userThree`.

In summary, a constructor function in JavaScript is a powerful tool for creating multiple objects of the same type. It promotes code reusability and cleaner code.

______________________________________________________________________


## Related : 

- [[Constructors]]

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-06 15:23 
  
  
   ## Modification date :
   
   Tuesday 6th February 2024 15:23:10