
### Status: #week-17

### Tags: #EWS  , #Programming 


**Regular Expressions**, often shortened as **RegEx**, are a powerful tool in JavaScript for handling text. [They are essentially patterns used to match character combinations in strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

[In JavaScript, regular expressions are also objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions). [These patterns are used with various methods of `RegExp` and `String` such as `exec()`, `test()`, `match()`, `matchAll()`, `replace()`, `replaceAll()`, `search()`, and `split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

Here’s how you can create a regular expression in JavaScript:

1. **Using a regular expression literal**: This consists of a pattern enclosed between slashes. For example:

```javascript
const re = /ab+c/;
```

Regular expression literals provide compilation of the regular expression when the script is loaded. [If the regular expression remains constant, using this can improve performance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

2. **Calling the constructor function of the RegExp object**: For example:

```javascript
const re = new RegExp("ab+c");
```

Using the constructor function provides runtime compilation of the regular expression. [Use the constructor function when you know the regular expression pattern will be changing, or you don’t know the pattern and are getting it from another source, such as user input](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

[A regular expression pattern can be composed of simple characters, such as `/abc/`, or a combination of simple and special characters, such as `/ab*c/` or `/Chapter (\\d+)\\.\\d*/`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

[Regular expressions can be used to perform all types of text search and text replace operations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)[2](https://www.w3schools.com/js/js_regexp.asp). [For example, the pattern `/abc/` matches character combinations in strings only when the exact sequence “abc” occurs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

When the search for a match requires something more than a direct match, you can include special characters in the pattern. [For example, to match a single “a” followed by zero or more "b"s followed by “c”, you’d use the pattern `/ab*c/`: the `*` after “b” means "0 or more occurrences of the preceding item."](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).


______________________________________________________________________


## Related : 

- [[String Syntax , Character Escape Sequences]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-01-16 17:10 
  
  
   ## Modification date :
   
   Tuesday 16th January 2024 17:10:15