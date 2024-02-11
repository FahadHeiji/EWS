
### Status: #week-19

### Tags: #EWS  , #Programming 


In JavaScript, you can format date and time using various methods of the `Date` object. Here’s how:

- **toString()**: Converts a Date object to a string.

```javascript
let date = new Date();
console.log(date.toString());
```

- **toDateString()**: Converts the date portion of a Date object into a readable string.

```javascript
console.log(date.toDateString());
```

- **toTimeString()**: Converts the time portion of a Date object to a string.

```javascript
console.log(date.toTimeString());
```

- **toLocaleString()**: Converts a Date object to a string, using locale conventions.

```javascript
console.log(date.toLocaleString());
```

- **toLocaleDateString()**: Converts the date portion of a Date object into a readable string, using locale conventions.

```javascript
console.log(date.toLocaleDateString());
```

- **toLocaleTimeString()**: Converts the time portion of a Date object to a string, using locale conventions.

```javascript
console.log(date.toLocaleTimeString());
```

- **toISOString()**: Returns the date as a string, using the ISO standard.

```javascript
console.log(date.toISOString());
```

These methods allow you to format the date and time in JavaScript. You can then use this information as needed in your program. For example, you might use it to display the date and time in a user-friendly format. Note that the output of these methods may vary depending on the user’s locale and the system settings.

For more complex formatting, you might need to use a library like Moment.js or a built-in internationalization API like `Intl.DateTimeFormat`. These provide more options for formatting dates and times according to different cultural conventions.

Here’s an example using `Intl.DateTimeFormat`:

```javascript
let date = new Date();
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(new Intl.DateTimeFormat('en-US', options).format(date));
```

This will output the date in a format like “Monday, December 31, 2023”, but you can customize the format by changing the options and the locale.

______________________________________________________________________


## Related : 

- [[Set Date And Time]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-08 13:44 
  
  
   ## Modification date :
   
   Thursday 8th February 2024 13:44:49