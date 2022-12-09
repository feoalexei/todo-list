// selectors
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const addBtn = document.querySelector(".add-btn");
const taskList = document.quertSelector(".task-list");

// event listeners
form.addEventListener('click', addTask)


// functions
function addTask(e) {
    e.preventDefault();
    taskList.insertAdjacentHTML("beforeend",taskItemMarkup()); 
}

function taskItemMarkup() {
    return `
    <li class="item">
        <input class="checkbox" type="checkbox">
        <span class="task"></span>
        <button class="delete-btn"></button>
    </li>`
}