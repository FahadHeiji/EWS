
### Status: #week-17

### Tags: #EWS  , #Programming 


[In JavaScript, regular expressions are often used for form validation to ensure that user input matches certain criteria](https://www.geeksforgeeks.org/how-to-validate-form-using-regular-expression-in-javascript/)[1](https://www.geeksforgeeks.org/how-to-validate-form-using-regular-expression-in-javascript/)[2](https://stackoverflow.com/questions/54360867/form-validation-using-javascript-regular-expression). Here’s an example of how you might use regular expressions to validate a form:

```javascript
function validateForm() {
    // Get form values
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Define regular expressions
    let emailRegEx = /^\\S+@\\S+\\.\\S+$/; // Matches any non-whitespace character followed by '@', followed by any non-whitespace character, followed by '.', followed by any non-whitespace character
    let passwordRegEx = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // Matches at least one digit, one lowercase letter, one uppercase letter, and is at least 8 characters long

    // Validate email
    if (!emailRegEx.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate password
    if (!passwordRegEx.test(password)) {
        alert('Password must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 8 characters long.');
        return false;
    }

    // If all validations pass
    return true;
}
```

[In this example, the `validateForm` function retrieves the values of the email and password fields from the form, then uses regular expressions to validate these values](https://www.geeksforgeeks.org/how-to-validate-form-using-regular-expression-in-javascript/)[1](https://www.geeksforgeeks.org/how-to-validate-form-using-regular-expression-in-javascript/)[2](https://stackoverflow.com/questions/54360867/form-validation-using-javascript-regular-expression). [The `test` method of the `RegExp` object is used to test whether the form values match the regular expressions](https://www.geeksforgeeks.org/how-to-validate-form-using-regular-expression-in-javascript/)[1](https://www.geeksforgeeks.org/how-to-validate-form-using-regular-expression-in-javascript/)[2](https://stackoverflow.com/questions/54360867/form-validation-using-javascript-regular-expression). [If a value does not match its corresponding regular expression, an alert is displayed and the function returns `false`, preventing the form from being submitted](https://www.geeksforgeeks.org/how-to-validate-form-using-regular-expression-in-javascript/)[1](https://www.geeksforgeeks.org/how-to-validate-form-using-regular-expression-in-javascript/)[2](https://stackoverflow.com/questions/54360867/form-validation-using-javascript-regular-expression).

[This is a basic example and real-world form validation can be much more complex, involving many different fields and validation criteria](https://www.geeksforgeeks.org/how-to-validate-form-using-regular-expression-in-javascript/)[1](https://www.geeksforgeeks.org/how-to-validate-form-using-regular-expression-in-javascript/)[2](https://stackoverflow.com/questions/54360867/form-validation-using-javascript-regular-expression).



______________________________________________________________________


## Related : 

- [[Validate Form And Prevent Default]].

## Reference: 

1.  


---

  ## Creation date: 
  
  2024-01-16 18:52 
  
  
   ## Modification date :
   
   Tuesday 16th January 2024 18:57:38