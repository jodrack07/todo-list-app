import { todos } from './variables.js';

export default class Helpers {
  static updateIndex = () => {
    for (let i = 0; i < todos.length; i += 1) {
      todos[i].id = i + 1;
    }
    todos.sort((a, b) => {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    });
  };
}
