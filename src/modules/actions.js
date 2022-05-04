import { todos, taskBox, userTask, clearAllCompletedBtn } from './variables.js';
import Task from './task.js';
import LocalStorage from './localStorage.js';

export default class Actions {
  static renderTask = (todos) => {
    taskBox.innerHTML = '';
    for (let i = 0; i < todos.length; i += 1) {
      taskBox.innerHTML += `
  <div class="one-task" id=${i}>
    <div class="data">
      <input id=${i} class="checkBoxClass" type="checkbox" ${
        todos[i].status ? 'checked' : ''
      }>
      <p id=${i} class="${todos[i].status ? 'checked' : ''} description">${
        todos[i].task
      }</p>
    </div>
    <span class="span">&cross;</span>
  </div>
  `;
    }
  };
}
