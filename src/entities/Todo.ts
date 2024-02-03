class Todo {
  public id: string;
  public description!: string;
  public done: boolean;

  private constructor(id: string, description: string, done: boolean){ 
    this.id = id || `todo-${Math.random().toString().slice(2, 7)}`;
    this.setDescription(description);
    this.done = done;
  }

  public static create(description: string, done: boolean = false): Todo{
    return new Todo("", description, done);
  }

  public static clone(todo: Todo): Todo{
    return new Todo(todo.id, todo.description, todo.done);
  }

  public toggleDone(){
    this.done = !this.done;
  }

  public setDescription(description: string){
    if(description.length < 1) throw new Error("Invalid description");
    this.description = description;
  }
}

export default Todo;