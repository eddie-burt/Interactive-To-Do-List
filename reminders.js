let remNumber = 0;
let reminderNames = [];
let totalList = []; // Changed from object to empty array

let itemIndex = [];
let timeIndex = [];

function askQuestion() {
    let timeInput = prompt("What is the reminders time (Use a 24 Hr time)?");
    let userInput = prompt("What is the reminders Name?");
    if (timeInput && userInput) {
        newReminder(timeInput, userInput);
    }
}

function newReminder(remTime, remText) {
    // Create new reminder object and add to totalList
    let newReminderObj = {
        time: remTime,
        text: remText
    };
    totalList.push(newReminderObj);
    
    console.log("Total List:", totalList);
    
    // Update arrays
    remNumber++;
    reminderNames.push(remText);
    itemIndex.push(remText);
    timeIndex.push(remTime);
    
    console.log("Reminder Number:", remNumber);
    console.log("Reminder Names:", reminderNames);
    console.log("Item Index:", itemIndex);
    console.log("Time Index:", timeIndex);
    
    // Display all reminders in sorted order
    displaySortedReminders();
}

function convertTimeToNumber(timeStr) {
    // Convert time like "14:30" to 1430 for easy comparison
    return parseInt(timeStr.replace(':', ''));
}

function displaySortedReminders() {
    console.log("Before sorting:", totalList);
    
    // Sort totalList by time
    totalList.sort((a, b) => {
        return convertTimeToNumber(a.time) - convertTimeToNumber(b.time);
    });
    
    console.log("After sorting:", totalList);
    
    // Clear existing display
    document.getElementById("container").innerHTML = "";
    
    // Redisplay in sorted order
    totalList.forEach(reminder => {
        let myList = document.getElementById("container");
        let newRemItem = document.createElement("div");
        
        // Clean the time string for use as CSS class
        let cleanTime = reminder.time.replace(/[^a-zA-Z0-9]/g, '-');
        newRemItem.classList.add("card-" + cleanTime);
        newRemItem.setAttribute("id", "card");
        
        newRemItem.textContent = reminder.time + ": " + reminder.text;
        
        myList.appendChild(newRemItem);
    });
}