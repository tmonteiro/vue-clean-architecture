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

  async addTodo(newTodo: Todo): Promise<Todo> {
    const body  ={ ...newTodo, userId: 1 };
    const todo = await this.httpClient.post(`${this.baseUrl}/todos`, body);
    return todo;
  }

}
