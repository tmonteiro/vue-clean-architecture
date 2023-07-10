export default class Todo {
  constructor(
    readonly title: string,
    public completed: boolean = false
  ) {
    if (!title) throw new Error('Invalid todo title');
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }
}
