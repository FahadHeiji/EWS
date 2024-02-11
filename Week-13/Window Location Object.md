
### Status: #week-13

### Tags: #EWS  , #Programming 


## Location Object

- The Location object contains information about the current URL.
- It is part of the Window object and is accessed through the `window.location` property.

## Properties and Methods

- `href`: Gets or sets the entire URL. Can be used to navigate to a different URL.
- `host`: Gets the host name and port (if specified) of a URL.
- `hash`: Gets the anchor portion of a URL, including the `#` sign.
- `protocol`: Gets the protocol of a URL.
- `reload()`: Reloads the current document.
- `replace()`: Replaces the current document with a new one.
- `assign()`: Loads a new document.

## Examples

```javascript
console.log(location);
console.log(location.href);

 location.href = "https://google.com";
 location.href = "/#sec02";
 location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";

 console.log(location.host);
 console.log(location.hostname);

 console.log(location.protocol);

 console.log(location.hash);
````

These notes cover the basics of the Location object in the Browser Object Model (BOM) and provide examples of how to use its properties and methods in JavaScript. Remember, the Location object is useful for getting information about the current page or navigating to a new page.


### Additional Information:

- The `location.href` property is most often used for navigation. It can be set to a new URL, which loads that URL into the browser window.
- The `location.reload()` method is used to refresh the current page.
- The `location.replace()` method replaces the current document with a new one. The difference between this method and `assign()`, is that `replace()` removes the URL of the current document from the document history, meaning that it is not possible to use the "back" button to navigate back to the original document.
- The `location.assign()` method loads a new document, just like the `href` property. The difference is that `assign()` does not replace the original document in the history list, so you can use the "back" button to navigate back to the original document.
- The `location.hash` property returns the anchor portion of a URL, including the `#` sign. This can be useful for working with anchor links within a document.
- The `location.protocol` property returns the web protocol used (http: or https:). This can be useful for ensuring secure data transmission.
- The `location.host` and `location.hostname` properties return the domain name of the web host. The `host` property includes the port number (if one is specified), while the `hostname` property does not. This can be useful for ensuring that requests are being sent to the correct server. 


______________________________________________________________________


## Related : 

- [[What Is BOM]].

## Reference: 

1.  


---

  ## Creation date: 
  
  <%tp.file.creation_date()%> 
  
  
   ## Modification date :
   
   <%tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss")%>