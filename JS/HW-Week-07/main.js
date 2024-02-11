// Q-01:

console.log("Q-01:");

let start = 10;

let end = 100;

let exclude = 40;

for (let i = (start / start); i <= (end / start); i++) {

    if ((i * start) !== (exclude)) {

        console.log(i * start);

    }

}

// Output

// 10

// 20

// 30

// 50

// 60

// 70

// 80

// 90

// 100



// Q-02:

console.log("Q-02:");



start = 10;

end = 0;

stop = 3;



for (let i = start; i > end; i--) {

    console.log(i);

    if (i === stop) break;

}

// Output

// 10

// 09

// 08

// 07

// 06

// 05

// 04

// 03



// Q-03:

console.log("Q-03:");



start = 1;

end = 6;

let breaker = 2;



for (let i = start; i <= end; i++) {

    console.log(i);

    console.log(`--`, breaker);

    console.log(`--`, breaker + breaker);

}



// Output

// 1

// -- 2

// -- 4

// 2

// -- 2

// -- 4

// 3

// -- 2

// -- 4

// 4

// -- 2

// -- 4

// 5

// -- 2

// -- 4

// 6

// -- 2

// -- 4




// Q-04:

console.log("Q-04:");

let index = 10;

let jump = 2;



for (; ;) {

    console.log(index);

    index -= jump;

    if (index === jump) break;

}



// Output

// 10

// 8

// 6

// 4



// Q-05:

console.log("Q-05:");

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];

let letter = "a";

if (friends[0][0].toUpperCase() === letter.toUpperCase()) {

    console.log(`hi`);

}

for (let i = (li = friends.length - friends.length); i < friends.length; i++) {

    li++;

    if (friends[i][0].toUpperCase() === letter.toUpperCase()) {

        li--;

        continue;

    }

    console.log(`${li} => ${friends[i]}`);

}

// Output

// "1 => Sayed"

// "2 => Eman"

// "3 => Mahmoud"

// "4 => Osama"

// "5 => Sameh"




// Q-06

console.log("Q-06:");



start = 0;

let swappedName = "elZerO";

for (let i = start; i < swappedName.length; i++) {

    if (swappedName[i] === swappedName[i].toLowerCase()) {

        swappedName = swappedName.substring(swappedName.length - swappedName.length, i) + swappedName[i].toUpperCase() + swappedName.substring(i + (swappedName.length / swappedName.length));

    } else {

        swappedName = swappedName.substring(swappedName.length - swappedName.length, i) + swappedName[i].toLowerCase() + swappedName.substring(i + (swappedName.length / swappedName.length));

    }

    console.log(swappedName);

}

// Output

"ELzERo"



// Q-07:

console.log("\nQ-07:\n");



start = 0;

let mix = [1, 2, 3, "A", "B", "C", 4];



for (let i = start; i < mix.length; i++) {

    if (typeof mix[i] === "string" || mix[i] === 1) {

        continue;

    }

    console.log(mix[i]);

}

// Output

// 2

// 3

// 4



// While - loop

// Q-01:

console.log("\nQ-01:\n");



friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];

index = 0;

let counter = 0;



while (index < friends.length) {

    if (typeof friends[index] !== "number" && friends[index][0] !== 'A') {

        counter++;

        console.log(`${counter} => ${friends[index]}`);

    }

    index++;

}

// Output

"1 => Sayed"

"2 => Mahmoud"