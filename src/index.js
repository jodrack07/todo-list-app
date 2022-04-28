import './style.css';

const taskInput = document.querySelector('.add-input');
const taskBox = document.querySelector('.task-box');

let editId;
let isEditedTodo = false;

// get data from the localstorage
let todos = JSON.parse(localStorage.getItem('todo-list')) || [];

function showTodos() {
  taskBox.innerText = '';
  todos.forEach((todo, index) => {
    // apply the completed status iff the task/todo is completed
    let isCompleted = todo.completed ? 'completed' : '';
    let checked = isCompleted === 'completed' ? 'checked' : '';
    taskBox.innerHTML += `
            <li class="task">
          <label for="${index}">
            <input type="checkbox" ${checked} id="${index}" class="input"/>
            <p class="${isCompleted}">${todo.description}</p>
          </label>
          <div class="actions">
            <i class="fa-solid fa-ellipsis"></i>
            <ul class="sub-actions">
              <li data-info="${index}, ${todo.description}" class="edit"><i class="fa-solid fa-pen-to-square" id="edit"></i>Edit</li>
              <li data-id="${index}" class="delete"><i class="fa-solid fa-trash-can" id="delete"></i>Delete</li>
            </ul>
          </div>
        </li>  
      `;
  });
}

showTodos();

const showSubActions = (selectedTodo) => {
  let taskMenu = selectedTodo.parentElement.lastElementChild;
  taskMenu.classList.add('show');
  document.addEventListener('click', (e) => {
    if (e.target.tagName !== 'I' || e.target !== selectedTodo) {
      taskMenu.classList.remove('show');
    }
  });
};

const editTask = (id, taskDescription) => {
  editId = id;
  isEditedTodo = true;
  // put the todo description into the input field
  taskInput.value = taskDescription;
};

function deleteTask(id) {
  // remove one todo from the specified id
  todos.splice(id, 1);
  localStorage.setItem('todo-list', JSON.stringify(todos));
  showTodos();
}
