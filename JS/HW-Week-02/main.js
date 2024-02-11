// Q-02:
let element = document.createElement("h1");
element.textContent = "Elzero";
element.style.cssText = "color: blue; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial";
document.body.appendChild(element);

// Q-03:
console.log("%cElzero %cWeb %cSchool", "color: red; font-size: 40px;", "color: green; font-weight: bold; font-size: 40px;", "color: white; font-size: 40px; background-color: blue; ");

// Q-04:

console.group("Group-01");
console.log("Message one");
console.log("Message two");
console.group("Chid-Group");
console.log("Message one");
console.group("Grand-Chid-Group");
console.log("Message two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group-02");
console.log("Message one");
console.log("Message two");

// Q-05
console.table(["Heiji","Conan","Ran","Kazoha","Akai"]);

// Q-6
// console.log("Iam In Console");
// document.write("Iam In Page");


