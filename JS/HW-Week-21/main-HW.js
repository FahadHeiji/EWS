// Q-2
let articleRe = new XMLHttpRequest();
articleRe.open("GET", "articles.json"); // Q-1 : articles.json 
articleRe.send();
articleRe.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(this.responseText);

    setTimeout(() => {
      console.log("DATA Loaded");
    }, 0);
    let mainData;
    mainData = JSON.parse(articleRe.responseText);
    console.log(mainData, "by");
    let div = document.createElement("div");
    div.id = "data";
    for (let i = 0; i < mainData.length; i++) {
      // Q-3
      mainData[i]["category"] = "All";
      
      // Q-4
      let ele = document.createElement("div");
      ele.innerHTML = `
      <h2>${mainData[i]["title"]}</h2>
      <p>${mainData[i]["aouther"]}</p>
      <p>${mainData[i]["description"]}</p>
      <p>${mainData[i]["category"]}</p>
      `;
      div.append(ele);
    }
    document.body.append(div);
    console.log(mainData, "by");
    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);
  }
};
