import { Empty } from "@components/Empty";
import { Input } from "@components/Input";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Todo } from "./types/todo";
import { todoReducer } from "@reducers/todoReducer";
import { useEffect, useMemo, useReducer } from "react";
import { TodoCard } from "@components/Todo";
import { v4 as uuidv4 } from "uuid";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const [localStorageTodos, saveTodos] = useLocalStorage<Todo[]>("todos", []);
  const [todos, dispatch] = useReducer(todoReducer, localStorageTodos);

  const handleAdd = (text: string) => {
    dispatch({
      type: "ADD_TODO",
      todo: {
        text,
        id: uuidv4(),
        state: "INBOX",
      },
    });
  };

  const handleDelete = (todoId: string) => {
    dispatch({
      type: "REMOVE_TODO",
      todoId,
    });
  };

  const handleComplete = (todo: Todo, isCompleted: boolean) => {
    dispatch({
      type: "UPDATE_TODO",
      todo: {
        ...todo,
        state: isCompleted ? "COMPLETED" : "INBOX",
      },
    });
  };

  useEffect(() => {
    saveTodos(todos);
  }, [todos, saveTodos]);

  const completedTodos = useMemo(
    () => todos.filter((todo) => todo.state === "COMPLETED").length,
    [todos],
  );

  return (
    <div className="dark:bg-dark-blue-gray bg-light-gray min-h-screen pt-10 pb-24 flex flex-col transition-colors">
      <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-r from-[#005a7f] via-[#c48b8a] to-[#005a7f]" />
      <div className="max-w-screen-md w-full gap-4 flex flex-1 flex-col relative mx-auto overflow-hidden md:px-0 px-4">
        <div className="flex justify-between items-center text-white">
          <h1 className="heading-m">TODO</h1>
          <ThemeSwitcher />
        </div>

        <div className="dark:bg-blue-gray bg-white rounded-lg flex-1 flex flex-col transition-colors">
          <div className="shadow-md px-5 py-3">
            <Input onAdd={handleAdd} />
          </div>

          <div className="flex-1 relative">
            {todos.length ? (
              <div className="pt-6 pb-20 px-5 flex flex-col gap-4">
                <AnimatePresence mode="popLayout">
                  {todos.map((todo) => (
                    <TodoCard
                      key={todo.id}
                      todo={todo}
                      onDelete={() => handleDelete(todo.id)}
                      onComplete={(isCompleted) =>
                        handleComplete(todo, isCompleted)
                      }
                    />
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <Empty />
            )}
            {todos.length > 0 && (
              <span className="ml-auto subtext dark:text-white/87 text-dark-gray/87 absolute bottom-6 right-5">
                {`${completedTodos}/${todos.length} todos completed`}
              </span>
            )}
          </div>
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 right-0 bg-white p-3 flex items-center justify-end gap-4">
        <div className="flex items-center gap-2">
          <span className="select-none rounded-lg bg-[#672871] px-2 py-1 text-gray-100 body-2">
            Designs from
          </span>
          <a
            className="body-2 hover:text-[#672871]"
            href="https://bigdevsoon.me/"
            target="_blank"
            title="BigDevSoon"
          >
            BigDevSoon.me
          </a>
        </div>
      </footer>
    </div>
  );
}
