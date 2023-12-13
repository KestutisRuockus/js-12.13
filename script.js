console.log([document]);

const divas = document.querySelector(".pienas");
divas.className = "trys du pienas";
console.log([divas]);

// const spanas = divas.children[2];
// console.log(spanas);

const buttonas = divas.children[2].children[0];

buttonas.innerText = "kitas tekstas";
