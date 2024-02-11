console.groupCollapsed();
let jObj = [
  {
    userId: 10,
    title: "Article Title Number 1",
    description: "Article Description Number 1",
  },
  {
    userId: 5,
    title: "Article Title Number 2",
    description: "Article Description Number 2",
  },
  {
    userId: 5,
    title: "Article Title Number 3",
    description: "Article Description Number 3",
  },
  {
    userId: 5,
    title: "Article Title Number 4",
    description: "Article Description Number 4",
  },
  {
    userId: 5,
    title: "Article Title Number 5",
    description: "Article Description Number 5",
  },
  {
    userId: 5,
    title: "Article Title Number 6",
    description: "Article Description Number 6",
  },
  {
    userId: 25,
    title: "Article Title Number 7",
    description: "Article Description Number 7",
  },
  {
    userId: 25,
    title: "Article Title Number 8",
    description: "Article Description Number 8",
  },
  {
    userId: 15,
    title: "Article Title Number 9",
    description: "Article Description Number 9",
  },
  {
    userId: 15,
    title: "Article Title Number 10",
    description: "Article Description Number 10",
  },
];

let nPro = new Promise((res, rej) => {
  if (jObj.length > 0) {
    res(jObj);
  } else {
    rej(Error("No Data"));
  }
}).then((articles) => {
  articles.length = 5;
  console.log(articles);
  articles.forEach((ele)=> {
    let div = document.createElement("div");
    div.innerHTML = `
    <h3>${ele["title"]}</h3>
    <p>${ele["description"]}</p>`;
    document.body.prepend(div);
  })
});

console.groupEnd();


console.group();

async function getData(){

    let nFetch = await fetch("api.json");
    jObj = await nFetch.json();
    jObj.length = 5;
    jObj.forEach((ele)=> {
        let div = document.createElement("div");
        div.innerHTML = `
        <h3>${ele["title"]}</h3>
        <p>${ele["description"]}</p>`;
        document.body.append(div);
      })
    console.log(jObj);
}

getData();
console.groupEnd();
