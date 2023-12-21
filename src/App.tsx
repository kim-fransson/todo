import SunIcon from "@icons/light-mode.svg?react";
import { Empty } from "./components/Empty";
import { Input } from "./components/Input";

export default function App() {
  return (
    <div className="dark:bg-dark-blue-gray bg-light-gray min-h-dvh">
      <div className="absolute left-0 right-0 h-1/4 bg-gradient-to-r from-[#005a7f] via-[#c48b8a] to-[#005a7f]" />
      <div className="max-w-screen-md relative mx-auto pt-10 overflow-hidden">
        <div className="flex justify-between items-center text-white">
          <h1 className="heading-m">TODO</h1>
          <SunIcon />
        </div>

        <div className="h-[475px] bg-blue-gray mt-4 rounded-lg overflow-y-auto">
          <div className="shadow-md px-5 py-3">
            <Input />
          </div>

          <Empty />
        </div>
      </div>
    </div>
  );
}
