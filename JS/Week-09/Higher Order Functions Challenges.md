
### Status: #week-09

### Tags: #EWS  , #Programming 


## 

```JS
/*

  Higher Order Functions Challenges

  

  You Can Use

  - ,

  - _

  - Space

  - True => 1 => One Time Only In The Code

  

  You Cannot Use

  - Numbers

  - Letters

  

  - You Must Use [Filter + Map + Reduce + Your Knowledge]

  - Order Is Not Important

  - All In One Chain

  

*/

  

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

  

let solution = myString.split("").filter((char) => !isNaN(char) || char.includes(',') || char.includes('_') ? "" : char).reduce((prechar, currentChar) => currentChar === currentChar.toLowerCase() ? `${prechar}${currentChar}` : `${prechar} ${currentChar}`).split(" ").map((char) => char.length > +true ? char : "").join(" ").trim();

  

console.log(solution); // Elzero Web School
````



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