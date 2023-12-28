
### Status: #week-01  

### Tags: #JS, #EWS 

## Topic 1: Alert

- The `window.alert()` method is a built-in function in JavaScript that displays a dialog box with a specified message and an OK button. 

- It is primarily used for displaying <span style="color:#ebcb00">simple pop-up messages or notifications</span> to the user.

- While `window.alert()` can be useful for simple notifications, <span style="color:#f00000">it is not typically recommended</span> for more complex or interactive user interfaces. For those cases, other methods like manipulating the [[DOM]] or using [[Frameworks]] are usually preferred.

#### Examples:

```javascript
// Displays an alert box with the message "Hello, world!"

window.alert("Hello, world!"); 
````

## Topic 2:  document write

- The `document.write()` method is a built-in function in JavaScript that allows you <span style="color:#ebcb00">to dynamically write content into an HTML document.</span> It is primarily used <span style="color:#ebcb00">to output text or HTML code directly to the webpage</span>.

- Due to these limitations and the availability of more modern methods for manipulating the DOM[[DOM]], such as `innerHTML` or creating elements dynamically, `document.write()` is generally <span style="color:#f00000">not recommended for complex web applications</span>. It is more <span style="color:#00b050">commonly used for simple scripts or quick demonstrations</span>.

#### Examples:

```javascript
// Writes "Hello, world!" directly onto the webpage
document.write("Hello, world!"); 
```

## Topic 3: Console log

- The `console.log()` method is a built-in function in JavaScript that <span style="color:#ebcb00">allows you to log information or messages to the browser's console</span>. It is primarily used <span style="color:#00b050">for debugging and troubleshooting purposes</span>.

- The `console.log()` method is commonly used during development to check the values of variables, track the flow of the program, or debug issues by logging relevant information. It is a convenient way to inspect and analyze the behavior of your code without modifying the actual webpage.

- Using `console.log()` statements strategically throughout your code can help you understand how different parts of your program are executing and identify any errors or unexpected behavior. However, it's important to note that `console.log()` statements should be removed or disabled in production code to avoid unnecessary output and potential performance impacts.


#### Examples:

```javascript
// Logs "Hello, world!" to the console
console.log("Hello, world!"); 
```

## Questions and Areas to Review

- \[Question 1\]: Why do need to use document.write while we can write on html file?

A: <span style="color:#ebcb00">
`document.write()` can be used for dynamic content generation, quick prototyping, or script embedding</span>.



## Personal Insights and Summary

- Overall, `console.log()` is a valuable tool for developers to log information and facilitate the debugging process during web development.

- - `document.write()` is used to dynamically write content directly to an HTML document.
- `window.alert()` displays a pop-up dialog box with a message.
- They have specific use cases but are not recommended for complex web applications.
- `document.write()` can overwrite the entire document and has timing limitations.
- `window.alert()` blocks code execution until the user responds.
- Modern methods are preferred for complex web applications.

______________________________________________________________________


## Related : 

- [[DOM]].
- [[Frameworks]].

## Reference: 

1.  [Lesson - 07 On YT](https://www.youtube.com/watch?v=FYRypqj4Epw).


---

  ## Creation date: 
  
  2023-08-23 13:12 
  
  
   ## Modification date :
   
   Wednesday 23rd August 2023 13:12:31