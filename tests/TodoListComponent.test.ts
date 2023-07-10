import { mount } from '@vue/test-utils';
import TodoListComponentVue from '../src/components/TodoListComponent.vue';
import TodoList from '../src/entity/TodoList';

let todoList: TodoList;
beforeEach(() => {
  todoList = new TodoList();
}) 

test('should create an empty todolist', async () => {
  const wrapper = mount(TodoListComponentVue, {
    props: {
      todoList,
    }
  });

  expect(wrapper.get('.total').text()).toBe('Total: 0');
  expect(wrapper.get('.completed').text()).toBe('Completed: 0%');
});

test('should test the todolist with one todo', async () => {
  todoList.addTodo('first todo');

  const wrapper = mount(TodoListComponentVue, {
    props: {
      todoList,
    }
  });

  expect(wrapper.get('.total').text()).toBe('Total: 1');
  expect(wrapper.get('.completed').text()).toBe('Completed: 0%');
});

test('should test the todolist with two todos and add one more', async () => {
  todoList.addTodo('first todo');
  todoList.todos[0].toggleCompleted();
  todoList.addTodo('second todo');

  const wrapper = mount(TodoListComponentVue, {
    props: {
      todoList,
    }
  });

  expect(wrapper.get('.total').text()).toBe('Total: 2');
  expect(wrapper.get('.completed').text()).toBe('Completed: 50%');
  await wrapper.get('.new-todo-input').setValue('third todo');
  await wrapper.get('.new-todo-button').trigger('click');
  expect(wrapper.get('.total').text()).toBe('Total: 3');
  expect(wrapper.get('.completed').text()).toBe('Completed: 33%');
});


