import { todos, taskBox, userTask, clearAllCompletedBtn } from './variables.js';
import Task from './task.js';
import LocalStorage from './localStorage.js';
import Helpers from './helpers.js';

export let update = false;
export let tmp;

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
  static addTask = () => {
    if (!update) {
      const task = new Task(userTask);
      todos.push(task);
      LocalStorage.save(todos);
      Actions.renderTask(todos);
      userTask.value = '';
    } else {
      todos[tmp].task = userTask.value;
      LocalStorage.save(todos);
      Actions.renderTask(todos);
      userTask.value = '';
      update = false;
    }
  };

  // remove a task into the localstorage
  static removeTask = () => {
    taskBox.addEventListener('click', (e) => {
      if (e.target.classList.contains('fa-trash-can')) {
        todos.splice(e.target.parentElement.id, 1);
        userTask.value = '';
        Actions.renderTask(todos);
        Helpers.updateIndex();
        LocalStorage.save(todos);
      }

      if (e.target.classList.contains('description')) {
        userTask.focus();
        userTask.value = e.target.innerHTML;
        update = true;
        tmp = e.target.id;
      }
    });
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
