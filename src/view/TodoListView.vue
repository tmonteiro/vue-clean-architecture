<script setup lang='ts'>
  import { inject, onMounted, reactive } from 'vue';
  import TodoList from '../entity/TodoList';
  import TodosGateway from '../infra/gateway/TodosGateway';
  import TodoListComponent from '../components/TodoListComponent.vue';
  import Observer from '../infra/observer/Observer';
  import Todo from '../entity/Todo';

  const todoList = reactive(new TodoList());

  onMounted(async () => {
    const todosGateway = inject('todosGateway') as TodosGateway;
    const todosData = await todosGateway.getTodos();
    todoList.addTodos(todosData);

    todoList.on(new Observer('add-todo', (todo: Todo) => todosGateway.addTodo(todo)));
  });
</script>

<template>
  <TodoListComponent :todoList='todoList' />
</template>
