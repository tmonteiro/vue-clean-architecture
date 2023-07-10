import TodoList from '../src/entity/TodoList';

test('should create a new todo list without todos', () => {
  const todoList = new TodoList();
  expect(todoList.getTotal()).toBe(0);
});

test('should add a new todo to todolist', () => {
  const todoList = new TodoList();
  todoList.addTodo('A new todo');
  const todos = todoList.todos;
  expect(todos[0].title).toBe('A new todo');
  expect(todos[0].completed).toBe(false);
});

test('should add two new todos to todolist', () => {
  const todoList = new TodoList();
  todoList.addTodo('A new todo');
  todoList.addTodo('Another todo');
  expect(todoList.getTotal()).toBe(2);
});

test('should not add the same todo', () => {
  const todoList = new TodoList();
  todoList.addTodo('A new todo');
  todoList.addTodo('A new todo');
  expect(todoList.todos.length).toBe(1);
});

test('should toggle todo', () => {
  const todoList = new TodoList();
  todoList.addTodo('A new todo');
  const todos = todoList.todos;
  todos[0].toggleCompleted();
  expect(todos[0].completed).toBe(true);
});

test('should return the completed percentage', () => {
  const todoList = new TodoList();
  todoList.addTodo('A');
  todoList.addTodo('B');
  todoList.addTodo('C');
  todoList.addTodo('D');
  todoList.addTodo('E');
  todoList.todos[0].toggleCompleted();
  expect(todoList.getCompleted()).toBe(20);
});

test('should delete a todo from todolist', () => {
  const todoList = new TodoList();
  todoList.addTodo('A');
  todoList.addTodo('B');
  todoList.deleteTodo(todoList.todos[0]);
  expect(todoList.getTotal()).toBe(1);
});

test('should add an array of todos', () => {
  const todoList = new TodoList();
  todoList.addTodos([{ title: 'todo 1'}, { title: 'todo 2', completed: true }]);
  expect(todoList.getTotal()).toBe(2);
});
