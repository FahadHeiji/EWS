
### Status: #week-04

### Tags: #EWS  , #Programming 




```JavaScript

/*

  Switch Challenge

*/

  

let job = "Manager";

let salary = 0;

  

if (job === "Manager") {

    salary = 8000;

} else if (job === "IT" || job === "Support") {

    salary = 6000;

} else if (job === "Developer" || job === "Designer") {

    salary = 7000;

} else {

    salary = 4000;

}

  

switch (job) {

    case "IT":

    case "Support":

        salary = 6000;

        console.log(job, salary);

        break;

    case "Developer":

    case "Designer":

        console.log(job, salary);

        salary = 7000;

        break;

    case "Manager":

        console.log(job, salary);

        salary = 8000;

        break;

  

    default:

        console.log(job, salary);

        salary = 4000;

        break;

}

  
  
  

/*

  If Challenge

*/

  

let holidays = 1;

let money = 0;

if (holidays === 0) {

    money = 5000;

    console.log(`My Money is ${money}`);

}

else if (holidays === 1 || holidays === 2) {

    money = 3000;

    console.log(`My Money is ${money}`);

}

else if (holidays === 3) {

    money = 2000;

    console.log(`My Money is ${money}`);

}

else if (holidays === 4) {

    money = 1000;

    console.log(`My Money is ${money}`);

}

else if (holidays === 5) {

    money = 0;

    console.log(`My Money is ${money}`);

}

else {

    money = 0;

    console.log(`My Money is ${money}`)

}

  

switch (holidays) {

    case 0:

        money = 5000;

        console.log(`My Money is ${money}`);

        break;

    case 1:

    case 2:

        money = 3000;

        console.log(`My Money is ${money}`);

        break;

    case 3:

        money = 2000;

        console.log(`My Money is ${money}`);

        break;

    case 4:

        money = 1000;

        console.log(`My Money is ${money}`);

        break;

    case 5:

        money = 0;

        console.log(`My Money is ${money}`);

        break;

    default:

        money = 0;

        console.log(`My Money is ${money}`);

}

````


______________________________________________________________________


## Related : 

- 

## Reference: 

1.  [CodePen](https://codepen.io/Fahad-Mohamed/pen/NWJqpMJ).


---

  ## Creation date: 
  
  2023-12-12 17:14 
  
  
   ## Modification date :
   
   Tuesday 12th December 2023 17:14:21