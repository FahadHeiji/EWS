
### Status: #week-17

### Tags: #EWS  , #Programming 



[In JavaScript, **ranges** in regular expressions are used to match any character in a set and are denoted by square brackets `[]`](https://www.javascripttutorial.net/regular-expression-sets-and-ranges/)[1](https://www.javascripttutorial.net/regular-expression-sets-and-ranges/). Here are some examples:

1. **[abc]**: This matches any of the characters ‘a’, ‘b’, or ‘c’. [It will match ‘a’ in “apple”, ‘b’ in “banana”, and ‘c’ in "cherry"](https://www.javascripttutorial.net/regular-expression-sets-and-ranges/)[1](https://www.javascripttutorial.net/regular-expression-sets-and-ranges/).
    
2. **[a-z]**: This matches any lowercase letter. [The hyphen `-` denotes a range, so ‘a-z’ includes every lowercase letter from ‘a’ to 'z’](https://www.javascripttutorial.net/regular-expression-sets-and-ranges/)[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet).
    
3. [**[A-Z]**: Similarly, this matches any uppercase letter](https://www.javascripttutorial.net/regular-expression-sets-and-ranges/)[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet).
    
4. [**[0-9]**: This matches any digit from 0 to 9](https://www.javascripttutorial.net/regular-expression-sets-and-ranges/)[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet).
    
5. [**[abc3-7]**: This matches ‘a’, ‘b’, ‘c’, or any digit from 3 to 7](https://www.javascripttutorial.net/regular-expression-sets-and-ranges/)[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet).
    
6. [**[^abc]**: The caret `^` at the start negates the set, meaning this will match any character that is not ‘a’, ‘b’, or 'c’](https://www.javascripttutorial.net/regular-expression-sets-and-ranges/)[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet).
    

These ranges can be used in combination with other parts of a regular expression to create more complex patterns. [For example, the pattern `/a[1-5]b/` will match ‘a’ followed by a digit from 1 to 5, followed by ‘b’, such as in "a4b"](https://www.javascripttutorial.net/regular-expression-sets-and-ranges/)[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet).

______________________________________________________________________


## Related : 

- [[Regular Expressions - Modifiers]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-01-16 18:03 
  
  
   ## Modification date :
   
   Tuesday 16th January 2024 18:04:05