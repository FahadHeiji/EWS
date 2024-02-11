### Status: #week-17

### Tags: #EWS  , #Programming 



[In JavaScript, **quantifiers** in regular expressions are used to specify how many instances of a character, group, or character class must be present in the input for a match to be found](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier). Here are some commonly used quantifiers:

1. [**x***: Matches the preceding item “x” 0 or more times](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers). [For example, `/bo*/` matches “boooo” in “A ghost booooed” and “b” in “A bird warbled”, but nothing in "A goat grunted"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers).
    
2. [**x+**: Matches the preceding item “x” 1 or more times](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers). Equivalent to `{1,}`. [For example, `/a+/` matches the “a” in “candy” and all the "a"s in "caaaaaaandy"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers).
    
3. [**x?**: Matches the preceding item “x” 0 or 1 times](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers). [For example, `/e?le?/` matches the “el” in “angel” and the “le” in "angle"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers).
    
4. [**x{n}**: Where “n” is a positive integer, matches exactly “n” occurrences of the preceding item "x"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers). [For example, `/a{2}/` doesn’t match the “a” in “candy”, but it matches all of the "a"s in “caandy”, and the first two "a"s in "caaandy"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers).
    
5. [**x{n,}**: Where “n” is a positive integer, matches at least “n” occurrences of the preceding item "x"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers). [For example, `/a{2,}/` doesn’t match the “a” in “candy”, but matches all of the "a"s in “caandy” and in "caaaaaaandy"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers).
    
6. [**x{n,m}**: Where “n” is 0 or a positive integer, “m” is a positive integer, and m > n, matches at least “n” and at most “m” occurrences of the preceding item "x"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers). [For example, `/a{1,3}/` matches nothing in “cndy”, the “a” in “candy”, the two "a"s in “caandy”, and the first three "a"s in "caaaaaaandy"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers).
    

[By default, quantifiers like `*` and `+` are “greedy”, meaning that they try to match as much of the string as possible](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier). [The `?` character after the quantifier makes the quantifier “non-greedy”: meaning that it will stop as soon as it finds a match](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier).

______________________________________________________________________


## Related : 

- [[Regular Expressions - Character Classes Part 1]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-01-16 18:49 
  
  
   ## Modification date :
   
   Tuesday 16th January 2024 18:49:14