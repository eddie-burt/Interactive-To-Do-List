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
     scheduleNotification(remTime, remText);
}

function scheduleNotification(remTime, remText) {
  const now = new Date();
  const [hours, minutes] = remTime.split(':').map(Number);
  const reminderTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hours,
    minutes
  );

  // Calculate time difference in ms
  const timeDiff = reminderTime - now;

  if (timeDiff > 0) {
    setTimeout(() => {
      showNotification("⏰ Reminder", {
        body: remText,
        icon: "/icon.png" // Add your app icon
      });
    }, timeDiff);
  }
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

function deleteReminder(){
    let deleteRemTime = prompt("What is the reminders time?");
    let deleteRem = document.querySelector(".card-"+deleteRemTime);
    console.log("Item to delete:"+deleteRem)
deleteRem.style.display = 'none';
console.log("Deleted Item")
}




//deepseek notifs

// Request permission when page loads
document.addEventListener('DOMContentLoaded', function() {
  if (!("Notification" in window)) {
    console.log("Browser doesn't support notifications");
  } else {
    Notification.requestPermission().then(permission => {
      console.log("Notification permission:", permission);
    });
  }
});

// Function to show notification
function showNotification(title, options) {
  if (Notification.permission === "granted") {
    new Notification(title, options);
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        new Notification(title, options);
      }
    });
  }
}