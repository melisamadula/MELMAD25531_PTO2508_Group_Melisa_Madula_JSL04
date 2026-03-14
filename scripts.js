/*
// Starting with connecting the JavaScript files
import { initialTasks } from "./initialData.js ";

// Function to create a task element
function createTaskElement(task) {
    const taskElement = document.createElement("div");
    taskDiv.className = "task-div";
    taskDiv.textContent = task.title;
    taskDiv.dataset.taskId = task.id;

    taskDiv.addEventListener("click", () => {
        openTaskDetails(task);
    });

    return taskDiv;
}
*/
/*
// Get the modal
var modal = document.getElementById("task-modal");

// Get the button that opens the modal
var form = document.getElementById("task-form");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

// When the user clicks on the button, open the modal
form.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
*/
/* Commented out
import { initialTasks } from "./initialData.js"; // Removed extra space

function createTaskElement(task) {
    // Changed taskDiv to taskElement to match the declaration
    const taskElement = document.createElement("div");                
    taskElement.className = "task-div";
    taskElement.textContent = task.title;
    taskElement.dataset.taskId = task.id; // Changed taskld to taskId for consistency

    taskElement.addEventListener("click", () => {                
        // Ensure this function is defined elsewhere
        openTaskDetails(task);                
    });
    
    return taskElement;
}
*/