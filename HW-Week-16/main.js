let players = ["Messi", "CR7", "RL9", "AI8"];

console.log(players);

const [p1, p2, p3, p4] = players;

console.log(p1, p2, p3, p4);

let pc = {
    cpu: "i9-14054H",
    gpu: "RTX-2090",
    ram: "32GB",
    ssd: "1TB"
};

console.log(pc);

({ cpu, gpu, ram, ssd } = pc);
console.log(cpu, gpu, ram, ssd);

const colors = {
    red: "#f00",
    blue: "#00f",
    green: "#0f0",
    kimidori: {
        halfGreen: "#080",
        halfYellow: "#040",
    }
};

console.log(colors);

const { red: aka, blue: ao, green: midori } = colors;

console.log(aka, ao, midori);

const { halfGreen: dori, halfYellow: ki } = colors.kimidori;

console.log(dori, ki);

/*
  Destructuring
  - Challenge
*/

let chosen = 1;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

if (chosen === 1) {
    let [{ title: n, age: a, available: ava, skills: [, lastSkill] }] = myFriends;
    console.log(`Your Name is (${n}), Your Age is (${a}) You're (${ava ? "Available" : "NOT Available"}), Your Last Skill is (${lastSkill})`);
} else if (chosen === 2) {
    let [, { title: n, age: a, available: ava, skills: [, lastSkill] }] = myFriends;
    console.log(`Your Name is (${n}), Your Age is (${a}) You're (${ava ? "Available" : "NOT Available"}), Your Last Skill is (${lastSkill})`);
} else if (chosen == 3) {
    let [, , { title: n, age: a, available: ava, skills: [, lastSkill] }] = myFriends;
    console.log(`Your Name is (${n}), Your Age is (${a}) You're (${ava ? "Available" : "NOT Available"}), Your Last Skill is (${lastSkill})`);
} else {
    console.log(`The Value of chosen is Out of The Range, choose between 1 - ${myFriends.length}`);
}
