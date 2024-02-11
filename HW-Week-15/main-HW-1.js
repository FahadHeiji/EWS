// Q-01:
console.log("Q-01:");
let fonts = document.querySelector(".fonts");
let sizes = document.querySelector(".font-size");
let colors = document.querySelector(".colors");

function onChange(selector, proparty) {
    selector.onchange = () => {

        window.localStorage.setItem(`${proparty}`, selector.value);
        document.body.style[`${proparty}`] = `${selector.value}`;
    }
};
function bodyStyles(proparty) {
    document.body.style[`${proparty}`] = window.localStorage.getItem(`${proparty}`);
};

function updateSelected(selector,proparty)
{
    selector.value = window.localStorage.getItem(`${proparty}`);
}
// change styles on runtime:
onChange(fonts, "fontFamily");
onChange(sizes, "fontSize");
onChange(colors, "color");
// get body style from localStorge:
bodyStyles("fontFamily");
bodyStyles("fontSize");
bodyStyles("color");

// update selected styles from LocalStorge:
updateSelected(fonts, "fontFamily");
updateSelected(sizes, "fontSize");
updateSelected(colors, "color");



