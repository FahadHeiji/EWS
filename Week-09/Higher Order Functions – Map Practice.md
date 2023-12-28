
### Status: #week-09

### Tags: #EWS  , #Programming 


- **Swap Cases**: This code takes a string and swaps the case of each character using the `map()` method. If the character is uppercase, it changes it to lowercase, and vice versa.
    
    ```javascript
    let sw = swappingCases
      .split("")
      .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
      .join("");
    console.log(sw);
    ```
    
- **Inverted Numbers**: This code takes an array of numbers and inverts each number (i.e., changes the sign) using the `map()` method.
    
    ```javascript
    let inv = invertedNumbers.map(function (ele) {
      return -ele;
    });
    console.log(inv);
    ```
    
- **Ignore Boolean Value**: This code takes a string and removes any numbers from it using the `map()` method. It checks each character to see if it’s a number using the `isNaN()` function, and if it’s not a number, it includes it in the new string.
    
    ```javascript
    let ign = ignoreNumbers
      .split("")
      .map(function (ele) {
        return isNaN(parseInt(ele)) ? ele : "";
      })
      .join("");
    console.log(ign);
    ```
    

______________________________________________________________________


## Related : 

- [[Higher Order Functions – Map]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 17:42 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 17:42:29