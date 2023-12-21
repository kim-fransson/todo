import { Todo, TodoAction } from "@/types/todo";

export const todoReducer = (todos: Todo[], action: TodoAction): Todo[] => {
  switch (action.type) {
    case "ADD_TODO": {
      return [{ ...action.todo }, ...todos];
    }

    case "REMOVE_TODO": {
      return todos.filter((todo) => todo.id !== action.todoId);
    }

    case "UPDATE_TODO": {
      return todos
        .map((todo) => (todo.id == action.todo.id ? action.todo : todo))
        .sort((a, b) => {
          if (a.state === "COMPLETED" && b.state !== "COMPLETED") {
            return 1;
          } else if (a.state !== "COMPLETED" && b.state === "COMPLETED") {
            return -1;
          }
          return 0;
        });
    }
  }
};
