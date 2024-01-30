class Todo {
  public id: string;
  public description: string;
  public done: boolean;
  private static lastId: number = 0; 

  constructor(description: string){
    Todo.lastId++;
    this.id = `todo-${Todo.lastId}`;
    this.description = description;
    this.done = false;
  }
}

export default Todo;