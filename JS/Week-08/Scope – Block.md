
### Status: #week-08

### Tags: #EWS  , #Programming 


- **Block Scope**: In JavaScript, each code block (defined by `{}`) has its own scope when you use `let` and `const`. This is known as block scope. Variables declared with `var` do not have block scope, they are scoped to the nearest function block.
    
    - In your code, within the `if` block, `x` is declared with `let`, so it has a block scope. The `x` inside the `if` block is different from the `x` declared outside the `if` block.
        
        ```javascript
        var x = 10;
        
        if (10 === 10) {
          let x = 50;
          console.log(`From If Block ${x}`);
        }
        
        console.log(`From Global ${x}`);
        ```
        
    - When you log `x` inside the `if` block, it will display `50` because it refers to the `x` declared inside the `if` block. But when you log `x` outside the `if` block, it will display `10` because it refers to the `x` declared in the global scope.


______________________________________________________________________


## Related : 

- [[Scope – Global And Local]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 17:27 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 17:27:54