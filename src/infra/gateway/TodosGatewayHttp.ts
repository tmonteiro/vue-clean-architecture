import Todo from '../../entity/Todo';
import TodosGateway from './TodosGateway';
import HttpClient from '../http/HttpClient';

export default class TodosGatewayHttp implements TodosGateway {
  constructor(
    readonly baseUrl: string,
    readonly httpClient: HttpClient
  ){}

  async getTodos(): Promise<Todo[]> {
    const todos = await this.httpClient.get(`${this.baseUrl}/users/1/todos`);
    return todos;
  }

  addTodo(): Promise<Todo> {
    throw new Error('Method not implemented.');
  }

  deleteTodo(): Promise<void> {
    throw new Error('Method not implemented.');
  }

}
