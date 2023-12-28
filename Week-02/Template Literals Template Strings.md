
### Status: #week-02  

### Tags: #JS, #EWS 

## Topic 1: 

Template literals, also known as template strings, are a feature introduced in ECMAScript 2015 (ES6) that provide a more convenient and expressive way to work with strings in JavaScript. Template literals are created using backticks (\`...\`) instead of single quotes or double quotes. They support several features that enhance string manipulation and readability.

Here are the main features and syntax of template literals:

1. **String Interpolation:** Template literals allow you to embed expressions and variables directly within the string using placeholders `${...}`. These placeholders are replaced with the evaluated values of the expressions.

```javascript
let name = "Alice";
let age = 25;

let message = `Hello, my name is ${name} and I'm ${age} years old.`;
console.log(message);
// Output: Hello, my name is Alice and I'm 25 years old.
```

In this example, the variables `name` and `age` are interpolated into the template literal using `${...}`. The expressions `${name}` and `${age}` are evaluated and replaced with their respective values.

2. **Multiline Strings:** Template literals can span multiple lines, making it easier to create multiline strings without the need for escape characters or concatenation.

```javascript
let multiline = `
  This is a
  multiline
  string.
`;

console.log(multiline);
/*
Output:
  This is a
  multiline
  string.
*/
```

The multiline string is created by enclosing the content within backticks (\`...\`). The line breaks and indentation within the string are preserved.

3. **Expression Evaluation:** Template literals can contain any valid JavaScript expression within `${...}`. This allows you to perform calculations, call functions, and include complex expressions directly within the string.

```javascript
let num1 = 10;
let num2 = 5;

let result = `${num1} + ${num2} = ${num1 + num2}`;
console.log(result); // Output: 10 + 5 = 15
```

In this example, the expression `${num1 + num2}` is evaluated and the result is included in the template literal.

4. **Tagged Templates:** Template literals can be used with a tag function, which is a function that processes the template literal. The tag function is invoked with the template literal as its argument and can perform custom logic on the interpolated values.

```javascript
function highlight(strings, ...values) {
  let result = "";
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < values.length) {
      result += `<strong>${values[i]}</strong>`;
    }
  }
  return result;
}

let name = "Alice";
let age = 25;

let message = highlight`Hello, my name is ${name} and I'm ${age} years old.`;
console.log(message);
// Output: Hello, my name is <strong>Alice</strong> and I'm <strong>25</strong> years old.
```

In this example, the `highlight` function is a tag function that wraps interpolated values with `<strong>` tags. The template literal is passed to the `highlight` function, and the processed string is returned.

Template literals provide a more flexible and readable way to work with strings in JavaScript, especially when dealing with dynamic content, multiline strings, and complex expressions. They are widely used in modern JavaScript development.

## Questions and Areas to Review

- \[Question 1\]: why we using Template Literals Template Strings ?

A:  Template literals, or template strings, offer a shorter and more concise syntax for working with strings in JavaScript. 

They allow you to directly embed expressions and variables within a string using `${...}` placeholders, eliminating the need for manual concatenation or escape characters. 

Template literals also support multiline strings without the need for concatenation or line break characters. 

Overall, template literals help reduce the amount of code needed for string manipulation and make it easier to read and write string-related operations.


______________________________________________________________________


## Related : 

- [[String Syntax , Character Escape Sequences]].
- [[Identifiers Name Conventions And Rules]].
- [[Concatenation]].

## Reference: 

1.  [Lesson - 16 On YT](https://www.youtube.com/watch?v=8KjqKNlvVXk).


---

  ## Creation date: 
  
  2023-08-27 10:16 
  
  
   ## Modification date :
   
   Sunday 27th August 2023 11:01:34