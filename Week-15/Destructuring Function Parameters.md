
### Status: #week-15

### Tags: #EWS  , #Programming 


### Destructuring Function Parameters in JavaScript

Destructuring can be used in function parameters to extract values from objects passed as arguments.

Example:

```javascript
const user = {
  theName: "Osama",
  theAge: 39,
  skills: {
    html: 70,
    css: 80,
  },
};

// Destructuring function parameters
function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
  console.log(`Your Name Is ${n}`); // Outputs: Your Name Is Osama
  console.log(`Your Age Is ${a}`); // Outputs: Your Age Is 39
  console.log(`Your CSS Skill Progress Is ${c}`); // Outputs: Your CSS Skill Progress Is 80
}

showDetails(user);
````

In this code, the `showDetails` function takes an object as a parameter and destructures it to extract the properties `theName`, `theAge`, and `css`. The values of these properties are logged to the console.



In your code, you have an object `user` with several properties, including a nested `skills` object. You then pass this object as an argument to the `showDetails` function, which uses object destructuring in its parameters to extract the values of these properties.

Here’s what happens step by step:

1. `function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {...}` This line of code defines a function `showDetails` that takes one parameter. This parameter is expected to be an object, and it is destructured directly in the function definition. The properties `theName`, `theAge`, and `css` (nested within `skills`) are extracted and assigned to new variables `n`, `a`, and `c`, respectively.
    
2. `console.log(`Your Name Is{n}`); console.log(`Your Age Is{a}`); console.log(`Your CSS Skill Progress Is ${c}`);` These lines of code print the values of the variables `n`, `a`, and `c` to the console.
    

So, in this example, `n` will be “Osama”, `a` will be 39, and `c` will be 80. This demonstrates how object destructuring can be used in function parameters in JavaScript to extract values from objects and assign them to new variables.

______________________________________________________________________


## Related : 

- [[Destructuring Objects Part 2]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-01-14 09:45 
  
  
   ## Modification date :
   
   Sunday 14th January 2024 09:45:35