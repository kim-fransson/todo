export type Todo = {
  id: string;
  text: string;
  state: "INBOX" | "COMPLETED";
};

export type TodoAction = AddTodo | RemoveTodo | UpdateTodo;

export type AddTodo = {
  type: "ADD_TODO";
  todo: Todo;
};

export type RemoveTodo = {
  type: "REMOVE_TODO";
  todoId: string;
};

export type UpdateTodo = {
  type: "UPDATE_TODO";
  todo: Todo;
};
