
### Status: #week-15

### Tags: #EWS  , #Programming 


## 

```JS
/*

  Destructuring

  - Challenge

*/

  

let chosen = 2;

  

let myFriends = [

    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },

    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },

    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },

];

  

if (chosen === 1) {

    let [{ title: n, age: a, available: ava, skills: [, lastSkill] }] = myFriends;

    console.log(`Your Name is (${n}), Your Age is (${a}) You're (${ava ? "Available" : "NOT Available"}), Your Last Skill is (${lastSkill})`);

} else if (chosen === 2) {

    let [, { title: n, age: a, available: ava, skills: [, lastSkill] }] = myFriends;

    console.log(`Your Name is (${n}), Your Age is (${a}) You're (${ava ? "Available" : "NOT Available"}), Your Last Skill is (${lastSkill})`);

} else if (chosen == 3) {

    let [, , { title: n, age: a, available: ava, skills: [, lastSkill] }] = myFriends;

    console.log(`Your Name is (${n}), Your Age is (${a}) You're (${ava ? "Available" : "NOT Available"}), Your Last Skill is (${lastSkill})`);

} else {

    console.log(`The Value of chosen is Out of The Range, choose between 1 - ${myFriends.length}`);

}
````



______________________________________________________________________


## Related : 

- [CodePen](https://codepen.io/Fahad-Mohamed/pen/BabppNm?editors=1111).

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-01-14 09:50 
  
  
   ## Modification date :
   
   Monday 15th January 2024 13:33:13