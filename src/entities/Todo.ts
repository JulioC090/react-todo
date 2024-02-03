class Todo {
  public id: string;
  public description!: string;
  public done: boolean;

  private constructor(id: string, description: string, done: boolean){ 
    this.id = id || `todo-${Math.random().toString().slice(2, 7)}`;
    this.description = description;
    this.done = done;
  }

  public static create(description: string, done: boolean = false): Todo{
    return new Todo("", description, done);
  }

  public static clone(todo: Todo): Todo{
    return new Todo(todo.id, todo.description, todo.done);
  }

  public isValid(): boolean{
    if(this.description.length < 1) return false;

    return true;
  }

  public toggleDone(){
    this.done = !this.done;
  }
}

export default Todo;