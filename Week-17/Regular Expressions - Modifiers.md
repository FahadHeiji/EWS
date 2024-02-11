
### Status: #week-17

### Tags: #EWS  , #Programming 


In JavaScript, **modifiers** are used with regular expressions to change the way a search is performed. [Here are some commonly used modifiers](https://www.w3schools.com/js/js_regexp.asp)[1](https://www.w3schools.com/js/js_regexp.asp):

1. [**i**: This modifier is used to perform case-insensitive matching](https://www.w3schools.com/js/js_regexp.asp)[1](https://www.w3schools.com/js/js_regexp.asp).

```javascript
let re = /w3schools/i;
```

[In this example, the regular expression `/w3schools/i` will match the string “W3Schools” in a case-insensitive manner](https://www.w3schools.com/js/js_regexp.asp)[1](https://www.w3schools.com/js/js_regexp.asp).

2. [**g**: This modifier is used to perform a global match, which finds all matches rather than stopping after the first match](https://www.w3schools.com/js/js_regexp.asp)[1](https://www.w3schools.com/js/js_regexp.asp).
    
3. [**m**: This modifier is used to perform multiline matching](https://www.w3schools.com/js/js_regexp.asp)[1](https://www.w3schools.com/js/js_regexp.asp).
    
4. [**d**: This modifier is used to perform start and end matching (New in ES2022)](https://www.w3schools.com/js/js_regexp.asp)[1](https://www.w3schools.com/js/js_regexp.asp).
    

These modifiers can be used individually or together in any order, and they are included at the end of the regular expression, like so:

```javascript
let re = /w3schools/ig; // both case-insensitive and global match
```

[In this example, the regular expression `/w3schools/ig` will match the string “W3Schools” in a case-insensitive manner and it will find all matches in the provided string](https://www.w3schools.com/js/js_regexp.asp)[1](https://www.w3schools.com/js/js_regexp.asp).

______________________________________________________________________


## Related : 

- [[Intro And What Is Regular Expression]].

## Reference: 

1.  


---

  ## Creation date: 
  
  <%tp.file.creation_date()%> 
  
  
   ## Modification date :
   
   <%tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss")%>