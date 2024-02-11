
### Status: #week-02

### Tags: #JS, #EWS 

## Topic 1:  comparison of `var`, `let`, and `const` 

1. **Scope:**

   - `var`: Variables declared with `var` have function scope or global scope, depending on where they are declared. They are hoisted to the top of their scope during the compilation phase, which means they can be accessed before they are declared.

   - `let`: Variables declared with `let` have block scope, meaning they are limited to the block in which they are defined (e.g., inside a loop or an if statement). They are not hoisted and can only be accessed after they are declared.

   - `const`: Like `let`, variables declared with `const` also have block scope. However, `const` variables are constants and cannot be reassigned after they are assigned a value. They must be assigned a value when declared.

1. **Reassignment:**

   - `var`: Variables declared with `var` can be reassigned multiple times within their scope.

   - `let`: Variables declared with `let` can be reassigned within their scope.

   - `const`: Variables declared with `const` cannot be reassigned once they are assigned a value. They are read-only.

1. **Redeclaration:**

   - `var`: Variables declared with `var` can be redeclared within their scope without causing an error.

   - `let`: Variables declared with `let` cannot be redeclared in the same block. Redeclaring a variable with `let` in the same block will result in an error.

   - `const`: Variables declared with `const` also cannot be redeclared in the same block. Redeclaring a variable with `const` in the same block will result in an error.

1. **Temporal Dead Zone (TDZ):**

   - `let` and `const` variables are subject to the Temporal Dead Zone (TDZ). This means that if you try to access them before they are declared, you will get a ReferenceError. They are not hoisted to the top of their scope like `var` variables.

1. **Global Object:**

   - `var` variables are added as properties to the global object (`window` in browsers or `global` in Node.js).

   - `let` and `const` variables are not added as properties to the global object.

It is generally recommended to use `let` and `const` instead of `var` due to their block scoping, which helps prevent unintended scope-related issues. Additionally, `const` should be used when the value of a variable should not be changed.

#### Examples:

```javascript
// Example 1: var
function example1() {
  var x = 10;
  if (true) {
    var x = 20; // Same variable 'x' as the outer scope
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 20
}

example1();

// Example 2: let
function example2() {
  let y = 10;
  if (true) {
    let y = 20; // Different variable 'y' from the outer scope
    console.log(y); // Output: 20
  }
  console.log(y); // Output: 10
}

example2();

// Example 3: const
function example3() {
  const z = 10;
  if (true) {
    const z = 20; // Different variable 'z' from the outer scope
    console.log(z); // Output: 20
  }
  console.log(z); // Output: 10
}

example3();

// Example 4: Temporal Dead Zone (TDZ)
function example4() {
  console.log(a); // Output: ReferenceError: a is not defined
  let a = 10;
}

example4();

// Example 5: Global object
var globalVar = "I'm a global variable";
let localVar = "I'm a local variable";

console.log(window.globalVar); // Output: "I'm a global variable"
console.log(window.localVar);  // Output: undefined
````

## Topic 2: variable scope drama

The "variable scope drama" refers to issues and challenges that can arise when dealing with variable scope in JavaScript. It often arises due to the differences in scoping behavior between `var`, `let`, and `const` variables. Here are some common scenarios that can lead to scope-related drama:

1. **Function-level Scope with `var`:** Variables declared with `var` have function-level scope, which means they are accessible throughout the entire function, regardless of block boundaries. This can lead to unintended variable sharing and overwriting.

```javascript
function example() {
  if (true) {
    var x = 10;
  }
  console.log(x); // Output: 10 (even though it was declared inside the if block)
}
example();
```

In this example, the variable `x` is declared inside the `if` block, but it is accessible outside of the block due to function-level scope.

2. **Block-level Scope with `let` and `const`:** Variables declared with `let` and `const` have block-level scope, meaning they are confined to the block in which they are declared. This can prevent unintended variable access and maintain better code clarity.

```javascript
function example() {
  if (true) {
    let y = 20;
    const z = 30;
  }
  console.log(y); // Output: ReferenceError: y is not defined
  console.log(z); // Output: ReferenceError: z is not defined
}
example();
```

In this example, the variables `y` and `z` are declared inside the `if` block using `let` and `const`, respectively. They are not accessible outside of the block due to block-level scope.

3. **Variable Shadowing:** Variable shadowing occurs when a variable in an inner scope has the same name as a variable in an outer scope. This can lead to confusion and unexpected behavior when accessing or modifying variables.

```javascript
var x = "global";

function example() {
  var x = "local";
  console.log(x); // Output: local
}

example();
console.log(x); // Output: global
```

In this example, the variable `x` is declared both globally and locally inside the `example()` function. The local `x` shadows the global `x` within the function scope.

To avoid scope-related drama, it is generally recommended to use `let` and `const` for block-scoped variables and follow best practices for variable naming and scoping. Understanding the scope rules and differences between `var`, `let`, and `const` helps in writing more predictable and maintainable code.

## Questions and Areas to Review

- \[Question 1\]: 


- \[Question 2\]: 


- \[Question 3\]: 



## Personal Insights and Summary



______________________________________________________________________


## Related : 

- [[Variables Introduction]].
- [[Identifiers Name Conventions And Rules]].

## Reference: 

1.  [Lesson - 13 On YT](https://www.youtube.com/watch?v=gyWwPypW4OU).


---

  ## Creation date: 
  
  2023-08-27 09:01 
  
  
   ## Modification date :
   
   Sunday 27th August 2023 09:57:09