
### Status: #week-03 

### Tags: #JS, #EWS 

## Topic 1: 

- Certainly! Here are some commonly used methods for manipulating strings in JavaScript:

1. Accessing with Index:
   You can access individual characters in a string by using square brackets `[]` and providing the index of the character you want to access. In JavaScript, string indices start at 0. Example:

   `````javascript
   let str = "Hello";
   console.log(str[0]); // Output: "H"
   console.log(str[1]); // Output: "e"
   `````

2. `charAt()`:
   The `charAt()` method returns the character at a specified index within a string. It takes the index as a parameter and returns the character at that position. Example:

   ````javascript
   let str = "Hello";
   console.log(str.charAt(0)); // Output: "H"
   console.log(str.charAt(1)); // Output: "e"
   `````

3. `length`:
   The `length` property returns the number of characters in a string. Example:

   ````javascript
   let str = "Hello";
   console.log(str.length); // Output: 5
   `````

4. `trim()`:
   The `trim()` method removes whitespace characters from both ends of a string and returns the trimmed string. Example:

   ````javascript
   let str = "   Hello   ";
   let trimmed = str.trim(); // Remove leading and trailing whitespace
   console.log(trimmed); // Output: "Hello"
   `````

5. `toUpperCase()` and `toLowerCase()`:
   The `toUpperCase()` method converts a string to uppercase letters, while `toLowerCase()` converts a string to lowercase letters. Example:

   ````javascript
   let str = "Hello";
   console.log(str.toUpperCase()); // Output: "HELLO"
   console.log(str.toLowerCase()); // Output: "hello"
   `````

6. Chaining Methods:
   In JavaScript, you can chain multiple string methods together to perform various operations in sequence. Each method returns a new string, allowing you to apply subsequent methods on the result. Example:

   ````javascript
   let str = "   Hello World!   ";
   let result = str.trim().toUpperCase().substring(6); // Trim, convert to uppercase, and extract substring
   console.log(result); // Output: "WORLD!"
   `````

By using these string methods, you can manipulate and transform strings in JavaScript to suit your needs. Remember that strings in JavaScript are immutable, meaning that string methods return a new string rather than modifying the original string.

______________________________________________________________________


## Related : 

- [[String Syntax , Character Escape Sequences]].
- [[Template Literals Template Strings]].

## Reference: 

1.  [Lesson - 27 On YT](https://youtu.be/GtmsTGAq64s?si=uceqoOlPeclMhX6V).


---

  ## Creation date: 
  
  2023-09-03 18:02 
  
  
   ## Modification date :
   
   Sunday 3rd September 2023 18:06:10