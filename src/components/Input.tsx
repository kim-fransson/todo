import { useState } from "react";

export type InputProps = {
  onAdd: (value: string) => void;
};

export const Input = (props: InputProps) => {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (value) {
          props.onAdd(value);
          setValue("");
        }
      }}
      className="flex border body-2 border-dark-gray/32 dark:border-white/60 rounded-full py-2 px-3 focus-within:border-blue
              dark:placeholder:text-white/60 placeholder:text-dark-gray/60 dark:text-white/87 text-dark-gray/87 group"
    >
      <input
        className="bg-transparent outline-none flex-1"
        type="text"
        placeholder="Create a new todo..."
        value={value}
        onSubmit={() => props.onAdd(value)}
        onChange={(e) => setValue(e.target.value)}
      />
      {value && (
        <button
          tabIndex={-1}
          className="bg-blue text-white/87 button px-6 py-2 -mr-3 -my-2 hidden rounded-full group-focus-within:inline-block outline-none"
        >
          Add todo
        </button>
      )}
    </form>
  );
};
