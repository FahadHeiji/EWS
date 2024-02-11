
### Status: #week-16

### Tags: #EWS  , #Programming 


A `Set` is a built-in JavaScript object that allows you to store unique values of any type. Unlike arrays, sets don’t allow duplicate values and you can’t access elements by index. This makes them useful when you need to keep track of a list of items, but don’t care about their order or frequency.

Here are the key points about a `Set`:

- **Creating a Set**: You can create a set using the `new Set()` syntax. You can optionally pass an iterable (like an array) to the `Set` constructor to create a set with those values.
    
- **Adding Values**: You can add values to a set using the `add` method. If you try to add a duplicate value, it won’t have any effect - the set will still only contain one copy of that value.
    
- **Checking Values**: You can check if a set contains a certain value using the `has` method.
    
- **Removing Values**: You can remove values from a set using the `delete` method.
    
- **Clearing a Set**: You can remove all values from a set using the `clear` method.
    
- **Size of a Set**: You can get the number of values in a set using the `size` property.
    


# JavaScript Set Object

- **Definition**: A `Set` is an object that stores unique values of any type.
- **Syntax**: `new Set(iterable)`
- **Properties**:
  - `size`: Returns the number of values in the Set.
- **Methods**:
  - `add(value)`: Adds a new element with the given value to the Set.
  - `delete(value)`: Removes the specified element from the Set.
  - `clear()`: Removes all elements from the Set.
  - `has(value)`: Returns a boolean indicating whether an element with the specified value exists in the Set or not.

```JS
let letters = ["A","a","A","B","B","B","C"];

  

let newLetters = new Set(letters);

  

console.log(letters); // ["A","a","A","B","B","B","C"]

console.log(newLetters); // Set(4) { 'A', 'a', 'B', 'C' }

console.log(typeof newLetters); // object

console.log(newLetters.has("C")); // true

```

______________________________________________________________________


## Related : 

- 

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-01-15 13:36 
  
  
   ## Modification date :
   
   Monday 15th January 2024 13:36:58