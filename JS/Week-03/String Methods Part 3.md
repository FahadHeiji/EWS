
### Status: #week-03  

### Tags: #JS, #EWS 

## Topic 1: 

- `substring(start, end)`: This method extracts characters from a string between two specified indices. The `start` index is mandatory, while the `end` index is optional. If `start` is greater than `end`, they will be swapped. If `start` is less than 0, it will start from 0. You can use the length of the string to get the last character.

```javascript
let str = "Hello, World!";
let result = str.substring(0, 5); // "Hello"
result = str.substring(7); // "World!"
result = str.substring(5, 0); // "Hello"
result = str.substring(-5, 7); // "Hello, "
```

- `substr(start, length)`: This method returns a portion of the string starting at a specified index and extending for a specified number of characters. If `start` is greater than or equal to the length of the string, an empty string is returned. If `start` is negative, it starts from the end of the string.

```javascript
let str = "Hello, World!";
let result = str.substr(0, 5); // "Hello"
result = str.substr(7); // "World!"
result = str.substr(20); // ""
result = str.substr(-6); // "World!"
```

- `includes(searchString, position)`: This method checks if a string includes another string. It returns true if it does and false otherwise. The `position` parameter is optional and defaults to 0.

```javascript
let str = "Hello, World!";
let result = str.includes("World"); // true
result = str.includes("world"); // false
result = str.includes("World", 8); // false
```

- `startsWith(searchString, position)`: This method checks if a string starts with another string. It returns true if it does and false otherwise. The `position` parameter is optional and defaults to 0.

```javascript
let str = "Hello, World!";
let result = str.startsWith("Hello"); // true
result = str.startsWith("hello"); // false
result = str.startsWith("World", 7); // true
```

- `endsWith(searchString, length)`: This method checks if a string ends with another string. It returns true if it does and false otherwise. The `length` parameter is optional and defaults to the full length of the string.

```javascript
let str = "Hello, World!";
let result = str.endsWith("!"); // true
result = str.endsWith("world!"); // false
result = str.endsWith("World", 11); // true
```

I hope these detailed explanations and examples help you understand these methods better! Let me know if you have any further questions.


______________________________________________________________________


## Related : 

- [[String Methods Part 2]].

## Reference: 

1.  [Lesson - 29 On YT](https://youtu.be/_vg-kxWEubk?si=PjtpjFMFJ29KYfsB).


---

  ## Creation date: 
  
  2023-09-03 18:15 
  
  
   ## Modification date :
   
   Sunday 3rd September 2023 18:15:24