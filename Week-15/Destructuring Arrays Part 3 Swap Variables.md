
### Status: #week-15

### Tags: #EWS  , #Programming 


### Swapping Variables using Array Destructuring in JavaScript

In JavaScript, array destructuring can also be used to swap the values of two variables.

Example:

```javascript
let book = "Video";
let video = "Book";

// Swapping variables using array destructuring
[book, video] = [video, book];

console.log(book); // Outputs: Book
console.log(video); // Outputs: Video
````

In this code, the `book` and `video` variables are swapped using array destructuring. The destructuring assignment swaps the values of the variables.

In your code, you have two variables `book` and `video`. You then use array destructuring to swap the values of these variables.

Here’s what happens step by step:

1. `[book, video] = [video, book];` This line of code uses array destructuring to swap the values of the variables `book` and `video`. The variable `book` is assigned the value of `video` and `video` is assigned the value of `book`.
    
2. `console.log(book); console.log(video);` These lines of code print the values of the variables `book` and `video` to the console.
    

So, in this example, after the destructuring line, `book` will be “Book” and `video` will be “Video”. This demonstrates how array destructuring can be used to swap the values of two variables in JavaScript.

Here’s an organized note on this example:





______________________________________________________________________


## Related : 

- [[Destructuring Arrays Part 2]].

## Reference: 

1.  


---

  ## Creation date: 
  
  <%tp.file.creation_date()%> 
  
  
   ## Modification date :
   
   <%tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss")%>