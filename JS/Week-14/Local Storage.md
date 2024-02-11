
### Status: #week-14

### Tags: #EWS  , #Programming 

This note covers the use of the **Browser Object Model (BOM)** and **Local Storage** in JavaScript, including methods for setting, getting, and removing items, as well as additional information about Local Storage. It also includes code for setting the background color of a webpage using a value from Local Storage. Remember, Local Storage data has no expiration time, and it persists across both HTTP and HTTPS protocols, as well as in private browsing tabs.

```javascript
/*
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

// Set
window.localStorage.setItem("color", "#F00");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

// Get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

// Remove One
// window.localStorage.removeItem("color");

// Remove All
// window.localStorage.clear();

// Get Key
console.log(window.localStorage.key(0));

// Set Color In Page
document.body.style.backgroundColor = window.localStorage.getItem("color");

console.log(window.localStorage);
console.log(typeof window.localStorage);
```


______________________________________________________________________


## Related : 

- [[What Is BOM]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-01-10 15:10 
  
  
   ## Modification date :
   
   Thursday 11th January 2024 14:39:30