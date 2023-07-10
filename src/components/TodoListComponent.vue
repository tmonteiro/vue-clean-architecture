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
  <div class="new-todo-container">
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
  <ul>
    <li v-for="todo in todoList.todos">
      <span :class="{ 'todo-completed': todo.completed }">
        {{ todo.title }}
      </span>
      <button v-if="!todo.completed" @click="todo.toggleCompleted()">
        Toggle completed
      </button>
      <button v-if="todo.completed" @click="todoList.deleteTodo(todo)">
        Delete
      </button>
    </li>
  </ul>
</template>

<style scoped>
  .new-todo-container {
    gap: 10px;
    display: flex;
  }

  ul {
    padding-left: 0;
    list-style-type: circle;
    list-style-position: inside;
  }

  li::marker {
    content: counter(list-item, decimal-leading-zero)'. ';
  }

  li button {
    margin-inline: 5px;
  }
  .todo-completed {
    text-decoration: line-through;
  }
</style>
