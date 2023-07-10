export default interface HttpClient {
  get(url: string): Promise<any>;
  delete(url: string): Promise<void>;
}
