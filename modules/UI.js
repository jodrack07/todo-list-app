import todos from './todos.js';

const list = document.querySelector('.todos');

export default class UI {
  renderTodos = () => {
    todos
      .sort((a, b) => a.index - b.index)
      .forEach((todo) => {
        list.innerHTML += `<li class="item">
            <div class="todo">
                <div class='todo-left'>
                <input type="checkbox" class="check-box" name="checkbox" id= "${
                  todo.index
                }" ${todo.completed ? 'checked' : ''}>
                <p class='${todo.completed ? 'underline' : ''}'>${
          todo.description
        }</p>
                </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </li>`;
      });
  };
}
