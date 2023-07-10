import Todo from "../src/entity/Todo"

test('should create a new todo with default completed', () => {
  const todo = new Todo('A');
  expect(todo.title).toBe('A');
  expect(todo.completed).toBe(false);
});

test('should create a new todo with completed', () => {
  const todo = new Todo('A', true);
  expect(todo.title).toBe('A');
  expect(todo.completed).toBe(true);
});

test('should not create a new todo with empty title', () => {
  expect(() => new Todo('')).toThrow('Invalid todo title')
});