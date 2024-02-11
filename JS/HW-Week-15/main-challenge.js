
// Select Needed Tags
let form = document.querySelector("form");
let task = document.querySelector("form :nth-child(1)");
let addTask = document.querySelector("form :nth-child(2)");
let tasks = document.querySelector(".tasks");
let taskObj = []; 

if (window.localStorage.getItem("tasks")) {
    taskObj = JSON.parse(`${window.localStorage.getItem("tasks")}`);
    taskObj.forEach((task) => {
        let ele = document.createElement("div");
        ele.id = `${task.id}`;
        ele.className = `task-${task.id}`;
        ele.innerHTML = `${task.title}`;
        document.querySelector(".tasks").append(ele);
    });

    let arr = Array.from(document.querySelector(".tasks").children);
    arr.forEach((di) => {
        di.children[0].addEventListener("click", () => {
            taskObj = taskObj.filter((ele) => deletElemet(ele, di));

            di.remove();
            window.localStorage.tasks = JSON.stringify(taskObj);
        })
    });
} 

// Save & creat Tasks

let creatEle = (task) => {
    let ele = document.createElement("div");
    ele.id = `${task.id}`;
    ele.className = `task-${task.id}`;
    ele.innerHTML = `${task.title}`;
    tasks.append(ele);
}

let saveTask = () => {
    let taskOb = {
        id: taskObj.length + 1,
        title: `${task.value} <span class="spn-delete">Delete</span>`,
    };
    taskObj.push(taskOb);
    creatEle(taskObj[taskObj.length - 1]);
    window.localStorage.setItem("tasks", JSON.stringify(taskObj));
}

// Delete  task
let deletElemet = (ele, di) => {
    if (ele["id"] !== Number(di.id)) {
        return ele;
    }
}

//  Add Task On click
addTask.addEventListener("click", () => {
    if (task.value !== "") {
        saveTask();
    }
});
form.onsubmit = (e) => {
    //  Delete Task On Click
    let arr = Array.from(tasks.children);
    arr.forEach((di) => {

        di.children[0].addEventListener("click", () => {
            taskObj = taskObj.filter((ele) => deletElemet(ele, di));
            di.remove();
            window.localStorage.tasks = JSON.stringify(taskObj);
        })
    });

    e.preventDefault();
}
