let exampleNumber = 1
let exampleMax = 10
let myNewTask = document.createElement("li")
let itemIndex = []
let exampleMin = 1

function newItem(){
 if(exampleNumber == 1){
    
 }
let userInput = prompt("What would you like to make your Items title?")
    // 1. Get a reference to the unordered list
  let myList = document.getElementById('wrap');

  // 2. Create a new list item element
  let newListItem = document.createElement('div');
newListItem.classList.add("card"+(exampleNumber))
newListItem.setAttribute("id", "card")

  // 3. Set the content of the new list item
  newListItem.textContent = userInput;

  // 4. Append the new list item to the unordered list
  myList.appendChild(newListItem);
     exampleNumber++
itemIndex.push(userInput)
console.log(itemIndex)
   
}




 function deleteItem() {
  let userInputDelete = prompt("Which number item would you like to delete?");
  let classDelete = "card" + userInputDelete;
  let finalDelete = document.getElementsByClassName(classDelete);

  if (finalDelete.length > 0 && finalDelete[0]) {
    finalDelete[0].remove();
    exampleNumber--;
    itemIndex.splice(userInputDelete - 1, 1);

    // Reassign classes after deletion
    let allCards = document.querySelectorAll("#wrap > div");
    allCards.forEach((card, index) => {
      card.className = ""; // Clear existing classes
      card.classList.add("card" + (index + 1)); // Assign new class based on index
    });
  } else {
    console.warn("Could not find the element to delete with class:", classDelete);
  }
}