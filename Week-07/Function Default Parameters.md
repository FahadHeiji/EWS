
### Status: #week-07

### Tags: #EWS  , #Programming 


# Function

## Default Function Parameters
Default function parameters allow formal parameters to be initialized with default values if no value or `undefined` is passed. 

## Function Parameters Default [Undefined]
In JavaScript, function parameters default to `undefined`. However, it's often useful to set a different default value. This was done in the past using a conditional statement or the logical OR operator.

## Old Strategies [Condition + Logical Or]
Here are two old strategies to set default values:
- **Conditional Statement**: 

  ```javascript
  if (age === undefined) {
    age = "Unknown";
  }
```

- **Logical OR Operator**:
    
    ```javascript
    age = age || "Unknown";
    ```
    

## ES6 Method

As of ES6, you can set default function parameters directly in the function declaration:

```javascript
function sayHello(username = "Unknown", age = "Unknown") {
  return `Hello ${username} Your Age Is ${age}`;
}
```

In this example, `sayHello` is a user-defined function that takes two parameters: `username` and `age`. If no arguments are passed when the function is called, the parameters default to “Unknown”.

______________________________________________________________________


## Related : 

- [[Function Advanced Examples]].

## Reference: 

1.  


---

  ## Creation date: 
  
  <%tp.file.creation_date()%> 
  
  
   ## Modification date :
   
   <%tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss")%>