
### Status: #week-15

### Tags: #EWS  , #Programming 

### Object Destructuring in JavaScript

Object destructuring in JavaScript allows us to extract properties from objects and assign them to new variables.

Example:

```javascript
const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
};

// Object Destructuring
const { theName, theAge, theCountry } = user;

console.log(theName); // Outputs: Osama
console.log(theAge); // Outputs: 39
console.log(theCountry); // Outputs: Egypt
````

In this code, the `user` object is destructured into individual variables `theName`, `theAge`, and `theCountry`. The values of these variables are logged to the console.


In your code, you have an object `user` with four properties. You then use object destructuring to assign the values of these properties to new variables.

Here’s what happens step by step:

1. `const { theName, theAge, theCountry } = user;` This line of code uses object destructuring to assign the values of the properties `theName`, `theAge`, and `theCountry` of the `user` object to new variables with the same names.
    
2. `console.log(theName); console.log(theAge); console.log(theCountry);` These lines of code print the values of the variables `theName`, `theAge`, and `theCountry` to the console.
    

So, in this example, `theName` will be “Osama”, `theAge` will be 39, and `theCountry` will be “Egypt”. This demonstrates how object destructuring can be used in JavaScript to extract values from objects and assign them to new variables.


______________________________________________________________________


## Related : 

- [[Destructuring Arrays Part 1]].

## Reference: 

1.  


---

  ## Creation date: 
  
  <%tp.file.creation_date()%> 
  
  
   ## Modification date :
   
   <%tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss")%>