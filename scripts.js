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