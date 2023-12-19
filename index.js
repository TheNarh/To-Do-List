function addTask() {
  const taskInput = document.querySelector("#newTask");
  const inputText = taskInput.value.trim();

  if (inputText === "") return;

  const taskList = document.querySelector("#taskList");

  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const taskLabel = document.createElement("label");
  const deleteBtn = document.createElement("button");

  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  taskLabel.innerText = inputText;
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(checkbox);
  li.appendChild(taskLabel);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
