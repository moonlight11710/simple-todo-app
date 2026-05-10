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

  
  const li = document.createElement("li");

  
  const span = document.createElement("span");
  span.textContent = taskText;
  span.classList.add("task-text");

  
  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("task-buttons");

  
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✓";
  completeBtn.classList.add("complete-btn");

  completeBtn.addEventListener("click", function () {
    span.classList.toggle("completed");
  });

  
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });
  
  buttonsDiv.appendChild(completeBtn);
  buttonsDiv.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(buttonsDiv);

  taskList.appendChild(li);

  taskInput.value = "";
}
