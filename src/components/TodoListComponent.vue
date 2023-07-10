<script setup lang="ts">
  defineProps(['todoList']);
  const newTodo = '';
</script>

<template>
  <h1>
    My todo list
  </h1>
  <p class="total">Total: {{ todoList.getTotal() }}</p>
  <p class="completed">Completed: {{ todoList.getCompleted() }}%</p>
  <div>
    <input
      type="text"
      v-model="newTodo"
      class="new-todo-input"
    />
    <button
      class="new-todo-button"
      @click="todoList.addTodo(newTodo)"
    >
      Add new Todo
    </button>
  </div>
  <ul v-for="todo in todoList.todos">
    <li>
      {{ todo.title }}
      <span v-if="todo.completed">
        completed
      </span>
      <button @click="todo.toggleCompleted()">
        Toggle completed
      </button>
      <button @click="todoList.deleteTodo(todo)">
        Delete
      </button>
    </li>
  </ul>
</template>

<style scoped>
</style>
