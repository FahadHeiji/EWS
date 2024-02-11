
### Status: #week-01  

### Tags: #JS #EWS 

## Topic 1: JS src File Position 

- You Can Put script Tag in side The Head as Internal Or External File (<span style="color:#ebcb00">You Must use JS Event To Avoid Errors</span>).

- Inside body Tag (<span style="color:#ebcb00">Above The Closing Tag - aka <span style="color:#0070c0">Last Childe</span></span>).

- The <span style="color:#00b050; font-weight: bold">Best Practice</span> is To put it inside The body Tag.

#### Examples:

```javascript
// If You Put JS src File In side The Head Tag, This Example Will Show an Error in The Consle.
document.querySelector("h1").style.color = "blue";

// To Fix It , Use The Onload Event :
window.onload = function () {

    document.querySelector("h1").style.color = "blue";

}
````

## Questions and Areas to Review

- \[Question 1\]: What's The Event In JS ?

A: Events in JavaScript are actions or occurrences that happen in the browser, such as<span style="color:#ebcb00"> clicking a button or loading a page</span>. They allow you to respond to user interactions.



## Personal Insights and Summary

src file can put in (head Or body Tags) Depends on The Projects.
______________________________________________________________________


## Related : 

- 

## Reference: 

1.  [Lesson - 05 On YT](https://www.youtube.com/watch?v=XQCG-zf71Mk).


---

  ## Creation date: 
  
  2023-08-23 11:16 
  
  
   ## Modification date :
   
   Wednesday 23rd August 2023 11:16:36