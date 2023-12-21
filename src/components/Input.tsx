export const Input = () => {
  return (
    <div
      className="border body-2 border-dark-gray/32 dark:border-white/60 rounded-full py-2 px-3 focus-within:border-blue
              dark:placeholder:text-white/60 dark:text-white/87"
    >
      <input
        className="bg-transparent outline-none"
        type="text"
        placeholder="Create a new todo..."
      />
    </div>
  );
};
