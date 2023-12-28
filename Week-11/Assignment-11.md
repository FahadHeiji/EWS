
### Status: #week-11

### Tags: #EWS  , #Programming 


## 

```JS
  
  
  

// Q-01:

console.log("Q-01:");

  

let m1 = document.getElementById("elzero");

console.log(m1);

let m2 = document.getElementsByName("js");

console.log(m2[0]);

  

let m3 = document.getElementsByTagName("div");

console.log(m3[0]);

  

let m4 = document.getElementsByClassName("element");

console.log(m4[0]);

  

let m5 = document.body.firstElementChild;

  

console.log(m5);

  

let m6 = document.querySelector("#elzero");

console.log(m6);

  

let m7 = document.querySelector(".element");

console.log(m7);

  

let m8 = document.querySelector(`[name="js"]`);

console.log(m8);

  

let m9 = document.querySelector("div");

console.log(m9);

  

let m10 = document.querySelectorAll("#elzero");

console.log(m10[0]);

  

let m11 = document.querySelectorAll(".element");

console.log(m11[0]);

  

let m12 = document.querySelectorAll(`[name="js"]`);

console.log(m12[0]);

  

let m13 = document.querySelectorAll("div")[0];

console.log(m13);

  

let m14 = document.getElementsByTagNameNS("*","*");

  

console.log(m14[6]);

let m15 = document.body.children[0];

  

console.log(m15);

  
  

// Q-02:

console.log("Q-02:");

  

let imgs = document.images;

  

for (let i = 0; i < imgs.length; i++) {

    imgs[i].setAttribute("src", `https://elzero.org/wp-content/themes/elzero/imgs/logo.png`);

    imgs[i].setAttribute("alt", "Elzero Logo");

    imgs[i].setAttribute("style","background-color: blue");

}

  
  
  
  
  

// Q-03:

console.log("Q-03:");

  

let input = document.querySelector(`input`);

let result = document.querySelector(`.result`);

document.forms[0].style = `background-color: blue; padding: 10px; border: 3px dotted #0a0a23`;

  

result.style = `margin: 5px auto; color: #ddd`;

input.oninput = () => {

    result.innerHTML = `${input.value} USD Dollar = ${(input.value * 15.6).toFixed(2)} Egyptian Pound`

}

  
  
  
  
  
  

// Q-04:

console.log("Q-04:");

let divOne = document.querySelector(".one");

let divTwo = document.querySelector(".two");

  

divOne.title = divOne.className;

divTwo.title = divTwo.className;

  

let text1 = divTwo.innerHTML;

let text2 = divOne.innerHTML;

  

divOne.innerHTML = `${text1}`;

divTwo.innerHTML = `${text2} ${--text2.length}`;

  
  
  
  
  
  

// Q-05:

console.log("Q-05:");

  

let imgss = document.querySelector(".imgs").children;

  

for (let i = 0; i < imgss.length; i++) {

    if (imgss[i].hasAttribute("alt")) {

        imgss[i].alt = "Old";

    } else {

        imgss[i].alt = "Elzero New";

    }

}

console.log(imgss);

  

let form = document.forms[1];

let elementsNumber = document.querySelector(".input");

let elementText = document.querySelectorAll(`.input`)[1];

let elementType = document.querySelector(`select`);

let createElements = document.querySelector(`select + input`);

createElements

let results = document.getElementsByClassName("results")[0];

  

// Styling

  

form.style = `

display: flex;

flex-direction: column;

padding: 10px 90px;

gap: 10px;`

  

elementsNumber.style = `

padding: 3px;

width: 320px;

outline: none;

margin: 3px auto;` ;

  

elementText.style = `

padding: 3px;

width: 320px;

outline: none;

margin: 3px auto;`;

  

elementType.style = `

padding: 3px;

width: 330px;

outline: none;

margin: 3px auto;`;

  

createElements.style = `

background-color: #0a0a23;

color: #ddd;

width: 120px;

margin: auto;

border-radius: 9px;`;

  

results.style = `

display: grid;

grid-template-columns: repeat(3,1fr);

margin: 10px 0;

gap: 5px;

`;

  
  

// functionalty

  

let createElementss = function () {

    for (let i = 0; i < elementsNumber.value; i++) {

        let element = document.createElement(`${elementType.value.toLowerCase()}`);

        element.className = "box";

        element.title = "Element";

        element.id = `id-${i + 1}`;

        element.innerHTML = `${elementText.value}`;

        console.log();

        element.style = `

        background-color: ${elementType.value === "Div" ? "red" : "gray"};

        color: #eee;

        text-align: center;

        border-radius: 4px;

        padding: 5px 0`;

        results.appendChild(element);

    };

}

form.onsubmit = function (e) {

    e.preventDefault();

    if (results.children.length != 0) {

        results.innerHTML = "";

    };

  

    if (elementText.value !== "" && elementsNumber.value >= 1) {

        createElementss();

    }

  
  

}
````



______________________________________________________________________


## Related : 

- 

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 19:15 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 19:15:44