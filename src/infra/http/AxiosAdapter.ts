import axios from 'axios';
import HttpClient from './HttpClient';

export default class AxiosAdapter implements HttpClient {
  async get(url: string): Promise<unknown> {
    const { data } = await axios.get(url);
    return data;
  }

  async post(url: string, body: Record<string, any>): Promise<any> {
    const { data } = await axios.post(url, body);
    return data;
  }
}
