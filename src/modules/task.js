import { todos } from './variables.js';

export default class Task {
  constructor(userTask) {
    this.id = todos.length + 1;
    this.task = userTask.value;
    this.completed = false;
  }
}
