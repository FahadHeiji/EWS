
### Status: #week-11

### Tags: #EWS  , #Programming 


## 

```JS
  

// intalis Elements

const style = document.createElement("style");

// // Header:

let header = document.createElement("header");

let logo = document.createElement("div");

let nav = document.createElement("nav");

let ul = document.createElement("ul");

let li = document.createElement("li");

let lis = [li, li.cloneNode(), li.cloneNode(), li.cloneNode()];

document.head.appendChild(style);

document.body.prepend(header);

header.append(logo);

logo.after(nav);

nav.append(ul);

lis.forEach((li) => ul.append(li));

  
  

// //Main:

let main = document.createElement("main");

  

header.after(main);

  

// Fotter:

let footer = document.createElement("footer");

let link = document.createElement("a");

  

main.after(footer);

  

// Boxes (intalis &  Attributes & Classes & text & Styling)

  

let creatBoxes = function (num) {

    for (let i = 0; i < num; i++) {

        let box = document.createElement("div");

        box.innerHTML = `<span style="margin-bottom: 5px; font-weight: bold; font-size: 1rem;">${i + 1}</span>

       <span style="font-size: 0.5rem; color: hsl(350 4% 64% / 1);">Product</span>`;

  

        box.className = "box";

        box.id = `product-${i + 1}`;

        box.style.backgroundColor = "white";

        box.style.display = "flex";

        box.style.flexDirection = "column";

        box.style.alignItems = "center";

        box.style.justifyContent = "center";

        box.style.padding = "20px";

        main.append(box);

    }

};

  

creatBoxes(15);

  

// Attributes & Classes

header.className = "header";

logo.className = "logo";

nav.className = "menu";

main.className = "Content";

footer.className = "footer";

link.className = "link";

lis.forEach((li) => li.className = "li");

  
  

// Text & Styling

  

document.title = "DOM Challenge";

  

style.textContent = `

*{

    margin: 0;

    padding: 0;

    box-sizing: border-box;

}`;

document.body.style.display = "flex";

document.body.style.flexDirection = "column";

document.body.style.minHeight = "100vh";

document.body.style.fontFamily = "'Space Mono', monospace";

  
  

// //Header:

header.style.display = "flex";

header.style.justifyContent = "space-between";

header.style.alignItems = "center";

header.style.height = "45.5px";

header.style.marginInline = "20px";

  

logo.textContent = "DOM";

logo.style.fontWeight = "bold";

logo.style.color = "hsl(153.12deg 60.39% 40.59%)";

  

nav.style.height = "45.5px";

  

ul.style.display = "flex";

ul.style.justifyContent = "space-between";

ul.style.alignItems = "center";

ul.style.listStyle = "none";

ul.style.width = "100%";

ul.style.height = "100%";

  
  
  

lis.forEach((li, i) => {

    let texts = ["Home", "About", "Service", "Contact"];

    li.textContent = texts[i];

    li.style.padding = "16px 5px";

    li.style.fontSize = "0.7rem";

    li.style.marginRight = "10px";

    li.style.color = "hsl(350 4% 64% / 1)";

    li.style.transition = "0.3s";

    li.style.cursor = "pointer";

  

    li.addEventListener("mouseover", () => {

        li.style.backgroundColor = "hsl(153.12deg 60.39% 40.59%)";

        li.style.paddingRight = "10px";

        li.style.color = "white";

    });

    li.addEventListener("mouseout", () => {

        li.style.backgroundColor = "";

        li.style.paddingRight = "5px";

        li.style.color = "hsl(350 4% 64% / 1)";

  

    });

});

  

// //Main:

main.style = `

display: grid;

grid-template-columns: repeat(3, 1fr);

grid-template-rows: repeat(auto, 1fr);

flex: 1;

gap: 10px;

background-color: hsl(0deg 0% 92.55%);

padding: 10px;

`

  
  

// //Footer:

link.href = "https://twitter.com/DC_fahadDev?t=cUSQ4Dzbm9oB-TWabxjmQg&s=09";

link.target = "_blank";

link.style.textDecoration = "underline";

link.textContent = "FAHAD";

link.style.color = "white";

  

footer.innerHTML = `Copyright &copy; 2023 | Powered by `;

footer.style.padding = "20px";

footer.style.marginTop = "auto";

footer.style.textAlign = "center";

footer.style.background = "hsl(153.12deg 60.39% 40.59%)";

footer.appendChild(link);
````



______________________________________________________________________


## Related : 

- 

## Reference: 

1.  [CodePen](https://codepen.io/Fahad-Mohamed/pen/qBvdrPR).


---

  ## Creation date: 
  
  2023-12-28 19:11 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 19:12:43