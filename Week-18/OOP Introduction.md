
### Status: #week-18

### Tags: #EWS  , #Programming 


**Object-Oriented Programming (OOP)** is a programming paradigm that uses “objects” to design applications and software. In OOP, each object is an instance of a class and can have properties (characteristics) and methods (functions).

Here are some key concepts of OOP in JavaScript:

1. **Objects**: An object is a unique entity that contains properties and methods. [For example, a car is an object with properties like color, model, and methods like drive, stop](https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/)[1](https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/).
    
2. **Classes**: Classes are blueprints of an object. [A class can have many objects because the class is a template while objects are instances of the class](https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/)[2](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming).
    
3. **Encapsulation**: Encapsulation is the bundling of data, along with the methods that operate on that data, into a single unit. [Many programming languages use encapsulation frequently in the form of classes](https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/)[1](https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/).
    
4. [**Inheritance**: Inheritance is a mechanism where you can derive a class from another class for a hierarchy of classes that share a set of attributes and methods](https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/)[1](https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/).
    
5. **Polymorphism**: Polymorphism allows us to perform a single action in different ways. [For example, it allows us to change how a particular function behaves for different classes](https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/)[1](https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/).
    

Here’s an example of how to create an object in JavaScript:

```javascript
let person = {
  first_name: 'John',
  last_name: 'Doe',
  getFullName: function() {
    return `${this.first_name} ${this.last_name}`;
  }
};

console.log(person.getFullName()); // Outputs: John Doe
```

And here’s an example of how to create a class in JavaScript:

```javascript
class Person {
  constructor(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
  }

  getFullName() {
    return `${this.first_name} ${this.last_name}`;
  }
}

let person1 = new Person('John', 'Doe');
console.log(person1.getFullName()); // Outputs: John Doe
```

Remember, JavaScript is a prototype-based language, and it does not have a traditional class-based implementation as in languages like Java or C++. [However, with ES6, JavaScript introduced a `class` syntax that allows us to write classes much like in traditional OOP languages](https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/)[1](https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/)[2](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming).

______________________________________________________________________


## Related : 

-

## Reference: 

1.   [[OOP]].


---

  ## Creation date: 
  
  2024-02-06 15:09 
  
  
   ## Modification date :
   
   Tuesday 6th February 2024 15:10:07