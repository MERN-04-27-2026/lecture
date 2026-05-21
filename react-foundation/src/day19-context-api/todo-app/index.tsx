import { useState, type SubmitEvent } from "react";
import TodosProvider, { useTodos, type Todo } from "./TodosContext";

export default function TodoApp() {
  return (
    <TodosProvider>
      {/* all these are children of TodosProvider */}
      <h2>Todo App</h2>
      <TodoForm />
      <TodoList />
    </TodosProvider>
  );
}

function TodoForm() {
  const { addTodo } = useTodos();
  // if a state doesn't need to be shared with others, then make it local
  const [content, setContent] = useState("");
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    addTodo(content);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={content} onChange={(e) => setContent(e.target.value)} />
      <button>Add New Todo</button>
    </form>
  );
}

function TodoList() {
  const { todos } = useTodos();
  return (
    <div>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

function Todo({ todo }: { todo: Todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState("");

  const { deleteTodo, toggleCompleteTodo, updateTodo } = useTodos();

  const handleSave = () => {
    updateTodo(todo.id, newContent);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div key={todo.id}>
        <label>
          <input
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </label>
      </div>
    );
  }

  return (
    <div key={todo.id}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleCompleteTodo(todo.id)}
        />
        {todo.content}
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={() => deleteTodo(todo.id)}>❌</button>
      </label>
    </div>
  );
}
