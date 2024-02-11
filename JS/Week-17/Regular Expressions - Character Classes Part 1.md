
### Status: #week-17

### Tags: #EWS  , #Programming 


[In JavaScript, **character classes** in regular expressions are used to match specific sets of characters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes). Here are some commonly used character classes:

1. **[xyz]**: A character set. Matches any one of the enclosed characters. For example, [abc] is the same as [a-c]. [They match the “b” in “brisket”, and the “c” in "chop"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes).
    
2. **[^xyz]**: A negated or complemented character class. [That is, it matches anything that is not enclosed in the square brackets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes).
    
3. [**.**: Matches any single character except line terminators: \n, \r, \u2028 or \u2029](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes).
    
4. **\d**: Matches any digit (Arabic numeral). [Equivalent to [0-9]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes).
    
5. **\D**: Matches any character that is not a digit (Arabic numeral). [Equivalent to [^0-9]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes).
    
6. **\w**: Matches any alphanumeric character from the basic Latin alphabet, including the underscore. [Equivalent to [A-Za-z0-9_]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes).
    
7. **\W**: Matches any character that is not a word character from the basic Latin alphabet. [Equivalent to [^A-Za-z0-9_]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes).
    
8. [**\s**: Matches a single white space character, including space, tab, form feed, line feed, and other Unicode spaces](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes).
    
9. [**\S**: Matches a single character other than white space](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes).
    

[These character classes can be used in combination with other parts of a regular expression to create more complex patterns](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes).

I hope this helps! If you have any more questions about regular expressions in JavaScript, feel free to ask.


______________________________________________________________________


## Related : 

- [[Regular Expressions - Ranges Part 1]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-01-16 18:04 
  
  
   ## Modification date :
   
   Tuesday 16th January 2024 18:08:04