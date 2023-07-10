import Todo from "../../entity/Todo";

export default interface TodosGateway {
  getTodos(): Promise<Todo[]>;
  addTodo(): Promise<Todo>;
  deleteTodo(): Promise<void>;
}
