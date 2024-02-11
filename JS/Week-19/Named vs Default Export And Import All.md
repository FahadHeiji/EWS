
### Status: #week-19

### Tags: #EWS  , #Programming 

In JavaScript, you can use both named and default exports in a module, and you can also import all exports at once. Here’s how:

- **Named Exports**: You can have multiple named exports in a module. Named exports are useful to export several values. During the import, one will be able to use the same name to refer to the corresponding value.

```javascript
// myModule.js
export const myValue = 'Hello, World!';
export function myFunction() { /* Function body... */ }
```

```javascript
// anotherFile.js
import { myValue, myFunction } from './myModule.js';
```

- **Default Exports**: Each module can have one default export. A default export can be a function, a class, an object or anything else. This value is to be considered as the “main” exported value since it will be the simplest to import.

```javascript
// myModule.js
export default function myFunction() { /* Function body... */ }
```

```javascript
// anotherFile.js
import myFunction from './myModule.js';
```

- **Import All**: You can import all exports from a module at once using the `*` syntax. This will create an object that contains all exports, and you can access them as properties of this object.

```javascript
// anotherFile.js
import * as myModule from './myModule.js';

console.log(myModule.myValue);
myModule.myFunction();
```

In this example, all exports from `myModule.js` are imported as properties of the `myModule` object.

Remember, you can use both named and default exports in the same module, and you can also mix different import styles. The choice between named and default exports depends on what you want to export and how you want to use it in other parts of your code. As a good practice, use named exports for utility modules that export several functions, and default exports for modules that export a single functionality.

Also, be aware that using `import * as myModule` can make your code less clear because it’s not immediately obvious which functions or values are being used from `myModule`. It’s generally better to explicitly import only the values you need. However, `import *` can be useful in some cases, such as when you’re working with large libraries or when you need to import many values from a module.

______________________________________________________________________


## Related : 

- [[Modules Import And Export]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-02-08 14:16 
  
  
   ## Modification date :
   
   Thursday 8th February 2024 14:16:04