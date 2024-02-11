
### Status: #week-02  

### Tags: #JS, #EWS 

## Topic 1:  What's Variables

- Variables in JavaScript are containers that hold values. They are used to store and manipulate data within a program. Variables can be declared using the `var`, `let`, or `const` keywords.
	- - `var`: Variables declared with `var` have function scope or global scope, depending on where they are declared. They can be reassigned and redeclared within their scope. However, `var` variables are subject to hoisting, which means they are moved to the top of their scope during the compilation phase.
    
	- `let`: Variables declared with `let` have block scope, meaning they are limited to the block in which they are defined. They can be reassigned within their scope, but not redeclared in the same block.
	    
	- `const`: Variables declared with `const` also have block scope, but they are constants, meaning their value cannot be changed once assigned. They must be assigned a value when declared and cannot be reassigned or redeclared.


- 

#### Examples:

```javascript
var x = 5;     // Declaring a variable 'x' with the value 5 using 'var'
let y = 10;    // Declaring a variable 'y' with the value 10 using 'let'
const z = 15;  // Declaring a constant variable 'z' with the value 15 using 'const'

x = 7;         // Reassigning the value of 'x' to 7
y = 12;        // Reassigning the value of 'y' to 12

console.log(x);  // Output: 7
console.log(y);  // Output: 12
console.log(z);  // Output: 15
````

## Topic 2: Global variables

- Global variables in JavaScript are variables declared outside of any function or block, and they have global scope. They can be accessed from anywhere in the code. "id" variables, on the other hand, are not a specific type of variable but rather a convention for variables that store unique identifiers, such as element IDs in HTML or database record IDs.

#### Examples:

```javascript
// Example 1
var globalVariable = "I'm a global variable";

function myFunction() {
  console.log(globalVariable);  // Accessing the global variable inside a function
}

myFunction();  // Output: "I'm a global variable"

// id variable:

var element = document.getElementById("myElementId");
```

## Questions and Areas to Review

- \[Question 1\]: Why we using Variables?

A: Variables are an essential part of JavaScript programming as they allow developers to store and manipulate data dynamically during the execution of a program.


- \[Question 2\]:  What's the different between  Loosely typed languages VS Strongly type Languages ?

A: Loosely typed and strongly typed are terms used to describe the type system of a programming language. They refer to how strictly the language enforces type constraints and how implicit or explicit type conversions are handled.

1. **Loosely Typed**: In a loosely typed language, variables can hold values of different types, and the language allows implicit type conversions. This means that variables can be reassigned to values of different types without explicitly converting them. The language automatically converts the types as needed.

   JavaScript is an example of a loosely typed language. For instance, you can assign a number to a variable and then reassign it to a string without any explicit type conversion:

   ````javascript
   let x = 10;       // x is a number
   x = "Hello";      // x is now a string
   ```

   In this example, the variable `x` is initially assigned a number, but it can later be reassigned to a string without any explicit type declaration or conversion.

   ````

1. **Strongly Typed**: In a strongly typed language, variables have specific types, and the language enforces strict type checking. Type conversions must be explicitly performed, and incompatible types typically result in errors or exceptions.

   C++ and Java are examples of strongly typed languages. In these languages, you need to explicitly declare the type of a variable, and assigning a value of a different type or performing incompatible operations will result in a compilation error unless you explicitly convert the types.

   ````java
   int x = 10;       // x is an integer
   x = "Hello";      // Error: Incompatible types
   ```

   In this Java example, the variable `x` is declared as an integer, and assigning a string to it would result in a compilation error due to the incompatible types.

   ````

In summary, loosely typed languages allow implicit type conversions and variables can hold values of different types, while strongly typed languages enforce strict type checking and require explicit type conversions.


- \[Question 3\]: 



## Personal Insights and Summary



______________________________________________________________________


## Related : 

- 

## Reference: 

1.  [Lesson - 11 On YT](https://www.youtube.com/watch?v=NgLgguhL2to&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=11).


---

  ## Creation date: 
  
  2023-08-27 08:38 
  
  
   ## Modification date :
   
   Sunday 27th August 2023 08:52:13