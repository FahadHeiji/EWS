
### Status: #week-17

### Tags: #EWS  , #Programming 


[In JavaScript, the `replace()` method is used to return a new string with some or all matches of a pattern replaced by a replacement string](https://www.javascripttutorial.net/javascript-regex/replace/)[1](https://www.javascripttutorial.net/javascript-regex/replace/). [This method works with both strings and regular expressions](https://www.javascripttutorial.net/javascript-regex/replace/)[1](https://www.javascripttutorial.net/javascript-regex/replace/).

Here’s the syntax of the `replace()` method:

```javascript
replace(regexp, newSubstr)
```

In this syntax:

- [`regexp` is a regular expression to match](https://www.javascripttutorial.net/javascript-regex/replace/)[1](https://www.javascripttutorial.net/javascript-regex/replace/).
- [`newSubstr` is a string to replace the matches](https://www.javascripttutorial.net/javascript-regex/replace/)[1](https://www.javascripttutorial.net/javascript-regex/replace/). [If `newSubstr` is empty, the `replace()` method removes the matches](https://www.javascripttutorial.net/javascript-regex/replace/)[1](https://www.javascripttutorial.net/javascript-regex/replace/).

[The `replace()` method doesn’t change the original string but returns a new string](https://www.javascripttutorial.net/javascript-regex/replace/)[1](https://www.javascripttutorial.net/javascript-regex/replace/). By default, the `replace()` method replaces the first match if the `regexp` doesn’t use the global flag (`g`). [To replace all matches, you use the global flag (`g`) in the `regexp`](https://www.javascripttutorial.net/javascript-regex/replace/)[1](https://www.javascripttutorial.net/javascript-regex/replace/).

Here are some examples of using the `replace()` method:

1. A simple JavaScript regex replace() method example:

```javascript
const s = 'JS and js';
const re = /js/i;
const newS = s.replace(re, 'JavaScript');
console.log(newS); // Output: JavaScript and js
```

In this example, `/js/i` matches both “JS” and “js” in the ‘JS and js’ string. [However, the `replace()` method replaces only the first match (“JS”)](https://www.javascripttutorial.net/javascript-regex/replace/)[1](https://www.javascripttutorial.net/javascript-regex/replace/).

2. Using the JavaScript regex replace() method with the global flag:

```javascript
const s = 'JS and js';
const re = /js/gi;
const newS = s.replace(re, 'JavaScript');
console.log(newS); // Output: JavaScript and JavaScript
```

In this example, `/js/gi` matches both “JS” and “js” in the ‘JS and js’ string. [The `replace()` method replaces all matches](https://www.javascripttutorial.net/javascript-regex/replace/)[1](https://www.javascripttutorial.net/javascript-regex/replace/).

3. Using the JavaScript regex replace() method with capturing groups:

```javascript
let re = /(\\w+)\\s(\\w+)/;
let name = 'Jane Doe';
let lastFirst = name.replace(re, '$2, $1');
console.log(lastFirst); // Output: Doe, Jane
```

[In this example, the regular expression `/(\\w+)\\s(\\w+)/` matches one or more word characters, a space, and then one or more word characters](https://www.javascripttutorial.net/javascript-regex/replace/)[1](https://www.javascripttutorial.net/javascript-regex/replace/). The regular expression contains two capturing groups. [The first capturing group captures the first word and the second one captures the second word after the space](https://www.javascripttutorial.net/javascript-regex/replace/)[1](https://www.javascripttutorial.net/javascript-regex/replace/).

I hope this helps! If you have any more questions about regular expressions in JavaScript, feel free to ask.


______________________________________________________________________


## Related : 

- [[String Methods Part 1]].
- [[Regular Expression – Quantifiers Part 1]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-01-16 18:49 
  
  
   ## Modification date :
   
   Tuesday 16th January 2024 18:49:53