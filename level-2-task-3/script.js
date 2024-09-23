document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <span>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
        </span>
    `;
    document.getElementById('pendingTasks').appendChild(taskItem);
    taskInput.value = '';
}

function completeTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.querySelector('span').classList.add('completed');

    const completedTasks = document.getElementById('completedTasks');
    completedTasks.appendChild(taskItem);

    button.remove(); // Remove the complete button
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}
