
### Status: #week-02  

### Tags: #JS, #EWS 

## Topic 1: 

The unary plus (`+`) and unary negation (`-`) operators are used in JavaScript to convert values to numbers and to negate numeric values, respectively. Let's explore their functionality:

**Unary Plus (`+`):** The unary plus operator attempts to convert its operand into a numeric value.

```javascript
let numString = "42";
let number = +numString;

console.log(number); // Output: 42 (converted to a number)
console.log(typeof number); // Output: "number"
```

In this example, the unary plus operator is applied to the `numString` variable, which is a string containing the value "42". The unary plus operator converts the string to a numeric value, resulting in `number` being assigned the value `42`.

**Unary Negation (`-`):** The unary negation operator negates the numeric value of its operand.

```javascript
let num = 10;
let negatedNum = -num;

console.log(negatedNum); // Output: -10 (negation of 10)
```

Here, the unary negation operator is used to negate the value of the `num` variable, resulting in `negatedNum` being assigned the value `-10`.

It's important to note that the unary plus and unary negation operators only work on values that can be converted to numbers. If the operand cannot be converted to a numeric value, the result will be `NaN` (Not-a-Number).

```javascript
let invalidValue = "Hello";
let convertedValue = +invalidValue;

console.log(convertedValue); // Output: NaN (invalid conversion to number)
```

In this case, the `invalidValue` variable contains the string "Hello", which cannot be converted to a numeric value. As a result, `convertedValue` is assigned `NaN`.

Keep in mind that the unary plus and unary negation operators are applied as individual operators to a single operand, unlike the addition and subtraction operators.

.............................................................................

1. **Number:** Represents numeric values.

   ````javascript
   let age = 25;
   let price = 9.99;
   ```

   ````

1. **String:** Represents textual data enclosed in single quotes or double quotes.

   ````javascript
   let name = "John Doe";
   let message = 'Hello, World!';
   ```

   ````

1. **Boolean:** Represents a logical value, either `true` or `false`.

   ````javascript
   let isLogged = true;
   let hasPermission = false;
   ```

   ````

1. **Null:** Represents the intentional absence of any object value.

   ````javascript
   let data = null;
   ```

   ````

1. **Undefined:** Represents a declared variable that has not been assigned a value.

   ````javascript
   let value;
   let result = undefined;
   ```

   ````

1. **Symbol:** Represents a unique identifier used in objects, often created using the `Symbol()` function.

   ````javascript
   let id = Symbol("unique id");
   ```

   ````

These examples demonstrate the basic usage of each primitive type in JavaScript. It's important to note that JavaScript also has other non-primitive types, such as objects and arrays, which provide more complex data structures and functionalities.

______________________________________________________________________


## Related : 

- [[JavaScript/EWS/Week-02/Arithmetic Operators]].

## Reference: 

1.  [Lesson - 19 On YT](https://www.youtube.com/watch?v=liNl80DgHr8).


---

  ## Creation date: 
  
  2023-08-27 12:47 
  
  
   ## Modification date :
   
   Sunday 27th August 2023 12:55:29