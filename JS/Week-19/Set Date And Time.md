
### Status: #week-19

### Tags: #EWS  , #Programming 


In JavaScript, you can set the date and time using the `Date` object. Here’s how:

```javascript
let currentDate = new Date();
```

This creates a new `Date` object with the current date and time.

You can set specific parts of the date and time using various methods of the `Date` object:

- `**setFullYear(year[, month[, day]])`:** Sets the full year (four digits for dates between year 1000 and 9999) for a specified date according to local time. Optionally you can also set the month and day of the month.

```javascript
currentDate.setFullYear(2023);
```

- `**setMonth(monthIndex[, day]):**` Sets the month for a specified date according to local time. Optionally you can also set the day of the month.

```javascript
currentDate.setMonth(11); // December, as JavaScript counts months from 0 to 11.
```

- `**setDate(dayValue):**` Sets the day of the month for a specified date according to local time.

```javascript
currentDate.setDate(31);
```

- `**setHours(hoursValue[, minutes[, seconds[, milliseconds]]]):**` Sets the hours for a specified date according to local time, and returns the number of milliseconds since January 1, 1970 00:00:00 UTC until the time represented by the updated Date instance.

```javascript
currentDate.setHours(23);
```

- **setMinutes(minutesValue[, seconds[, milliseconds]]):** Sets the minutes for a specified date according to local time.

```javascript
currentDate.setMinutes(59);
```

- **setSeconds(secondsValue[, milliseconds]):** Sets the seconds for a specified date according to local time.

```javascript
currentDate.setSeconds(59);
```

- **setMilliseconds(millisecondsValue):** Sets the milliseconds for a specified date according to local time.

```javascript
currentDate.setMilliseconds(999);
```

These methods allow you to set the current date and time, or any part of it, in JavaScript. You can then use this information as needed in your program. For example, you might use it to timestamp user actions or calculate durations.

______________________________________________________________________


## Related : 

- [[Get Date And Time]].
- [[Set Date & Time]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-08 13:42 
  
  
   ## Modification date :
   
   Thursday 8th February 2024 13:42:16