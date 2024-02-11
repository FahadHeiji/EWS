
### Status: #week-01 

### Tags: #JS, #Assignments

## Assignment 1: 

### You have more than one code, all of them do the same job. Write a comment with multiple lines explaining in English what is the code that will not work, mentioning the reason.


Code:

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Learn JavaScript</title>
    <script>
      // This code will make Error cuz the element has not been created yet.
      document.getElementById("el").style.color = "red";
    </script>
    <script>
      // This code will run with no Errors - cuz the event.
      window.onload = function () {
        document.getElementById("el").style.color = "red";
      };
    </script>
  </head>
  <body>
    <h1 id="el">Page Title</h1>
    <script>
      // This code will run with no Errors - cuz the element already created.
      document.getElementById("el").style.color = "red";
    </script>
  </body>
</html>
````



## Assignment 2: 

Create the element in the image inside the page with JavaScript.

- The element type is h1.

- CSS properties are as follows and must be added via JavaScript

codes:

CSS: 

````
color: blue;
font-size: 80px;
font-weight: bold;
text-align: center;
font-family: Arial
````
```
```

```javascript
let element = document.createElement("h1");

element.textContent = "Elzero";

element.style.cssText = "color: blue; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial";

document.body.appendChild(element);
```



## Assignment 3: 

Print a message in the console "Elzero Web School"

- The colors are Red Green Blue.
- Font size is 40px.
- The word Web do it in bold.


Code : 

````JavaScript
console.log("%cElzero %cWeb %cShcool", "color: red; font-size: 40px;" , "color: green; font-size: 40px; font-weight: bold;" , "color: white; background-color: blue; font-size: 40px;");

````

## Assignment 4: 

-  Print a message in the console as shown in the picture.
- [The image](https://elzero.org/wp-content/uploads/2021/05/js-bootcamp-assigns-3.png).

- Look For [[Console Group]].


Code : 

````JavaScript
console.group("G-01");

console.log("log-01");

console.log("log-02");

console.group("Sub-Group");

console.log("log-01");

console.log("log-02");

console.group("Sub-Sub-Group");

console.log("log-01");

console.log("log-02");

console.groupEnd();

console.groupEnd();

console.groupEnd();

  

console.group("G-02");

console.log("log-01");

console.log("log-02");

````


## Assignment 5: 

-  Print a message in the console as shown in the picture.
- [The image](https://elzero.org/wp-content/uploads/2021/05/js-bootcamp-assigns-4.png).


Code : 

````JavaScript
console.table(["Fahad","Heiji","Speaks", "Japanese", "Jozu"]);

````

## Assignment 6: 

-  You have the following code in the js file, you are required to cancel the execution of the code by what you have learned.


Code : 

````JavaScript
console.log("Iam In Console");
document.write("Iam In Page");

````

````JavaScript
/*
console.log("Iam In Console");
document.write("Iam In Page");
*/

````

## Questions and Areas to Review

- \[Question 1\]: 


- \[Question 2\]: 


- \[Question 3\]: 



## Personal Insights and Summary

- it was a bit hard, but i enjoyed.

______________________________________________________________________


## Related : 

- 

## Reference: 

1.  [Assignment- week 01](https://elzero.org/javascript-bootcamp-assignments-lesson-from-001-to-009/).


---

  ## Creation date: 
  
  2023-08-23 17:45 
  
  
   ## Modification date :
   
   Wednesday 23rd August 2023 19:07:40
