const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {

  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Create task item
  const li = document.createElement("li");

  // Task text
  const span = document.createElement("span");
  span.textContent = taskText;
  span.classList.add("task-text");

  // Buttons container
  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("task-buttons");

  // Complete button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✓";
  completeBtn.classList.add("complete-btn");

  completeBtn.addEventListener("click", function () {
    span.classList.toggle("completed");
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // Add buttons
  buttonsDiv.appendChild(completeBtn);
  buttonsDiv.appendChild(deleteBtn);

  // Add text and buttons to li
  li.appendChild(span);
  li.appendChild(buttonsDiv);

  // Add li to ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}