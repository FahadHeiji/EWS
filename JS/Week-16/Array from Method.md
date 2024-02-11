
### Status: #week-16

### Tags: #EWS  , #Programming 


The `Array.from()` method creates a new, shallow-copied `Array` instance from an iterable object or from a `Set`. Here are the key points:

- **Iterable**: An iterable can be any array-like or iterable object whose elements will form the new array. String is an iterable group of characters, so when you pass a string to `Array.from()`, it creates an array with each character of the string as an element.
    
- **Map Function**: `Array.from()` takes an optional map function argument that allows you to execute a function on each item in the array (or set) as it is created.
    
- **Set**: When a `Set` is passed, it creates a new array from the unique values in the `Set`.
    
- **Arguments**: The `arguments` object is an array-like object that is available within all non-arrow functions. You can use `Array.from()` to convert `arguments` to a new array.
    


### JavaScript Array.from() Method

- **Definition**: Creates a new array instance from an iterable object.
- **Syntax**: `Array.from(iterable, mapFunction, thisValue)`
- **Parameters**:
  - `iterable`: An iterable or array-like object to convert to an array.
  - `mapFunction` (Optional): Map function to call on every element of the array.
  - `thisValue` (Optional): Value to use as `this` when executing the map function.
- **Return value**: A new `Array` instance.

````js
let myString = “Osama”; let myNumber = 100; let myBoolean = false; let myArray = [1, 2, 3]; let myObject = { a: 1, b: 2 }; let myDate = new Date(); let myNull = null; let myUndefined = undefined; let myNaN = NaN;

console.log(Array.isArray(myString)); console.log(Array.isArray(myNumber)); console.log(Array.isArray(myBoolean)); console.log(Array.isArray(myArray)); console.log(Array.isArray(myObject)); console.log(Array.isArray(myDate)); console.log(Array.isArray(myNull)); console.log(Array.isArray(myUndefined)); console.log(Array.isArray(myNaN)); [assistant]=(#message|) 				 
````

______________________________________________________________________


## Related : 

- [[Map Methods]].

## Reference: 

1.  


---

  ## Creation date: 
  
  <%tp.file.creation_date()%> 
  
  
   ## Modification date :
   
   <%tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss")%>