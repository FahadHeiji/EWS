
### Status: #week-20

### Tags: #EWS  , #Programming 


JSON (JavaScript Object Notation) and JavaScript objects have similar syntax but there are key differences between them:

1. [**Quotation Marks**: In JSON, all keys must be quoted, while in JavaScript object literals this is not necessary](https://stackoverflow.com/questions/3975859/what-are-the-differences-between-json-and-javascript-object)[1](https://stackoverflow.com/questions/3975859/what-are-the-differences-between-json-and-javascript-object). For example:
    
    ```javascript
    // JSON:
    { "foo": "bar" }
    
    // JavaScript Object:
    var o = { foo: "bar" };
    ```
    
2. **Data Types**: JSON supports fewer data types compared to JavaScript. [JSON supports string, number, object, array, true, false, and null](https://stackoverflow.com/questions/3975859/what-are-the-differences-between-json-and-javascript-object)[1](https://stackoverflow.com/questions/3975859/what-are-the-differences-between-json-and-javascript-object).
3. **String Delimiters**: In JSON, strings must be enclosed in double quotes. [In JavaScript, you can use either single or double quotes](https://stackoverflow.com/questions/3975859/what-are-the-differences-between-json-and-javascript-object)[1](https://stackoverflow.com/questions/3975859/what-are-the-differences-between-json-and-javascript-object).
4. **Number Literals**: In JSON, you can only use decimal literals. [In JavaScript, you can use hexadecimal (like 0xFF) and octal literals (like 010)](https://stackoverflow.com/questions/3975859/what-are-the-differences-between-json-and-javascript-object)[1](https://stackoverflow.com/questions/3975859/what-are-the-differences-between-json-and-javascript-object).

When it comes to comparing JSON objects and JavaScript objects, the order of properties can affect the result. [If you use `JSON.stringify()` to compare two objects, it will return false if the order of properties is different](https://stackoverflow.com/questions/3975859/what-are-the-differences-between-json-and-javascript-object)[2](https://stackoverflow.com/questions/26049303/how-to-compare-two-json-have-the-same-properties-without-order). [However, you can use libraries like Lodash’s `_.isEqual()` function to compare two objects regardless of the property order](https://stackoverflow.com/questions/3975859/what-are-the-differences-between-json-and-javascript-object)[2](https://stackoverflow.com/questions/26049303/how-to-compare-two-json-have-the-same-properties-without-order).

Here’s an example:

```javascript
var object1 = { name: 'ABC', address: 'India' };
var object2 = { address: 'India', name: 'ABC' };

// Using JSON.stringify
console.log(JSON.stringify(object1) === JSON.stringify(object2)); // returns false

// Using Lodash's _.isEqual
console.log(_.isEqual(object1, object2)); // returns true
```

In the above example, even though `object1` and `object2` have the same properties and values, `JSON.stringify()` returns false because the order of properties is different. [On the other hand, `_.isEqual()` returns true because it compares the objects regardless of the property order](https://stackoverflow.com/questions/3975859/what-are-the-differences-between-json-and-javascript-object)[2](https://stackoverflow.com/questions/26049303/how-to-compare-two-json-have-the-same-properties-without-order).

[Remember, JSON is a string format for data interchange and can be used by any programming language, while JavaScript objects can only be worked with directly through the JavaScript programming language](https://stackoverflow.com/questions/3975859/what-are-the-differences-between-json-and-javascript-object)[3](https://www.digitalocean.com/community/tutorials/how-to-work-with-json-in-javascript).

______________________________________________________________________


## Related : 

- [[What is JSON]].

## Reference: 

1.  


---

  ## Creation date: 
  
  <%tp.file.creation_date()%> 
  
  
   ## Modification date :
   
   <%tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss")%>