
### Status: #week-01  

### Tags: #JS #EWS 

## Topic 1:  Console

- The console is a helpful tool for developers to monitor and debug JavaScript code in the context of a web browser environment.

- The console<span style="color:#ebcb00"> is not part of the JavaScript </span> language itself but is provided as a feature of web browsers for debugging and development purposes. <span style="color:#00b050">It is accessible through the JavaScript Console</span> [[API]], which includes various methods for logging output and interacting with the console.

#### Examples:

```javascript
// this will print message inside the Console
console.log("log");

// this will print an error inside the Console
console.error("Error");
````

## Topic 2: Styling - console

- To style specific thing inside `console.log()` use the <span style="color:#00b050">Directive</span> `%c` , otherwise use normal styling methods.

#### Examples:

```javascript
// The styling will start after %c .
console.log("Hi Heiji, %cIm from js file", "color: blue; font size: 20px;")

// Two Diff Styiling in same message.
console.log("%cHi Heiji, %cIm from js file", "color: blue; font size: 20px;", "color: green; font size: 20px;")
```

## Questions and Areas to Review

- \[Question 1\]: What's APIs ?

A: 
- API stands for<span style="color:#00b050"> Application Programming Interface</span>. It is a set of rules, protocols, and tools that<span style="color:#ebcb00"> allows different software applications</span> to <span style="color:#0070c0">communicate and interact with each other</span>. 

- APIs define the methods, data formats, and conventions that developers <span style="color:#ebcb00">can use to access and utilize the functionality</span> provided by a particular software system, service, or platform.

- \[Question 2\]: Why The Console is part of Console API and Not In JavaScript?

A: 
 - The <span style="color:#00b050">console functionality</span> into an API <span style="color:#ebcb00">provided by the environment</span>, rather than including it directly in the JavaScript language, it <span style="color:#ebcb00">allows for flexibility and compatibility across different environments</span>. Each environment can provide its own implementation of the console API, tailored to its specific features and requirements.

 - The console is part of the console API, <span style="color:#f00000">not the JavaScript language itself</span>, to allow for flexibility and compatibility across different execution environments and to provide additional features and <span style="color:#ebcb00">capabilities specific to those environments</span>.


- \[Question 3\]: 



## Personal Insights and Summary

Console is Part of API environment Called Console API.

______________________________________________________________________


## Related : 

- [[API]]
- [[Work With Chrome Developer Tools]]

## Reference: 

1.  [Lesson - 08 On YT](https://www.youtube.com/watch?v=g0SBnmqOvgQ).


---

  ## Creation date: 
  
  2023-08-23 13:40 
  
  
   ## Modification date :
   
   Wednesday 23rd August 2023 15:27:31