class Todo {
  public id: string;
  public description: string;
  public done: boolean;

  constructor(description: string){
    this.id = `todo-${Math.random().toString().slice(2, 7)}`;
    this.description = description;
    this.done = false;
  }
}

export default Todo;