// selectors
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const addBtn = document.querySelector('.add-btn');
const taskList = document.querySelector('.task-list');

// event listeners
addBtn.addEventListener('click', addTask);

// functions
function addTask(e) {
  e.preventDefault();
  const inputValue = e.target.previousElementSibling.value;
  taskList.insertAdjacentHTML('beforeend', taskItemMarkup(inputValue));
}

function taskItemMarkup(value) {
  return `
    <li class="task-item">
        <input class="checkbox" type="checkbox">
        <span class="task">${value}</span>
        <button class="delete-btn">Delete</button>
    </li>`;
}
