
### Status: #week-19

### Tags: #EWS  , #Programming 

In JavaScript, generator functions can delegate to other generators, or even regular iterable objects. This is done using the `yield*` expression.

Here’s an example:

```javascript
function* generatorA() {
  yield 'Hello';
  yield* generatorB(); // Delegating to generatorB
  yield 'World';
}

function* generatorB() {
  yield ' from';
  yield ' generatorB';
}

let generator = generatorA();

console.log(generator.next().value); // Outputs: 'Hello'
console.log(generator.next().value); // Outputs: ' from'
console.log(generator.next().value); // Outputs: ' generatorB'
console.log(generator.next().value); // Outputs: 'World'
```

In this example, `generatorA` is delegating to `generatorB` using the `yield*` expression. When the JavaScript engine encounters the `yield*` expression, it starts executing `generatorB` to its end, before resuming `generatorA`.

This feature allows you to compose generators and create more complex iteration sequences. It’s a powerful tool in your JavaScript toolbox, especially when working with asynchronous code or complex data structures.

Remember that the `yield*` expression can also be used with any iterable object, not just other generators. This means you can use it with built-in data structures like arrays or strings, or even custom iterable objects. For example:

```javascript
function* generator() {
  yield* [1, 2, 3];
}

let gen = generator();

console.log(gen.next().value); // Outputs: 1
console.log(gen.next().value); // Outputs: 2
console.log(gen.next().value); // Outputs: 3
```

In this example, the generator is delegating to an array, which is an iterable object. The generator yields each element of the array in sequence. This is a very convenient way to iterate over complex data structures.

______________________________________________________________________


## Related : 

- [[Generator Function Introduction]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-08 14:04 
  
  
   ## Modification date :
   
   Thursday 8th February 2024 14:04:18