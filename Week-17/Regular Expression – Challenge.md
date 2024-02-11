
### Status: #week-17

### Tags: #EWS  , #Programming 



```JS
/*
  Regular Expression
  - Challenge
*/

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re = /(https?:\/\/)?(www\.)?\w{1,256}\.\w{3,12}(\S+)?/g;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
````



______________________________________________________________________


## Related : 

- [CodePen](https://codepen.io/Fahad-Mohamed/pen/mdoRZNX?editors=1111).

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-01-16 17:51 
  
  
   ## Modification date :
   
   Tuesday 16th January 2024 17:52:15