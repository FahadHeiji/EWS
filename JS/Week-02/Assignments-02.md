
### Status: #week-02

### Tags: #JS, #EWS 

## Topic 1: 

- Create two variables named Number One and Number Two using the proper method and criteria for naming variables.

The first variable has a value of 10 and the data type is Number.

The second variable has a value of 20 and the data type is Number.

In the first line, print the result 1020 in the console using the regular Concatenate method.

In the second line, print the data type 1020 in the console using the regular Concatenate method.

On the third line, print the result 1020 in the console using the Template Literals in Concatenate.

On the fourth line, print the data type 1020 in the console using the Template Literals in the Concatenate setting.

On the fifth and sixth lines, without repeating the Console.log, print the number 20 and the number 10 below it using the regular Concatenate.

On the seventh and eighth lines, without repeating the Console.log, print the number 20 and the number 10 below it using the Template Literals.

Solution:

```javascript
let numberOne = 10, numberTwo = 20;

  

console.log(numberOne+""+numberTwo);

  

console.log(typeof(numberOne +""+ numberTwo));

  

console.log(`${numberOne}${numberTwo}`);

  

console.log(typeof(`${numberOne + numberTwo}`));

  

console.log(numberTwo + "\n" + numberOne);

  

console.log(`${numberTwo}

${numberOne}`);
````

## Topic 2: 

- The JS file must not be modified at all.

You should not write any JavaScript code anywhere to access what is required.

You must make this code run and output the existing result.

#### Solution:

```javascript
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
// Solution:
<div id="elzero"></div>
```

### Topic 3 :

- Print the following result without using the Template Literals method in Concatenate


```javascript
`I'm In
\\
Love \\ """ '''
++ With ++
\"""\"""
""JavaScript""``
```

### Solution : 

```javascript
let con = "\`I\'m In\n \\\\ \n Love \\\\ \"\"\" \'\'\' \n ++ With ++ \n \\\"\"\"\\\"\"\" \n \"\"JavaScript\"\"\`\`";

console.log(con);
```



```javascript
let a = 21, b = 20;

console.log("_" + (`${a}_${b}`).repeat(4)+ "_");
```

- Replace the question mark with one of the Arithmetic Operators to produce the desired result.

Modification of numbers is not permitted.

The required result is zero.

```javascript
// Replace ? With Arithmetic Operators

console.log((10 * 20) * 15 % 3 * 190 * 10 * 400); // 0
```

- Use the value of the variable to get the desired result in five different ways.

You can use everything you learned previously to come up with what is required.

It is not allowed to use any numbers at all, and you can use Boolean Values.

Each method must be completely different from the other.

The required result is number 6.

```javascript
let num = 3;

  

// Solution One

console.log(num + num); // 6

  

// Solution Two

console.log(num + ++num - true  ); // 6

  

// Soultion Three

console.log(++num + true); // 6

  

// Soultion Four

console.log(++num); // 6

  

// Solution Five

console.log(++num - true); // 6

  

// Solution Six

console.log(--num); // 6
```


```javascript
let num = "10";

  

// Solution One

console.log(+num + num++); // 20

  

// Solution Two

console.log(--num + num); // 20

  

// Solution Three

console.log(num / num * num + num++); // 20

  

// Solution Four

console.log(num - --num + --num + ++num ); // 20

  

// Solution Five

console.log(+`${num + num}` + 0); // 20
```


```javascript
let points = 10;

  

++points;

++points;

++points;

  

console.log(points); // 13

  

// Write Your Code Here

--points;

--points;

--points;

--points;

--points;

console.log(points); // 8;
```

## Questions and Areas to Review

- \[Question 1\]: 


- \[Question 2\]: 


- \[Question 3\]: 



## Personal Insights and Summary



______________________________________________________________________


## Related : 

- 

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-08-27 15:32 
  
  
   ## Modification date :
   
   Saturday 2nd September 2023 20:08:29