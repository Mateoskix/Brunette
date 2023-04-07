import { useState } from "react";

export function CustomNumberInput() {
  const [value, setValue] = useState(0);

  const decrement = () => {
    setValue(value - 1);
  };

  const increment = () => {
    setValue(value + 1);
  };

  return (
    <div className="custom-number-input h-8 w-20 custom-bg-white">
      <div className="flex flex-row h-8 w-13 rounded-lg relative bg-transparent mt-3">
        <button
          data-action="decrement"
          className="bg-gray-300 text-center text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-8 w-10 rounded-l cursor-pointer outline-none custom-bg-white "
          onClick={decrement}
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="number"
          className="outline-none focus:outline-none text-center w-8 bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none custom-bg-white"
          name="custom-input-number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          data-action="increment"
          className="bg-gray-300 text-center text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-8 w-10 rounded-r cursor-pointer custom-bg-white"
          onClick={increment}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
  
}
CustomNumberInput.displayName = "/src/widgets/layout/quantity.jsx";
export default CustomNumberInput;