let story = "It was 94 fahrenheit outside, so insertx went for a walk.When they got to inserty , they stared in horror for a few moments, then insertz . Bob saw the whole thing, but was not surprised— insertx weighs 300 pounds, and it was a hot day. ";

let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let insertY = ["the soup kitchen", "Disneyland", " the White House"];
let insertZ = ["spontaneously combusted ", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

//dom
let inputText = document.querySelector("#name");
let checker = document.querySelector("#uk");
let content = document.querySelector("#content");
let name, newStory, x, y, z;


function result() {
    name = "bob";
    newStory = story;
    x = insertX[Math.floor(Math.random() * insertX.length)];
    y = insertY[Math.floor(Math.random() * insertY.length)];
    z = insertZ[Math.floor(Math.random() * insertZ.length)];
    newStory = newStory.replace("insertx", x);
    newStory = newStory.replace("inserty", y);
    newStory = newStory.replace("insertz", z);
    newStory = newStory.replace("insertx", x);
    if (inputText.value) {
        name = inputText.value;
        newStory = newStory.replace("Bob", name);
    }
    if (document.querySelector("#uk").checked) {
        let weight = 300 / 14;
        let temp = 94 / 3
        weight = Math.round(weight);
        temperature = Math.ceil(temp);
        weight = weight + " stones";
        temp = temp + " centigrade";
        newStory = newStory.replace("94 fahrenheit", temp);
        newStory = newStory.replace("300 pounds", weight);
    }
    content.textContent = newStory;
}