
### Status: #week-19

### Tags: #EWS  , #Programming 

In JavaScript, the `Date` object is used to work with dates and times. Here’s a basic introduction:

- **Creating Date Objects**: Date objects are created with the `new Date()` constructor.

```javascript
let date = new Date();
```

- **Date Formats**: There are several ways to create a new date object:

```javascript
new Date(); // current date and time
new Date(year, month, day, hours, minutes, seconds, milliseconds); // custom date and time
new Date(milliseconds); // milliseconds since 1970/01/01
new Date(dateString); // date string in a format recognized by the Date.parse() method
```

- **Date Methods**: The `Date` object has numerous methods for getting and setting parts of the date and time:

```javascript
let date = new Date();

date.getFullYear(); // gets the year (four digits)
date.getMonth(); // gets the month (0-11)
date.getDate(); // gets the day of the month (1-31)
date.getHours(); // gets the hour (0-23)
date.getMinutes(); // gets the minutes (0-59)
date.getSeconds(); // gets the seconds (0-59)
date.getMilliseconds(); // gets the milliseconds (0-999)
date.getTime(); // gets the number of milliseconds since 1970/01/01
```

- **Setting Dates**: We can also set date values in JavaScript using the `setFullYear()`, `setMonth()`, `setHours()`, `setMinutes()`, `setSeconds()`, and `setMilliseconds()` methods.

```javascript
let date = new Date();

date.setFullYear(2023);
date.setMonth(11);
date.setDate(31);
date.setHours(23);
date.setMinutes(59);
date.setSeconds(59);
date.setMilliseconds(999);
```

- **Date Strings**: JavaScript uses the ISO standard for date strings (ISO 8601). The standard format is: “YYYY-MM-DDTHH:mm:ss.sssZ”

```javascript
let date = new Date();

date.toISOString(); // returns a string in simplified extended ISO format
date.toDateString(); // returns the date portion of the Date as a human-readable string
date.toTimeString(); // returns the time portion of the Date as a human-readable string
```

This is a basic introduction to working with dates and times in JavaScript. There’s a lot more to learn, but this should give you a good start.

______________________________________________________________________


## Related : 

- [[Datetime Local UTC Time]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-08 13:25 
  
  
   ## Modification date :
   
   Thursday 8th February 2024 13:25:26