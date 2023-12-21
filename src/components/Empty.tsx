import Cactus from "../assets/cactus.svg?react";

export const Empty = () => {
  return (
    <div className="flex flex-col items-center gap-6 mt-12 text-dark-gray/87 dark:text-white/87">
      <Cactus />
      <p className="heading-s dark:text-white">
        No tasks left, just like my lonely desert.
      </p>
    </div>
  );
};
