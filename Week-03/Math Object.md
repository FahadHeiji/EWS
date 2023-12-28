
### Status: #week-03  

### Tags: #JS , #EWS 

## Topic 1: 

- The `Math` object in JavaScript provides a collection of mathematical functions and constants. Here are some commonly used methods of the `Math` object:

1. `round()`:
   The `round()` method rounds a number to the nearest integer. If the fractional part is exactly halfway between two integers, it rounds to the nearest even integer. Example:

   `````javascript
   let num = 3.7;
   let rounded = Math.round(num); // Round to the nearest integer
   console.log(rounded); // Output: 4
   `````

2. `ceil()`:
   The `ceil()` method rounds a number up to the next highest integer, regardless of the decimal part. Example:

   ````javascript
   let num = 3.2;
   let ceilValue = Math.ceil(num); // Round up to the next highest integer
   console.log(ceilValue); // Output: 4
   `````

3. `floor()`:
   The `floor()` method rounds a number down to the next lowest integer, regardless of the decimal part. Example:

   ````javascript
   let num = 3.9;
   let floorValue = Math.floor(num); // Round down to the next lowest integer
   console.log(floorValue); // Output: 3
   `````

4. `min()` and `max()`:
   The `min()` and `max()` methods return the minimum and maximum values from a list of numbers or arguments. Example:

   ````javascript
   let minValue = Math.min(5, 2, 8, 1); // Find the minimum value
   console.log(minValue); // Output: 1

   let maxValue = Math.max(5, 2, 8, 1); // Find the maximum value
   console.log(maxValue); // Output: 8
   `````

5. `pow()`:
   The `pow()` method raises a base number to the power of an exponent and returns the result. Example:

   ````javascript
   let base = 2;
   let exponent = 3;
   let result = Math.pow(base, exponent); // Calculate base raised to the power of exponent
   console.log(result); // Output: 8
   `````

6. `random()`:
   The `random()` method generates a random floating-point number between 0 (inclusive) and 1 (exclusive). Example:

   ````javascript
   let randomNum = Math.random(); // Generate a random number between 0 and 1
   console.log(randomNum); // Output: 0.123456789 (example)
   `````

7. `trunc()` (ES6):
   The `trunc()` method removes the decimal part of a number, returning the integer part without rounding. Example:

   ````javascript
   let num = 3.9;
   let truncated = Math.trunc(num); // Remove decimal part and return the integer part
   console.log(truncated); // Output: 3
   `````

These are just a few examples of the methods provided by the `Math` object. It's important to note that the `Math` object is a built-in object in JavaScript, and its methods can be accessed directly without needing to create an instance of the object.

______________________________________________________________________


## Related : 

- [[Number]].
- [[Number Methods]].

## Reference: 

1.  [Lesson - 25 On YT](https://www.youtube.com/watch?v=xBNM5Zbnh8Q&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=25).


---

  ## Creation date: 
  
  2023-09-03 08:57 
  
  
   ## Modification date :
   
   Sunday 3rd September 2023 09:05:14