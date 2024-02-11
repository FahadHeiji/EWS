console.log("#".repeat(20));
// Q-01:
console.log("Q-01:");

class Car {
  // Proparties:

  constructor(name, model, price) {
    this.name = name;
    this.model = model;
    this.price = price;
  }

  // Methods
  run() {
    return "Car Is Running Now";
  }

  stop() {
    return "Car Is Stopped";
  }
}

let car01 = new Car("BMW", "2022", "15K");
let car02 = new Car("Toyota", "2024", "2K");
let car03 = new Car("MG", "2012", "5K");

console.log(
  `Car One Name is ${car02.name} And Model Is ${car02.model} And Price Is ${car02.price}`
);
console.log(car02.run());
// Needed Output

//   "Car One Name Is MG And Model Is 2022 And Price Is 420000"
//   "Car Is Running Now"

console.log("#".repeat(20));

console.log("#".repeat(20));
// Q-02:
console.log("Q-02:");

class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

// Write Tablet Class Here
class Tablet extends Phone {
  constructor(name, serial, price, size) {
    super(name, serial, price);
    this.size = size || "Unkown";
  }

  // Methods
  fullDetails() {
    return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`;
  }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

console.log("#".repeat(20));

console.log("#".repeat(20));
// Q-03:
console.log("Q-03:");

// Edit The Class
class User {
  #c;
  #re = /\d{4}-\d{4}-\d{4}-\d{4}/g;
  constructor(username, card) {
    this.u = username;
    this.#c = this.#re.test(card) ? card : this.convertToCard(card);
    this.showData = `Hello ${
      this.u
    } Your Credit Card Number Is ${this.getCard()}`;
  }

  // Methods
  getCard() {
    return this.#c;
  }

  convertToCard(card) {
    let newCard = Number.parseInt(card).toString();
    newCard = `${newCard.substring(0, 4)}-${newCard.substring(
      4,
      8
    )}-${newCard.substring(8, 12)}-${newCard.substring(12, 16)}`;

    return newCard;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined

console.log("#".repeat(20));

console.log("#".repeat(20));
// Q-04:
console.log("Q-04:");

// Write Your Code Here

String.prototype.addLove = () => `I Love Elzero Web School`;

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School

console.log("#".repeat(20));

console.log("#".repeat(20));
// Q-05:
console.log("Q-05:");

const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

Object.defineProperty(myObj, "score", {
  writable: false,
});

// Write Your Code Here

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

("username => Elzero");
("score => 1000");
//   {username: 'Elzero', score: 1000, id: 100}

console.log("#".repeat(20));
