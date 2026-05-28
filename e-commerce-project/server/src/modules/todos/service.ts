// where we put our core business/application logics

import { NotFoundError } from "../core/error/CustomError";
import todosRepository from "./repository";
import { Priority, Todo } from "./type";

class TodosService {
  getTodos = async () => {
    return await todosRepository.findAll();
  };

  getTodoById = async (id: string) => {
    const todo = await todosRepository.findById(id);
    console.log(todo);
    
    if (!todo) throw new NotFoundError(`Todo not found with id: ${id} `);
    return todo;
  };

  createTodo = async (content: string, priority: Priority) => {
    // business rule for new todo:
    // date is auto generated to be the current time
    // default initial complete is false
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      content,
      priority,
      complete: false,
      date: new Date(),
    };
    await todosRepository.create(newTodo);

    return newTodo;
  };

  deleteTodoById = async (id: string) => {
    await todosRepository.deleteById(id);
  };

  updateTodoById = async (id: string, newFields: any) => {
    const todoToUpdate = await todosRepository.findById(id);

    const { content, priority, complete } = newFields;
    if (!todoToUpdate) {
      // throw some error
      throw new Error("Todo not found");
    }
    const newTodo = {
      ...todoToUpdate,
      content,
      priority,
      complete,
    };

    const updatedTodo = await todosRepository.update(newTodo);
    return updatedTodo;
  };
}

const todosService = new TodosService();
export default todosService;
