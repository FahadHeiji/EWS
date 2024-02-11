let box = document.querySelector(".box");
let colors = document.querySelectorAll("ul li");

if (window.localStorage.getItem("color")) {
    box.style.backgroundColor = window.localStorage.getItem("color");
    colors.forEach((li)=>
    {
        li.classList.remove("active");
    });
   document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}

colors.forEach((li) => {
    
    li.addEventListener("click", (e) => {
        colors.forEach((li) =>
        {
            li.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        window.localStorage.setItem("color",e.currentTarget.dataset.color);
        box.style.backgroundColor = e.currentTarget.dataset.color;
    });
});




