
### Status: #week-15

### Tags: #EWS  , #Programming 


### Advanced Object Destructuring in JavaScript

Object destructuring in JavaScript allows us to extract properties from objects and assign them to new variables. It also supports renaming variables, providing default values, and destructuring nested objects.

Example:

```javascript
const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
  theColor: "Black",
  skills: {
    html: 70,
    css: 80,
  },
};

// Object Destructuring with renaming and default values
const { theName: n, theAge: a, theCountry, theColor: co = "Red", skills: { html: h, css }, } = user;

console.log(n); // Outputs: Osama
console.log(a); // Outputs: 39
console.log(theCountry); // Outputs: Egypt
console.log(co); // Outputs: Black

// Destructuring the nested object directly
const { html: skillOne, css: skillTwo } = user.skills;

console.log(`My HTML Skill Progress Is ${skillOne}`); // Outputs: My HTML Skill Progress Is 70
console.log(`My CSS Skill Progress Is ${skillTwo}`); // Outputs: My CSS Skill Progress Is 80
````


In your code, you have an object `user` with several properties, including a nested `skills` object. You then use object destructuring to assign the values of these properties to new variables, with some additional features:

1. `const { theName: n, theAge: a, theCountry, theColor: co = "Red", skills: { html: h, css }, } = user;` This line of code uses object destructuring to assign the values of the properties of the `user` object to new variables. Here, you’re also renaming the variables (`theName` becomes `n`, `theAge` becomes `a`, etc.), and providing a default value (`co = "Red"`) for a non-existent property.
    
2. `console.log(n); console.log(a); console.log(theCountry); console.log(co); console.log(`My HTML Skill Progress Is{h}`); console.log(`My CSS Skill Progress Is{css}`);` These lines of code print the values of the variables to the console.
    
3. `const { html: skillOne, css: skillTwo } = user.skills;` This line of code destructures the nested `skills` object directly.
    
4. `console.log(`My HTML Skill Progress Is{skillOne}`); console.log(`My CSS Skill Progress Is{skillTwo}`);` These lines of code print the values of the variables `skillOne` and `skillTwo` to the console.
    


______________________________________________________________________


## Related : 

- [[Destructuring Objects Part 1]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-01-14 09:35 
  
  
   ## Modification date :
   
   Sunday 14th January 2024 09:36:13