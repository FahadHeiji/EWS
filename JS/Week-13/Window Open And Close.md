
### Status: #week-13

### Tags: #EWS  , #Programming 


## Window Methods

- `open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])`: Opens a new browser window or a new tab. This method creates a new Window object.
- `close()`: Closes the current window.

## Window Features

- `left [Num]`: Specifies the left position in pixels.
- `top [Num]`: Specifies the top position in pixels.
- `width [Num]`: Specifies the width in pixels.
- `height [Num]`: Specifies the height in pixels.
- `menubar [yes || no]`: Specifies whether to display the menu bar.

## Examples

```javascript
setTimeout(function () {
  window.open("", "_self", "", false);
}, 2000);

setTimeout(function () {
  window.open("https://google.com", "_blank", "width=400,height=400,left=200,top=10");
}, 2000);
````

These notes cover the basics of the Window methods in the Browser Object Model (BOM) and provide examples of how to use `open()` and `close()` in JavaScript. Remember, these methods are useful for managing browser windows.

### Additional Information:

- The `window.open()` method can accept four optional parameters: URL, window name or target attribute, window features, and history replace. If no URL is specified, a new window with about:blank is opened.
- The `window.close()` method can only close windows opened by JavaScript using the `window.open()` method.
- If you specify a target attribute with the `window.open()` method, the new window replaces the current window if the name is the same. If the name does not exist, a new window is opened.
- The window features parameter in the `window.open()` method is a list of items separated by commas. Each item consists of a feature name and a value, separated by an equals sign (like `menubar=yes`).
- The `setTimeout()` method is used to execute the `window.open()` method after a specified number of milliseconds. This can be useful for opening new windows based on user interaction, or after a specific interval.
- Please note that modern web browsers often block pop-up windows that are opened without a direct user interaction, like a click event. So, the `window.open()` method might not work as expected if it's not triggered by a user action.

______________________________________________________________________


## Related : 

- [[What Is BOM]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-01-09 11:08 
  
  
   ## Modification date :
   
   Tuesday 9th January 2024 11:14:00