
### Status: #week-09

### Tags: #EWS  , #Programming 


- **Filter Longest Word By Number**: This code filters out words from a sentence that are longer than a certain length. In this case, it filters out words that are more than 4 characters long.
    
    ```javascript
    let smallWords = sentence
      .split(" ")
      .filter(function (ele) {
        return ele.length <= 4;
      })
      .join(" ");
    console.log(smallWords);
    ```
    
- **Ignore Numbers**: This code filters out numbers from a string. It checks each character to see if it’s a number using the `isNaN()` function, and if it’s not a number, it includes it in the new string.
    
    ```javascript
    let ign = ignoreNumbers
      .split("")
      .filter(function (ele) {
        return isNaN(parseInt(ele));
      })
      .join("");
    console.log(ign);
    ```
    
- **Filter Strings + Multiply**: This code filters out non-numeric characters from a string, then multiplies each remaining number by itself.
    
    ```javascript
    let mixedContent = mix
      .split("")
      .filter(function (ele) {
        return !isNaN(parseInt(ele));
      })
      .map(function (ele) {
        return ele * ele;
      })
      .join("");
    console.log(mixedContent);
    ```
    


______________________________________________________________________


## Related : 

- [[Higher Order Functions – Filter]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 17:45 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 17:45:56