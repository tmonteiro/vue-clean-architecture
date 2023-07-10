import Todo from "../../entity/Todo";

export default interface TodosGateway {
  getTodos(): Promise<Todo[]>;
  addTodo(newTodo: Todo): Promise<Todo>;
}
