
### Status: #week-09

### Tags: #EWS  , #Programming 


- **Longest Word**: This code uses the `reduce()` method to find the longest word in an array of words. It compares the length of the current word with the length of the word stored in the accumulator. If the current word is longer, it becomes the new accumulator.
    
    ```javascript
    let check = theBiggest.reduce(function (acc, current) {
      console.log(`Acc => ${acc}`);
      console.log(`Current Element => ${current}`);
      console.log(acc.length > current.length ? acc : current);
      console.log(`#############`);
      return acc.length > current.length ? acc : current;
    });
    console.log(check);
    ```
    
- **Remove Characters + Use Reduce**: This code first uses the `filter()` method to remove certain characters from an array (in this case, “@”). Then it uses the `reduce()` method to concatenate the remaining characters into a string.
    
    ```javascript
    let finalString = removeChars
      .filter(function (ele) {
        return ele !== "@";
      })
      .reduce(function (acc, current) {
        return `${acc}${current}`;
      });
    console.log(finalString);
    ```
    



______________________________________________________________________


## Related : 

- [[Higher Order Functions – Reduce]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 17:51 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 17:51:57