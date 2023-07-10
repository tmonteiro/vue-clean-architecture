import Observable from '../infra/observer/Observable';
import Todo from './Todo';

export default class TodoList extends Observable {
  todos: Todo[];

  constructor() {
    super();
    this.todos = [];
  }

  getTotal() {
    return this.todos.length;
  }

  addTodo(title: string, completed: boolean = false) {
    if (this.todos.some((todo) => todo.title === title)) return;
    const todo = new Todo(title, completed);
    this.todos.unshift(todo);
    this.notify('add-todo', todo);
  }

  addTodos(todos: Partial<Todo>[]) {
    todos.forEach(todo => this.addTodo(todo.title as string, todo.completed))
  }

  getCompleted() {
    const total = this.getTotal();
    if (total === 0) return 0;
    const completed = this.todos.filter(todo => todo.completed).length;
    return Math.round((completed/total) * 100);
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.title !== todo.title);
    this.notify('delete-todo', todo);
  }
}
