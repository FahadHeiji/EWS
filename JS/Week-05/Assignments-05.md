
### Status: #week-05

### Tags: #EWS  , #Programming 



```JS
  

// Q-01:

  

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];

let num = 3;

  

// Method 1

console.log(myFriends.slice(0, myFriends.length - true)); // ["Ahmed", "Elham", "Osama"];

myFriends.pop();

// Method 2

console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

  
  

// Q-02:

  

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

  

// Write Your Code Here

  

friends.shift()

friends.pop()

  

console.log(friends); // ["Eman", "Osama"]

  

// Q-03:

  

let arrOne = ["C", "D", "X"];

let arrTwo = ["A", "B", "Z"];

let finalArr = [];

  

// Write One Single Line Of Code

  

finalArr = finalArr.concat(arrTwo.pop(), arrOne.reverse(), arrTwo);

  

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

  
  

// Q-04:

let website = "Go";

let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

  

console.log(words[words.length - true][0].substring(true + true).toUpperCase()); // ZERO

  

// Q-05:

  

let needle = "JS";

let haystack = ["PHP", "JS", "Python"];

  

// Write 3 Solutions

  

if (haystack.includes(needle)) {

  

    console.log("Found");

}

if (haystack.indexOf(needle) != -1) {

  

    console.log("Found");

}

if (haystack.lastIndexOf(needle) !== -1) {

  

    console.log("Found");

}

  

// Q-06:

let arr1 = ["A", "C", "X"];

let arr2 = ["D", "E", "F", "Y"];

let allArrs = [];

  

// Your Code Here

  

allArrs.push(arr2.pop().toLowerCase());

allArrs.push(arr1.pop().toLowerCase());

allArrs.push(arr2.pop().toLowerCase());

allArrs = allArrs.reverse().join("");

console.log(allArrs); // fxy````



______________________________________________________________________


## Related : 

- 

## Reference: 

1.  


---

  ## Creation date: 
  
  <%tp.file.creation_date()%> 
  
  
   ## Modification date :
   
   <%tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss")%>