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
      className="group flex gap-2 items-center p-3 dark:text-white/87 dark:border-white/32 border rounded-lg relative
      hover:bg-white/8"
    >
      <span className="flex items-center justify-center relative">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={(e) => props.onComplete(e.target.checked)}
          className="peer appearance-none h-4 w-4 border dark:border-white/32 rounded-sm
          dark:checked:bg-blue dark:checked:border-blue"
        />
        <Check className="h-4 w-4 pointer-events-none peer-checked:inline-block hidden text-blue-gray absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
      </span>
      <p
        className={twMerge(
          "body-2 capitalize",
          isCompleted && "line-through text-white/32",
        )}
      >
        {todo.text}
      </p>
      <button
        onClick={props.onDelete}
        className="ml-auto rounded-full p-1 hover:bg-white/32 group-hover:inline-flex hidden items-center justify-center
          absolute right-3 top-1/2 -translate-y-1/2 hover:text-dark-gray"
      >
        <CloseIcon className="h-5 w-5" />
      </button>
    </div>
  );
};
