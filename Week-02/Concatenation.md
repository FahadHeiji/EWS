
### Status: #week-02  

### Tags: #JS, #EWS 

## Topic 1: 

Concatenation is the process of combining multiple strings together to create a single string. In JavaScript, string concatenation is typically performed using the `+` operator. When the `+` operator is used between two strings, it concatenates them by joining the characters of the second string to the end of the first string. Here's an example:

```javascript
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: John Doe
```

In this example, the variables `firstName` and `lastName` store individual strings. The `+` operator is used to concatenate them along with a space character (`" "`) in between, resulting in the full name being stored in the `fullName` variable.

You can also concatenate strings with other data types, such as numbers, by converting them to strings using the `toString()` method or utilizing implicit type conversion. Here's an example:

```javascript
let message = "The number is: " + 42;
console.log(message); // Output: The number is: 42
```

In this case, the number `42` is implicitly converted to a string and concatenated with the preceding string.

Another approach to concatenation is using template literals (also known as template strings) introduced in ECMAScript 2015 (ES6). Template literals allow you to embed expressions and variables within backticks (\`...\`) and use placeholders `${...}` for variable substitution. Here's an example:

```javascript
let firstName = "John";
let lastName = "Doe";
let fullName = `${firstName} ${lastName}`;
console.log(fullName); // Output: John Doe
```

Template literals provide a more convenient and readable way to perform string concatenation, especially when dealing with complex expressions or multiline strings.

In summary, concatenation in JavaScript involves combining strings using the `+` operator or utilizing template literals to create dynamic and expressive strings.


______________________________________________________________________


## Related : 

- [[String Syntax , Character Escape Sequences]].

## Reference: 

1.  [Lesson - 15 On YT](https://www.youtube.com/watch?v=ikK5I2gcrag).


---

  ## Creation date: 
  
  2023-08-27 10:10 
  
  
   ## Modification date :
   
   Sunday 27th August 2023 10:15:34