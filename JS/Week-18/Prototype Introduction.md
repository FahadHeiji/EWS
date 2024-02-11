
### Status: #week-18

### Tags: #EWS  , #Programming 


In JavaScript, **prototypes** are the mechanism by which JavaScript objects inherit features from one another. This is often referred to as **prototype-based inheritance** and it’s an integral part of JavaScript.

Here’s a basic introduction:

- **Prototype Object**: JavaScript uses special hidden [[Prototype]] property of an object to create a chain for accessing properties and methods. This [[Prototype]] property is simply a reference to another object and every object has this property.
    
- **Prototype Chain**: When you try to access a property or method of an object, JavaScript will first look at the object’s own properties. If it doesn’t find it there, it will then look at the properties of the object’s prototype. This process continues up the chain until either the property is found or the end of the chain is reached.
    
- **Inheritance**: In JavaScript, any object can inherit properties from another object. This is done by setting the prototype of one object to another object.
    

Here’s a simple example:

```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.startEngine = function() {
  return 'Engine started';
}

let myCar = new Car('Toyota', 'Corolla');
console.log(myCar.startEngine()); // Outputs: 'Engine started'
```

In this example, `myCar` is an instance of `Car` and inherits properties and methods from the `Car` prototype.

This is a fundamental part of JavaScript and is used extensively in both modern JavaScript and older code. It’s important to understand prototypes to effectively work with JavaScript.

______________________________________________________________________


## Related : 

- [[Class Inheritance]].
- [[Deal With Properties And Methods]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-06 17:21 
  
  
   ## Modification date :
   
   Tuesday 6th February 2024 17:21:20