let ADD = document.getElementById("counting");
let SAVED = document.getElementById("cta");

let count = 0;
let add;

function button1() {
    count += 1;
    ADD.textContent = count;
    console.log(count)
}

function save() {
    let saved = count + " - ";
    SAVED.textContent += saved;
    ADD.textContent = 0;
    count = 0
}
