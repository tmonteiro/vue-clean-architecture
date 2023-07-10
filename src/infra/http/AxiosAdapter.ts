import axios from 'axios';
import HttpClient from './HttpClient';

export default class AxiosAdapter implements HttpClient {
  async get(url: string): Promise<unknown> {
    const { data } = await axios.get(url);
    return data;
  }

  async delete(url: string): Promise<void> {
    await axios.delete(url);
  }
}
