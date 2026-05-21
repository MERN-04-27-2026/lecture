import { createContext, useContext, useState, type ReactNode } from "react";

export interface Todo {
  id: string;
  content: string;
  completed: boolean;
}

interface TodosContextType {
  todos: Todo[];
  addTodo: (content: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, content: string) => void;
  toggleCompleteTodo: (id: string) => void;
}

export const TodosContext = createContext<TodosContextType>(null);

export default function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: crypto.randomUUID(), content: "Cook", completed: false },
  ]);

  const addTodo = (content: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      content,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id: string, content: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              content,
            }
          : todo,
      ),
    );
  };

  //   toggles the complete status
  const toggleCompleteTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo,
      ),
    );
  };

  return (
    <TodosContext.Provider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleCompleteTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodosContext);
}
