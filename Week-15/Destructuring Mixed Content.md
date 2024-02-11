
### Status: #week-15

### Tags: #EWS  , #Programming 



```JS
/*
  Destructuring
  - Destructuring Mixed Content
*/

const user = {
  theName: "Osama",
  theAge: 39,
  skills: ["HTML", "CSS", "JavaScript"],
  addresses: {
    egypt: "Cairo",
    ksa: "Riyadh",
  },
};

const {
  theName: n,
  theAge: a,
  skills: [, , three],
  addresses: { egypt: e },
} = user;

console.log(`Your Name Is: ${n}`);
console.log(`Your Age Is: ${a}`);
console.log(`Your Last Skill Is: ${three}`);
console.log(`Your Live In: ${e}`);
````



______________________________________________________________________


## Related : 

- [[Destructuring Objects Part 1]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-01-14 09:49 
  
  
   ## Modification date :
   
   Sunday 14th January 2024 09:50:38