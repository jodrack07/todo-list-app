import './style.css';

const taskInput = document.querySelector('.add-input');
const taskBox = document.querySelector('.task-box');
const statuses = document.querySelectorAll('.input');

let editId;
let isEditedTodo = false;

// get data from the localstorage
let todos = JSON.parse(localStorage.getItem('todo-list')) || [];

taskInput.addEventListener('keyup', (e) => {
  let userTask = taskInput.value.trim();
  if (e.key === 'Enter' && userTask) {
    // fix the edit action
    if (!isEditedTodo) {
      let newTodo = {
        description: userTask,
        completed: false,
        index: todos.length + 1,
      };
      // add the new todo to the todo list
      todos.push(newTodo);
    } else {
      isEditedTodo = false;
      todos[editId].description = taskInput.value;
      location.reload();
    }

    taskInput.value = '';

    // update the todo
    localStorage.setItem('todo-list', JSON.stringify(todos));
    showTodos();
  }
});

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

const editButtons = document.querySelectorAll('.edit');
const deleteButtons = document.querySelectorAll('.delete');
const toggleButtons = document.querySelectorAll('.fa-ellipsis');

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

function updateStatus(selectedTodo) {
  // get tje paragraph
  let taskDescription = selectedTodo.parentElement.lastElementChild;
  if (selectedTodo.checked) {
    taskDescription.classList.add('completed');
    // update the status of the checked todo
    todos[selectedTodo.id].completed = true;
  } else {
    taskDescription.classList.remove('completed');
    // update the status of the checked todo
    todos[selectedTodo.id].completed = false;
  }
  // save changes into the local storage
  localStorage.setItem('todo-list', JSON.stringify(todos));
}

// console.log(toggleButtons);
toggleButtons.forEach((toggleButton) =>
  toggleButton.addEventListener('click', function () {
    showSubActions(this);
  })
);

editButtons.forEach((editButton) =>
  editButton.addEventListener('click', function () {
    const [id, description] = this.getAttribute('data-info').split(',');
    editTask(Number(id), String(description));
  })
);

deleteButtons.forEach((deleteButton) =>
  deleteButton.addEventListener('click', function () {
    const id = this.getAttribute('data-id');
    deleteTask(Number(id));
  })
);

statuses.forEach((input) =>
  input.addEventListener('click', function () {
    updateStatus(this);
  })
);

document.querySelector('#refresh').addEventListener('click', (e) => {
  location.reload();
});
