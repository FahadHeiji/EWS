
### Status: #week-06

### Tags: #EWS  , #Programming 


## 

```JS
/*

  Loop Challenge

*/

  

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];

let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

  

document.write(`<div>We Have ${myAdmins.length} Admins</div>`);

  
  
  

for (let i = 0; i < myAdmins.length; i++) {

    let li = 1;

    if (myAdmins[i] === "Stop" || myAdmins[i] === "stop") {

        break;

    }

    document.write(`<hr>`);

    document.write(`<div>`);

    document.write(`<p>The Admin For Team ${i + 1} Is ${myAdmins[i]}</p>`);

    document.write(`<h2>Team Member:</h2>`);

    for (let j = 0; j < myEmployees.length; j++) {

        if (myAdmins[i][0] === myEmployees[j][0]) {

            document.write(`<p>- ${li} ${myEmployees[j]}</p>`);

            li++;

        }

    }

    document.write(`</div>`);

}
````



______________________________________________________________________


## Related : 

- 

## Reference: 

1.  [CodePen](https://codepen.io/Fahad-Mohamed/pen/BabNWqv).

---

  ## Creation date: 
  
  2023-12-14 16:00 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 16:47:17