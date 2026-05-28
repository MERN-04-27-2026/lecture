import { Router } from "express";
import todosController from "./controller";

const router = Router();

router.get("/", todosController.getTodos);
router.get("/:id", todosController.getTodoById);
router.post("/", todosController.postTodo);

// route parameters
router.patch("/:id", todosController.patchTodoById);

// route parameters
router.delete("/:id", todosController.deleteTodoById);

export default router;
