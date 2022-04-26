import todos from './todos';

const list = document.querySelector('.todos');

export default class UI {
  renderTodos() {
    todos.forEach((todo) => {
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
  }
}
