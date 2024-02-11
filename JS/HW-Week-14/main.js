
// let user = "Fahad";

// console.log(`Hello Mom`);
// let handler = setTimeout((user) => {
//     console.log(`Hello ${user}`)
// }, 5000, user);

// let cleear = function () {
//     clearTimeout(handler);
// }

// cleear();

// let btn = document.querySelector("button");

// window.onscroll = () => {
//     if (window.scrollY >= 1000) {
//         btn.style.display = "block";
//     }
//     else {
//         btn.style.display = "none";
//     }
// }

// btn.onclick = () => {
//     window.scrollTo({
//         left: 0,
//         top: 0,
//         behavior: "smooth",
//     });
// }

// Q-01:
console.log("Q-01:");

// let msg = window.prompt("Print Number From – To", "Example: 5-20");
// let from = Number(parseInt(msg));
// msg = msg.substring(msg.indexOf("-") + 1);
// let to = Number(parseInt(msg));

// for (let i = Math.min(from, to); i <= Math.max(from, to); i++) {

//     console.log(i);

// }

// Q-02: 
console.log("Q-02:");

// let popup = () => {
//     // Create Elements
//     let msgBox = document.createElement("div");
//     let title = document.createElement("h2");
//     let subTitle = document.createElement("p");
//     let btn = document.createElement("button");

//     // Add Text
//     title.innerText = "Welecom";
//     subTitle.innerText = "Welecom To Elzero Web School";
//     btn.innerText = "X";

//     // Add Style 
//     msgBox.style.backgroundColor = "#ddd";
//     msgBox.style.textAlign = "center";
//     msgBox.style.padding = "15px";
//     msgBox.style.marginTop = "50%";
//     msgBox.style.marginInline = "25%";
//     msgBox.style.position = "relative";
//     msgBox.style.fontFamily = "sans-serif";
//     msgBox.style.transition = "0.3s";

//     btn.style.position = "absolute";
//     btn.style.top = "-8px";
//     btn.style.right = "-8px";
//     btn.style.borderRadius = "50%";
//     btn.style.border = "none";
//     btn.style.backgroundColor = "red";
//     btn.style.color = "white";
//     btn.style.fontSize = "13px";
//     btn.style.padding = "8px";
//     btn.style.fontWeight = "bold";
//     btn.style.cursor ="pointer";




//     // Append Elements
//     msgBox.prepend(title);
//     msgBox.append(subTitle);
//     msgBox.append(btn);
//     document.body.prepend(msgBox);
//     btn.onclick = () =>  document.body.removeChild(msgBox);
// }

// let goo = setTimeout(popup, 5000);

// Q-03: 
console.log("Q-03:");

// //  Create Elements
// let msgBox = document.createElement("div");


// // Add Text
// msgBox.innerText = "10";


// // Add Style 
// msgBox.style.backgroundColor = "#ddd";
// msgBox.style.textAlign = "center";
// msgBox.style.padding = "15px";
// msgBox.style.marginTop = "50%";
// msgBox.style.marginInline = "25%";
// msgBox.style.position = "relative";
// msgBox.style.fontFamily = "sans-serif";
// msgBox.style.transition = "0.3s";

// document.body.prepend(msgBox);

// let counter = Number(parseInt(msgBox.innerText));

// let timmer = setInterval(() => {
//     msgBox.innerText = `${counter}`;
//     if (counter === 0) {
    //         clearInterval(timmer);
    //     }
    //     counter--;
// }, 1000);

// // Q-04: 
// console.log("Q-04:");

// //  Create Elements
// let msgBox = document.createElement("div");


// // Add Text
// msgBox.innerText = "10";


// // Add Style 
// msgBox.style.backgroundColor = "#ddd";
// msgBox.style.textAlign = "center";
// msgBox.style.padding = "15px";
// msgBox.style.marginTop = "50%";
// msgBox.style.marginInline = "25%";
// msgBox.style.position = "relative";
// msgBox.style.fontFamily = "sans-serif";
// msgBox.style.transition = "0.3s";

// document.body.prepend(msgBox);

// let counter = Number(parseInt(msgBox.innerText));

// let timmer = setInterval(() => {
//     msgBox.innerText = `${counter}`;
//     if (counter === 0) {
//         clearInterval(timmer);
//         window.location.href ="https://elzero.org";
//     }
//     counter--;
// }, 1000);


// Q-04: 
console.log("Q-05:");

//  Create Elements
let msgBox = document.createElement("div");


// Add Text
msgBox.innerText = "10";


// Add Style 
msgBox.style.backgroundColor = "#ddd";
msgBox.style.textAlign = "center";
msgBox.style.padding = "15px";
msgBox.style.marginTop = "50%";
msgBox.style.marginInline = "25%";
msgBox.style.position = "relative";
msgBox.style.fontFamily = "sans-serif";
msgBox.style.transition = "0.3s";

document.body.prepend(msgBox);

let counter = Number(parseInt(msgBox.innerText));

let timmer = setInterval(() => {
    msgBox.innerText = `${counter}`;
    if (counter === 5) {
        clearInterval(timmer);
        window.open("https://elzero.org", "_blank","width=400,height=400,left=200,top=10",false);
    }
    counter--;
}, 1000);