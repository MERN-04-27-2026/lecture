// repository is the data access layer

type Priority = "low" | "medium" | "high";

interface Todo {
  id: string;
  content: string;
  priority: Priority;
  complete: boolean;
  date: Date;
}

let todos: Todo[] = [
  {
    id: "7f77bcfd-2304-4134-8cb7-83dfcc8e1049",
    content: "Learn TypeScript",
    priority: "high",
    complete: false,
    date: new Date(),
  },
  {
    id: crypto.randomUUID(),
    content: "Build a REST API",
    priority: "medium",
    complete: false,
    date: new Date(),
  },
];

class TodosRepository {
  findAll = async (): Promise<Todo[]> => {
    return todos;
  };

  // get expects a value, or else throw error
  getById = async (id: string): Promise<Todo | undefined> => {
    return todos.find((todo) => todo.id === id);
  };

  // ƒind: will either return the data or return null
  findById = async (id: string): Promise<Todo | undefined> => {
    return todos.find((todo) => todo.id === id);
  };

  create = async (todo: Todo): Promise<Todo> => {
    todos.push(todo);
    return todo;
  };

  deleteById = async (id: string): Promise<void> => {
    todos = todos.filter((todo) => todo.id !== id);
  };

  update = async (todo: Todo): Promise<Todo> => {
    const index = todos.findIndex((t) => t.id === todo.id);
    if (index !== -1) {
      todos[index] = todo;
    }
    return todo;
  };
}

const todosRepository = new TodosRepository();
export default todosRepository;
