
### Status: #week-08

### Tags: #EWS  , #Programming 


## 

```JS  

// Q-01:

console.log("Q-01:");

  

function getDetails(zName, zAge, zCountry) {

    function namePattern(zName) {

        return `${zName.substring(0, zName.indexOf(" "))} ${zName.substring(zName.indexOf(" ") + 1, zName.indexOf(" ") + 2).toUpperCase()}.`;

        // Osama Mohamed => Osama M.

        // Ahmed ali => Ahmed A.

    }

    function ageWithMessage(zAge) {

        return `Your Age Is ${parseInt(zAge)}`;

        // 38 Is My Age => Your Age Is 38

        // 32 Is The Age => Your Age Is 32

    }

    function countryTwoLetters(zCountry) {

        return `You Live In ${zCountry.substring(0, 2).toUpperCase()}`;

        // Egypt => You Live In EG

        // Syria => You Live In SY

    }

    function fullDetails() {

        return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;

    }

    return fullDetails(); // Do Not Edit This

}

  

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));

// Hello Osama M., Your Age Is 38, You Live In EG

  

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));

// Hello Ahmed A., Your Age Is 32, You Live In SY

  
  

// Q-02:

console.log("Q-02:");

  
  

let itsMe = () => `Iam A Normal Function`;

  
  

console.log(itsMe()); // Iam A Normal Function

  

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

  
  

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

  
  
  

// Q-03:

console.log("Q-03:");

  

let checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

  

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000

console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

  
  

// Q-04:

console.log("Q-04:");

  

function specialMix(...data) {

    let result = 0;

    for (let i = 0; i < data.length; i++) {

        if (Number.isNaN(parseInt(data[i]))) {

            continue;

        }

  

         result += parseInt(data[i]);

  

    }

    if (result === 0) {

        return "All Is Strings"

    }

  

    return result;

}

  

console.log(specialMix(10, 20, 30)); // 60

console.log(specialMix("10Test", "Testing", "20Cool")); // 30

console.log(specialMix("Testing", "10Testing", "40Cool")); // 50

console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
````



______________________________________________________________________


## Related : 

- 

## Reference: 

1.  


---

  ## Creation date: 
  
  2023-12-28 17:33 
  
  
   ## Modification date :
   
   Thursday 28th December 2023 17:34:14