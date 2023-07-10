import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import TodosGatewayHttp from './infra/gateway/TodosGatewayHttp';
import AxiosAdapter from './infra/http/AxiosAdapter';

const app = createApp(App);

const httpClient = new AxiosAdapter();
const baseUrl = 'https://jsonplaceholder.typicode.com';
const todosGateway = new TodosGatewayHttp(baseUrl, httpClient);
app.provide('todosGateway', todosGateway)
app.mount('#app')
