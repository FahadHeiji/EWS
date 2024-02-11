
### Status: #week-13

### Tags: #EWS  , #Programming 


## History API

- The History API allows manipulation of the browser session history, that is the pages visited in the tab or frame that the current page is loaded in.

## Properties

- `length`: This property returns the number of elements in the session history, including the currently loaded page. For example, for a page loaded in a new tab this property returns 1.

## Methods

- `back()`: This method loads the previous URL in the history list. This is the same as clicking the browser's Back button. It does not take any parameters.
- `forward()`: This method loads the next URL in the history list. This is the same as clicking the browser's Forward button. It does not take any parameters.
- `go(Delta)`: This method loads a specific page from the session history. You can either go forward or backward relative to the current page. You specify the required page with a relative integer argument. For example, you can use `history.go(-1)` to go back one page.

## Advanced Knowledge

- `pushState()`: This method adds a state to the browser's session history stack.
- `replaceState()`: This method modifies the current history entry, replacing it with the state passed in the parameters.

## Example

```javascript
console.log(history);
````

These notes cover the basics of the History API in the Browser Object Model (BOM) and provide an example of how to use its properties and methods in JavaScript. Remember, the History API is useful for managing the state of your web application. 


______________________________________________________________________


## Related : 

- [[What Is BOM]].
- [[Window Location Object]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-01-09 11:14 
  
  
   ## Modification date :
   
   Tuesday 9th January 2024 11:14:31