// Import initial data (assuming initialData.js exports an array)
import { initialTasks } from "./initialData.js";

const modal = document.getElementById("task-modal");
const closeBtn = document.getElementById("close-modal-btn");
const modalTitle = document.getElementById("task-title");
const modalDesc = document.getElementById("task-desc");
const taskStatus = document.getElementById("task-status");

function openTaskModal(taskElement) {
  modalTitle.value = taskElement.textContent.trim();
  modalDesc.value = taskElement.dataset.desc || "";
  const columnStatus = taskElement.closest(".column-div").dataset.status || "";
  taskStatus.value = columnStatus;
  modal.showModal();
}

function setupTaskClicks() {
  const tasks = document.querySelectorAll(".task-div");
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].addEventListener("click", function () {
      openTaskModal(tasks[i]);
    });
  }
}

setupTaskClicks();

closeBtn.addEventListener("click", function () {
  modal.close();
});
  
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}