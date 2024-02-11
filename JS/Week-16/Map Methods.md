
### Status: #week-16

### Tags: #EWS  , #Programming 


A `Map` is a built-in JavaScript object that allows you to store key-value pairs. Here are the key methods and properties of a `Map`:

- **set(key, value)**: This method sets the `value` for the `key` in the `Map` object. Returns the `Map` object.
    
- **get(key)**: This method returns the value associated to the `key`, or `undefined` if there is none.
    
- **delete(key)**: This method removes any value associated to the `key`. Returns `true` if an element in the `Map` object existed and has been removed, or `false` if the element does not exist.
    
- **clear()**: This method removes all key/value pairs from the `Map` object.
    
- **has(key)**: This method returns a boolean indicating whether an element with the specified key exists in the `Map` object or not.
    
- **size**: This property returns the number of key/value pairs in the `Map` object.
    


## JavaScript Map Object

- **Methods**:
  - `set(key, value)`: Adds or updates an element with a specified key and a value to a Map object.
  - `get(key)`: Returns a specified element from a Map object.
  - `delete(key)`: Removes the specified element from a Map object.
  - `clear()`: Removes all elements from a Map object.
  - `has(key)`: Returns a boolean indicating whether an element with the specified key exists in the Map object or not.

- **Properties**:
  - `size`: Returns the number of elements in a Map object.

```javascript
let myMap = new Map([
  [10, "Number"],
  ["Name", "String"],
  [false, "Boolean"],
]);

// myMap.set(10, "Number");
// myMap.set("Name", "String");

console.log(myMap);

console.log(myMap.get(10));
console.log(myMap.get("Name"));
console.log(myMap.get(false));

console.log("####");

console.log(myMap.has("Name"));

console.log("####");

console.log(myMap.size);

console.log(myMap.delete("Name"));

console.log(myMap.size);

myMap.clear();

console.log(myMap.size);
```


______________________________________________________________________


## Related : 

- [[Map Data Type Vs Object]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-01-15 15:14 
  
  
   ## Modification date :
   
   Monday 15th January 2024 15:17:57