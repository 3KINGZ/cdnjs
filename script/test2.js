let cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];
let list = document.querySelector('ul');
let input;
let lower;
let firstLetter;
let capitalized;
let result;
for (i = 0; i < cities.length; i++) {
    input = cities[i];
    lower = input.toLowerCase();
    firstLetter = lower.slice(0, 1);
    capitalized = lower.replace(firstLetter, firstLetter.toUpperCase());
    result = capitalized;
    let listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
}