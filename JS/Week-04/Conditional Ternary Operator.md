
### Status: #week-04

### Tags: #EWS  , #Programming 

## JavaScript Conditional (Ternary) Operator

The conditional (ternary) operator is the only JavaScript operator that takes three operands. This operator is frequently used as a shortcut for the `if` statement.

### Syntax

```javascript
condition ? exprIfTrue : exprIfFalse
```

### Parameters

- `condition`: An expression whose value is used as a condition.
- `exprIfTrue`: An expression which is executed if the `condition` evaluates to a truthy value (one which equals or can be converted to `true`).
- `exprIfFalse`: An expression which is executed if the `condition` is falsy (that is, has a value which can be converted to `false`).

### Examples

```javascript
let age = 15;

// Using ternary operator
let beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage); // Output: "Juice"

// Equivalent code using an if statement
let beverage;
if (age >= 21) {
  beverage = "Beer";
} else {
  beverage = "Juice";
}
console.log(beverage); // Output: "Juice"
```

In the example above, if the `age` is greater than or equal to `21`, the `beverage` is set to `"Beer"`. Otherwise, it’s set to `"Juice"`. The ternary operator provides a shorter syntax for this type of condition.
______________________________________________________________________


## Related : 

- [[If Conditions]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-12 16:06 
  
  
   ## Modification date :
   
   Tuesday 12th December 2023 16:26:48