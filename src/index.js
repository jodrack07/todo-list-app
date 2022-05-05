//eslint-disable-line
import { userTask, todos, taskBox } from './modules/variables.js';
import Actions from './modules/actions.js';
import Helpers from './modules/helpers.js';
import Task from './modules/task.js';
import './style.css';

let update = false;
let tmp;

// populate the localStorage when the user press Enter
userTask.addEventListener('keyup', (e) => {
  if (e.keyCode === 13 && userTask.value) {
    e.preventDefault();
    const task = new Task(userTask);
    Actions.addTask(task);
    Actions.renderTask(todos);
    userTask.value = '';
  }
});

taskBox.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash-can')) {
    userTask.value = '';
    Actions.removeTask(e.target.parentElement.id);
    Actions.renderTask(todos);
    Helpers.updateIndex();
  }

  if (e.target.classList.contains('description')) {
    userTask.focus();
    userTask.value = e.target.innerHTML;
    update = true;
    tmp = e.target.id;
  }
});

// render all tasks/todos
Actions.renderTask(todos);
// toggle the completed status of a task/todo
Actions.toggleCompleted();
// delete all completed task
Actions.deleteAllCompleted();
