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




//for the pomodoro timer

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function pomTimerAsk(){
let workLength = prompt("What would you like to make the work time?(mins)")
let restLength = prompt("What would you like to make the rest time?(mins)")

pomTimer(workLength, restLength)
}

function pomTimer(wLengthmin, rLengthmin){
  let pomDisplay = document.getElementById("pomodoro");
  let workDisplay = document.getElementById("workTime");
  let restDisplay = document.getElementById("restTime");
   
    let wLengthsec = wLengthmin*60
    window.rLengthsec = rLengthmin*60
    console.log(wLengthsec)
    workDisplay.textContent = wLengthmin
    restDisplay.textContent = rLengthmin

loopWithDelay(wLengthsec, workDisplay)
  }


async function loopWithDelay(loopLength, txtDisplay){
    for(i=loopLength;i>=0;i--){

        let timeDisplay = (Math.floor(i/60))+":"+((i) % 60)
console.log(timeDisplay)
    txtDisplay.textContent = timeDisplay
    await delay(1000)
    if(i<61){
      txtDisplay.style.color = "red"
    }
  }
  txtDisplay.style.display = "none";
  
  restCountStarter()
}

function restCountStarter(){
   let restDisplay = document.getElementById("restTime")
   loopWithDelay(rLengthsec, restDisplay)

}