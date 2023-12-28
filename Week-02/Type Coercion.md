
### Status: #week-02  

### Tags: #JS, #EWS 

## Topic 1: 

Type coercion in JavaScript refers to the automatic conversion of one data type to another data type when performing operations or comparisons. It occurs when operands of different types are involved in an operation or comparison.

JavaScript is a dynamically typed language, which allows variables to hold values of different types. Type coercion helps JavaScript handle situations when different types are encountered.

Here are a few examples of type coercion in JavaScript:

**String and Number Concatenation:**

```javascript
let num = 42;
let str = "The answer is: " + num;

console.log(str); // Output: "The answer is: 42"
```

In this example, the number `42` is implicitly coerced into a string and concatenated with the string `"The answer is: "`, resulting in the final string `"The answer is: 42"`.

**Numeric and String Operations:**

```javascript
let num = 10;
let str = "5";
let result = num - str;

console.log(result); // Output: 5
```

In this case, the string `"5"` is implicitly coerced into a number before the subtraction operation. The operation `num - str` performs numeric subtraction, resulting in the value `5`.

**Comparison Operators:**

```javascript
let num = 20;
let str = "10";
console.log(num > str); // Output: true
```

When using comparison operators like `>` or `<`, JavaScript performs type coercion to compare values of different types. In this example, the string `"10"` is implicitly coerced into a number before the comparison, and `num > str` evaluates to `true`.

Type coercion can be useful in some cases, simplifying code and allowing flexibility in operations involving different types. However, it can also lead to unexpected behavior if not handled carefully. It's important to be aware of how type coercion works in JavaScript and ensure that the desired behavior is achieved in your code.

______________________________________________________________________


## Related : 

- [[Unary Plus And Negation Operators]].
- [[JavaScript/EWS/Week-02/Arithmetic Operators]].
- [[Concatenation]].

## Reference: 

1.  [Lesson - 20 On YT](https://www.youtube.com/watch?v=YFUVqq68sZU).


---

  ## Creation date: 
  
  2023-08-27 12:56 
  
  
   ## Modification date :
   
   Sunday 27th August 2023 13:04:34