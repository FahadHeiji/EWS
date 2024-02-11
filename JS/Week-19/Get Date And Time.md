
### Status: #week-19

### Tags: #EWS  , #Programming 


In JavaScript, you can get the current date and time using the `Date` object. Here’s how:

```javascript
let currentDate = new Date();
```

This creates a new `Date` object with the current date and time.

You can retrieve specific parts of the date and time using various methods of the `Date` object:

- **getFullYear()**: Returns the year (four digits for dates between year 1000 and 9999) of the specified date and time.

```javascript
let year = currentDate.getFullYear();
```

- **getMonth()**: Returns the month (from 0 to 11) for the specified date, according to local time. Note that JavaScript counts months from 0 to 11. December is 11, not 12.

```javascript
let month = currentDate.getMonth();
```

- **getDate()**: Returns the day of the month (from 1 to 31) for the specified date.

```javascript
let day = currentDate.getDate();
```

- **getHours()**: Returns the hour (from 0 to 23) of the specified date and time, according to local time.

```javascript
let hours = currentDate.getHours();
```

- **getMinutes()**: Returns the minutes (from 0 to 59) of the specified date and time, according to local time.

```javascript
let minutes = currentDate.getMinutes();
```

- **getSeconds()**: Returns the seconds (from 0 to 59) of the specified date and time, according to local time.

```javascript
let seconds = currentDate.getSeconds();
```

- **getMilliseconds()**: Returns the milliseconds (from 0 to 999) of the specified date and time, according to local time.

```javascript
let milliseconds = currentDate.getMilliseconds();
```

These methods allow you to get the current date and time, or any part of it, in JavaScript. You can then use this information as needed in your program. For example, you might use it to timestamp user actions or calculate durations.

______________________________________________________________________


## Related : 

- [[Date And Time Introduction]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-08 13:37 
  
  
   ## Modification date :
   
   Thursday 8th February 2024 13:37:56