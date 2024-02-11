
### Status: #week-02 

### Tags: #JS, #EWS 

## Topic 1: 

String syntax refers to the way strings are represented and written in JavaScript. In JavaScript, strings are sequences of characters enclosed within single quotes (`'`) or double quotes (`"`). For example:

```javascript
let message1 = 'Hello, World!';
let message2 = "Welcome to JavaScript!";
```

Both single quotes and double quotes can be used interchangeably to define strings. However, it is important to be consistent in choosing one style throughout your codebase.

Character escape sequences are special combinations of characters that are used to represent certain characters that cannot be directly included in a string. They begin with a backslash (`\`) followed by a specific character or code. Here are some commonly used escape sequences:

- `\'`: Single quote character.
- `\"`: Double quote character.
- `\\`: Backslash character.
- `\n`: Newline character.
- `\r`: Carriage return character.
- `\t`: Tab character.
- `\b`: Backspace character.
- `\f`: Form feed character.

Here's an example that demonstrates the use of character escape sequences:

```javascript
let message = 'I\'m using a single quote in this string.';
console.log(message); // Output: I'm using a single quote in this string.

let message = "She said, \"Hello!\"";
console.log(message); // Output: She said, "Hello!"

let path = "C:\\Users\\Username\\Documents";
console.log(path); // Output: C:\Users\Username\Documents


let multiLineText = "This is line 1.\nThis is line 2.";
console.log(multiLineText);
/*
Output:
This is line 1.
This is line 2.
*/

let text = "Hello\rWorld";
console.log(text); // Output: World

let indentedText = "This\tis\tindented.";
console.log(indentedText); // Output: This    is    indented.


let text = "Hello\bWorld";
console.log(text); // Output: HellWorld

let text = "Hello\fWorld";
console.log(text);
/*
Output:
Hello
     World
*/
```

In this example, the first string `message` includes a double quote character within the string, which is escaped using `\"`. The second string `multiLineMessage` contains a newline character represented by `\n`. The third string `tabbedMessage` includes a tab character represented by `\t`.

Character escape sequences allow you to include special characters and control characters within strings, enhancing their flexibility and expressiveness.

______________________________________________________________________


## Related : 

- [[Variables Introduction]].

## Reference: 

1.  [Lesson - 14 On YT](https://www.youtube.com/watch?v=TzWla9f9VCY).


---

  ## Creation date: 
  
  2023-08-27 09:57 
  
  
   ## Modification date :
   
   Sunday 27th August 2023 10:09:21