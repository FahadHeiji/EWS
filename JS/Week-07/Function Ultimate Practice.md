
### Status: #week-07

### Tags: #EWS  , #Programming 

# Function Advanced Practice

This function `showInfo` demonstrates the use of several JavaScript concepts including parameters, default parameters, rest parameters, loops, and conditions.

## Parameters
The function `showInfo` takes five parameters: `us`, `ag`, `rt`, `show`, and `...sk`.

## Default Parameters
The parameters `us`, `ag`, `rt`, and `show` have default values. If no arguments are passed when the function is called, these parameters will take their default values.

## Rest Parameters
The `...sk` parameter is a rest parameter. It will contain an array of all arguments passed to the function after the first four arguments.

## Loop
The function does not explicitly contain a loop, but the `join` method, which is used on the `sk` array, internally uses a loop to concatenate the array elements.

## Condition
The function contains two conditional (`if`) statements. The first `if` statement checks whether `show` is equal to "Yes". If it is, the function checks whether the `sk` array has any elements. Depending on the results of these conditions, the function writes different information to the document.

## Practical Example
Here's a practical example of how to call the function:
```javascript
showInfo("Osama", 38, 20, "No", "Html", "CSS");
````

In this example, the function is called with the arguments “Osama”, 38, 20, “No”, “Html”, and “CSS”. The function will write a welcome message, the age, the hour rate, and the skills (if `show` is “Yes”) to the document.


______________________________________________________________________


## Related : 

- 

## Reference: 

1.  


---

  ## Creation date: 
  
  <%tp.file.creation_date()%> 
  
  
   ## Modification date :
   
   <%tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss")%>