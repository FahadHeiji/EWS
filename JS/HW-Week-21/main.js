let userStr = '{"userName": "user01", "id": 423}';
console.log(userStr);
let userObj = JSON.parse(userStr);
console.log(userObj);
userObj["id"] = 10;
userObj["userName"] = "Ahmed";
let user = JSON.stringify(userObj);
console.log(userObj);

let gitRE = new XMLHttpRequest();
gitRE.open("GET","https://api.github.com/users/elzerowebschool/repos");
gitRE.send();

gitRE.onreadystatechange = function (){
    if(this.readyState === 4 && this.status === 200)
    {
        let gitObj = JSON.parse(this.responseText);
        for (let i = 0; i < gitObj.length; i++) {
            let div = document.createElement("div");
            let repoName = document.createTextNode(gitObj[i].full_name);
            div.append(repoName);
            document.body.append(div);
        }
    }
}

