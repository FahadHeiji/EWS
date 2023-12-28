
### Status: #week-03

### Tags: #JS, #EWS 

## Topic 1: 


1. `toString()`:
   The `toString()` method converts a number to a string representation. It accepts an optional parameter specifying the radix (base) to use for the string conversion. If not provided, the default radix is 10. Example:

   `````javascript
   
   let num = 42;
   let numString = num.toString(); // Convert number to string
   console.log(numString); // Output: "42"

   let binaryString = num.toString(2); // Convert number to binary string
   console.log(binaryString); // Output: "101010"
   `````


2. `toFixed()`:
   The `toFixed()` method formats a number with a specified number of decimal places and returns a string representation of the formatted number. Example:

   ````javascript
   let num = 3.14159;
   let formatted = num.toFixed(2); // Format number to 2 decimal places
   console.log(formatted); // Output: "3.14"
   `````

3. `parseInt()`:
   The `parseInt()` function parses a string and returns an integer. It takes two parameters: the string to be parsed and an optional radix (base) parameter. Example:

   ````javascript
   let numString = "42";
   let parsedInt = parseInt(numString); // Parse string to integer
   console.log(parsedInt); // Output: 42

   let binaryString = "101010";
   let parsedBinary = parseInt(binaryString, 2); // Parse binary string to integer
   console.log(parsedBinary); // Output: 42
   `````

4. `parseFloat()`:
   The `parseFloat()` function parses a string and returns a floating-point number. It is similar to `parseInt()` but handles decimal numbers. Example:

   ````javascript
   let numString = "3.14";
   let parsedFloat = parseFloat(numString); // Parse string to floating-point number
   console.log(parsedFloat); // Output: 3.14
   `````

5. `isInteger()` (ES6):
   The `isInteger()` method checks if a given value is an integer. It returns `true` if the value is an integer, otherwise `false`. Example:

   ````javascript
   let num1 = 42;
   let num2 = 3.14;

   console.log(Number.isInteger(num1)); // Output: true
   console.log(Number.isInteger(num2)); // Output: false
   `````

6. `isNaN()` (ES6):
   The `isNaN()` function checks if a value is `NaN` (Not-a-Number). It returns `true` if the value is `NaN`, otherwise `false`. Example:

   
   ````javascript
   let result1 = isNaN("Hello"); // Check if the value is NaN
   console.log(result1); // Output: true

   let result2 = isNaN(42);
   console.log(result2); // Output: false

````````


______________________________________________________________________



## Related : 

- [[Number]].

## Reference: 

1.  [Lesson - 24 On YT](https://www.youtube.com/watch?v=ECs2mCrS8Sc&t=16s).


---

  ## Creation date: 
  
  2023-09-03 08:38 
  
  
   ## Modification date :
   
   Sunday 3rd September 2023 08:53:23