// controller is the function that handles the request and response
// controller will process and validate the request body, route params, query params
// use the valid/clean data to call the service layer

import { Request, Response } from "express";
import todosService from "./service";

class TodosController {
  getTodos = async (req: Request, res: Response) => {
    const todos = await todosService.getTodos();
    res.json(todos);
  };

  getTodoById = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const todo = await todosService.getTodoById(id);
    res.json(todo);
  };

  postTodo = async (req: Request, res: Response) => {
    const { content, priority } = req.body;

    const newTodo = await todosService.createTodo(content, priority);

    res.status(201).json(newTodo);
  };

  deleteTodoById = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    await todosService.deleteTodoById(id);
    res.send(id);
  };

  patchTodoById = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const { content, priority, complete } = req.body;

    const todoToUpdate = await todosService.updateTodoById(id, {
      content,
      priority,
      complete,
    });

    res.json(todoToUpdate);
  };
}

const todosController = new TodosController();
export default todosController;
