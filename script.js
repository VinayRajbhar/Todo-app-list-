// JavaScript code for the TODO List App

// Function to handle the form submission and add a new task
function addTask(event) {
  event.preventDefault();

  // Get the input values from the form
  const description = document.querySelector('textarea[name="desc"]').value;
  const category = document.querySelector('#category').value;
  const dueDate = document.querySelector('input[name="date"]').value;

  // Create a new task card with the provided details
  const newTaskCard = document.createElement('div');
  newTaskCard.classList.add('card', 'task-card');

  const tickBox = document.createElement('div');
  tickBox.classList.add('tick-box');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('select-task');
  tickBox.appendChild(checkbox);

  const taskBody = document.createElement('div');
  taskBody.classList.add('card-body', 'task-body');
  const taskTitle = document.createElement('h5');
  taskTitle.classList.add('card-title');
  taskTitle.textContent = description;
  const taskCategory = document.createElement('p');
  taskCategory.classList.add('text-muted');
  taskCategory.textContent = category;
  const taskDueDate = document.createElement('p');
  taskDueDate.classList.add('text-muted');
  taskDueDate.innerHTML = `<i class="far fa-calendar-alt"></i> Due Date: ${dueDate}`;

  taskBody.appendChild(taskTitle);
  taskBody.appendChild(taskCategory);
  taskBody.appendChild(taskDueDate);

  newTaskCard.appendChild(tickBox);
  newTaskCard.appendChild(taskBody);

  // Add the new task card to the container
  const container = document.getElementById('container');
  container.appendChild(newTaskCard);

  // Clear the form inputs after adding the task
  document.querySelector('textarea[name="desc"]').value = '';
  document.querySelector('#category').value = 'Choose a category';
  document.querySelector('input[name="date"]').value = '';
}

// Function to handle task deletion
function deleteTask(event) {
  event.preventDefault();

  // Get all checkboxes that are checked
  const checkedCheckboxes = document.querySelectorAll('.select-task:checked');

  // Remove the parent task cards of the checked checkboxes
  checkedCheckboxes.forEach((checkbox) => {
    const taskCard = checkbox.closest('.task-card');
    taskCard.remove();
  });
}

// Attach event listeners to the form submit buttons
const addTaskForm = document.querySelector('form[action="/add-task"]');
addTaskForm.addEventListener('submit', addTask);

const deleteTaskForm = document.querySelector('form[action="/delete-task"]');
deleteTaskForm.addEventListener('submit', deleteTask);
