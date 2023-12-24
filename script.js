const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", buttonClick);

function buttonClick(){
const currentValue = input.value;
input.value = "";

const listItem = document.createElement("li");
const span = document.createElement("span");
const newButton = document.createElement("button")

span.textContent = currentValue;
newButton.textContent = "Delete";

newButton.addEventListener("click", buttonClickRemove)
function buttonClickRemove(){
    listItem.remove(); 
 }
input.focus();

listItem.append(span, newButton);
list.append(listItem);
}











