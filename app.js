const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const listItem = document.createElement("li");
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Create Edit Button with Icon
    const editButton = document.createElement("button");
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.className = "editButton";
    editButton.addEventListener("click", () => editTask(taskSpan, listItem, editButton));

    // Create Delete Button with Icon
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.className = "deleteButton";
    deleteButton.addEventListener("click", () => deleteTask(listItem));

    listItem.appendChild(taskSpan);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = "";
    taskInput.focus();
}

// Edit Task
function editTask(taskSpan, listItem, editButton) {
    const originalText = taskSpan.textContent;
    const input = document.createElement("input");
    input.type = "text";
    input.value = originalText;

    const saveButton = document.createElement("button");
    saveButton.innerHTML = '<i class="fas fa-save"></i>';
    saveButton.className = "editButton";
    saveButton.addEventListener("click", () => {
        taskSpan.textContent = input.value.trim();
        listItem.replaceChild(taskSpan, input);
        listItem.replaceChild(editButton, saveButton);
    });

    listItem.replaceChild(input, taskSpan);
    listItem.replaceChild(saveButton, editButton);
}

// Delete Task
function deleteTask(listItem) {
    taskList.removeChild(listItem);
}
