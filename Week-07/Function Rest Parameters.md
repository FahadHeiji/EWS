
### Status: #week-07

### Tags: #EWS  , #Programming 


# Function

## Rest Parameters
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array. This is particularly useful when you don't know in advance how many arguments will be passed to the function.

- **Only One Allowed**: You can only have one rest parameter in a function.
- **Must Be Last Element**: The rest parameter must be the last parameter in the function definition.

## Practical Example
Here's a practical example of a function that uses a rest parameter:
```javascript
function calc(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]; // result = result + numbers[i]
  }
  return `Final Result Is ${result}`;
}

console.log(calc(10, 20, 10, 30, 50, 30));
````

In this example, `calc` is a user-defined function that takes a rest parameter `numbers`. It calculates the sum of all numbers passed to the function and returns the result.


______________________________________________________________________


## Related : 

- [[Function Default Parameters]].
- [[Function Advanced Examples]].

## Reference: 

1.  


---

  ## Creation date: 
  
  <%tp.file.creation_date()%> 
  
  
   ## Modification date :
   
   <%tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss")%>