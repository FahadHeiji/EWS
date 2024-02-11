
### Status: #week-13

### Tags: #EWS  , #Programming 


## Dialog Boxes
- `alert(Message)`: Displays a message box with an OK button. It does not require a response from the user.
- `confirm(Message)`: Displays a message box with OK and Cancel buttons. It requires a response from the user and returns a Boolean value.
- `prompt(Message, Default Message)`: Displays a message box with a text input field and OK and Cancel buttons. It is used to collect data from the user.

## Examples
```javascript
 alert("Test");
 console.log("Test");

 let confirmMsg = confirm("Are You Sure?");
 console.log(confirmMsg);

 if (confirmMsg === true) {
   console.log("Item Deleted");
 } else {
  console.log("Item Not Deleted");
 }

let promptMsg = prompt("Good Day To You?", "Write Day With 3 Characters");
console.log(promptMsg);
````

These notes cover the basics of dialog boxes in the Browser Object Model (BOM) and provide examples of how to use `alert`, `confirm`, and `prompt` in JavaScript. Remember, these methods are useful for interacting with users and collecting their inputs. 

______________________________________________________________________


## Related : 

- [[What Is BOM]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-01-09 09:08 
  
  
   ## Modification date :
   
   Tuesday 9th January 2024 10:00:25