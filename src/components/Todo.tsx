import { Todo } from "@/types/todo";
import CloseIcon from "@icons/close.svg?react";
import Check from "@icons/check.svg?react";
import { twMerge } from "tailwind-merge";

export type TodoProps = {
  todo: Todo;
  onDelete: () => void;
  onComplete: (isCompleted: boolean) => void;
};

export const TodoCard = (props: TodoProps) => {
  const { todo } = props;
  const isCompleted = todo.state === "COMPLETED";
  return (
    <div
      className="group flex gap-2 items-center p-3 dark:text-white/87 
        dark:border-white/32 border-dark-gray/32 border rounded-lg relative text-dark-gray/87
      dark:hover:bg-white/8 hover:bg-dark-gray/8 dark:shadow-none shadow-sm"
    >
      <span className="flex items-center justify-center relative">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={(e) => props.onComplete(e.target.checked)}
          className="peer appearance-none h-4 w-4 border border-dark-gray/32 dark:border-white/32 rounded-sm
          checked:bg-blue checked:border-blue"
        />
        <Check className="h-4 w-4 pointer-events-none peer-checked:inline-block hidden dark:text-blue-gray text-white/87 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
      </span>
      <p
        className={twMerge(
          "body-2 capitalize",
          isCompleted && "line-through dark:text-white/32 text-dark-gray/32",
        )}
      >
        {todo.text}
      </p>
      <button
        onClick={props.onDelete}
        className="ml-auto rounded-full p-1 dark:hover:bg-white/32 hover:bg-dark-gray/32 group-hover:inline-flex hidden items-center justify-center
          absolute right-3 top-1/2 -translate-y-1/2 dark:hover:text-dark-gray/87 hover:text-white/87"
      >
        <CloseIcon className="h-5 w-5" />
      </button>
    </div>
  );
};
