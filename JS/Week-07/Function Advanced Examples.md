
### Status: #week-07

### Tags: #EWS  , #Programming 




# Function Advanced Examples

## Conditional Function
Here's an example of a function that uses a conditional statement:

```javascript
function sayHello(userName, age) {
  if (age < 20) {
    console.log(`App is Not Suitable For You`);
  } else {
    console.log(`Hello ${userName} Your Age is ${age}`);
  }
}

sayHello("Osama", 38);
sayHello("Sayed", 40);
sayHello("Ali", 18);
````

In this example, `sayHello` is a user-defined function that takes two parameters, `userName` and `age`. If the `age` is less than 20, it logs a message stating that the app is not suitable. Otherwise, it logs a greeting with the user’s name and age.

## Looping Function

Here’s an example of a function that uses a loop and a conditional statement:

```javascript
function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}

generateYears(1982, 2021, 2020);
```

In this example, `generateYears` is a user-defined function that takes three parameters: `start`, `end`, and `exclude`. It generates a list of years from `start` to `end`, excluding the `exclude` year.

______________________________________________________________________


## Related : 

- [[Function Intro And Basic Usage]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-18 14:15 
  
  
   ## Modification date :
   
   Monday 18th December 2023 16:15:44