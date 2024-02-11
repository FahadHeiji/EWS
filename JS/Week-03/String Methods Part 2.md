
### Status: #week-03  

### Tags: #JS, #EWS 

## Topic 1: 

- Certainly! Here are some additional commonly used string methods in JavaScript:

1. `indexOf(value, start)`:
   The `indexOf()` method returns the index of the first occurrence of a specified value within a string. It takes the value to search for as the mandatory parameter and an optional `start` parameter specifying the index to start the search from (default is 0). If the value is not found, it returns -1. Example:

   ``````javascript
   let str = "Hello, world!";
   console.log(str.indexOf("o")); // Output: 4
   console.log(str.indexOf("o", 5)); // Output: 8
   ```````

2. `lastIndexOf(value, start)`:
   The `lastIndexOf()` method returns the index of the last occurrence of a specified value within a string. It works similarly to `indexOf()`, but searches from the end of the string. It takes the value to search for as the mandatory parameter and an optional `start` parameter specifying the index to start the search from (default is the length of the string). If the value is not found, it returns -1. Example:

   ````javascript
   let str = "Hello, world!";
   console.log(str.lastIndexOf("o")); // Output: 8
   console.log(str.lastIndexOf("o", 7)); // Output: 4
   `````

3. `slice(start, end)`:
   The `slice()` method extracts a portion of a string and returns a new string. It takes the starting index as the mandatory parameter and an optional `end` parameter specifying the index to end the extraction (not included in the result). If the `end` parameter is not provided, the extraction continues until the end of the string. Negative indices can also be used. Example:

   ````javascript
   let str = "Hello, world!";
   console.log(str.slice(7, 12)); // Output: "world"
   console.log(str.slice(-6)); // Output: "world!"
   `````

4. `repeat(times)` (ES6):
   The `repeat()` method creates and returns a new string by concatenating the original string a specified number of times. It takes the number of times to repeat the string as the mandatory parameter. Example:

   ````javascript
   let str = "Hello";
   console.log(str.repeat(3)); // Output: "HelloHelloHello"
   `````

5. `split(separator, limit)`:
   The `split()` method splits a string into an array of substrings based on a specified separator. It takes the separator as the optional parameter and an optional `limit` parameter specifying the maximum number of splits to be performed. If no separator is provided, it splits the string into an array containing the whole string as a single element. Example:

   ````javascript
   let str = "Hello, world!";
   console.log(str.split(",")); // Output: ["Hello", " world!"]
   console.log(str.split("", 5)); // Output: ["H", "e", "l", "l", "o"]
   `````

These string methods provide powerful tools for manipulating and working with strings in JavaScript, allowing you to perform various operations such as searching, extracting substrings, repeating, and splitting strings.

______________________________________________________________________


## Related : 

- [[String Methods Part 1]].

## Reference: 

1.  [Lessons - 28 On YT](https://youtu.be/3h2FBrcNOMQ?si=G6eXQSkRQZS2UsXW).


---

  ## Creation date: 
  
  2023-09-03 18:06 
  
  
   ## Modification date :
   
   Sunday 3rd September 2023 18:12:29