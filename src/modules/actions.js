import { todos, taskBox, userTask, clearAllCompletedBtn } from './variables.js';
import Task from './task.js';
import LocalStorage from './localStorage.js';
import Helpers from './helpers.js';

let update = false;
let tmp;

export default class Actions {
  // display todos from the localstorage
  static renderTask = (todos) => {
    taskBox.innerHTML = '';
    for (let i = 0; i < todos.length; i += 1) {
      taskBox.innerHTML += `
  <li class="task" id=${i}>
    <div class="task-details">
      <input id=${i} class="input" type="checkbox" ${
        todos[i].completed ? 'checked' : ''
      }>
      <p id=${i} class="${
        todos[i].completed ? 'completed ' : ''
      } description">${todos[i].task}</p>
    </div>
    <i class="fa-solid fa-trash-can"></i>
  </li>
  `;
    }
  };

  // add a task into the localstorage
  static addTask = (task) => {
    if (!task) return null;
    if (!update) {
      todos.push(task);
      LocalStorage.save(todos);
    } else {
      LocalStorage.save(todos);
      update = false;
    }
  };

  // remove a task into the localstorage
  static removeTask = (taskId) => {
    todos.splice(taskId, 1);
    LocalStorage.save(todos);
  };

  // toggle the completed status
  static toggleCompleted = () => {
    taskBox.addEventListener('change', (event) => {
      if (event.target.className === 'input') {
        todos[event.target.id].completed = !todos[event.target.id].completed;
        LocalStorage.save(todos);
        event.target.parentElement.classList.toggle('completed');
      }
    });
  };

  static deleteAllCompleted = () => {
    clearAllCompletedBtn.addEventListener('click', () => {
      todos = todos.filter((todo) => todo.completed === false);
      Actions.renderTask(todos);
      Helpers.updateIndex();
      LocalStorage.save(todos);
    });
  };
}
