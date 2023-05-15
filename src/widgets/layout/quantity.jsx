import { useState } from "react";

export function CustomNumberInput({onChange}) {
  const [value, setValue] = useState(0);


  const decrement = () => {
    if (value > 0) {
      const newValue = value - 1;
      setValue(newValue);
      onChange(newValue);

    }
  };

  const increment = () => {
    const newValue = value + 1;
    setValue(newValue);
    onChange(newValue);
  
    /* // Hacer una solicitud POST a la URL del backend
    fetch('/shoppingcar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: productName, quantity: newValue })
    }); */
  };

  return (
      <div className="flex flex-row h-6.8 w-13 relative bg-white mt-3 border-2 border-custom-secundary rounded-full">
        <button
          data-action="decrement"
          className="bg-gray-300 text-center text-gray-600 hover:text-custom-secundary hover:bg-gray-400 h-6 w-10 rounded-l-full cursor-pointer outline-none custom-bg-white "
          onClick={decrement}
        >
          <span className="m-auto text-xl font-thin">−</span>
        </button>
        <input
          type="number"
          className="focus:outline-none text-center w-8 bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-custom-secundary outline-none custom-bg-white"
          name="custom-input-number"
          value={value}
          onChange={(e) => {
            const newValue = e.target.value;
            if (newValue >= 0) {
              setValue(newValue);
              onChange(newValue);
              console.log("Valor actual de value:", value);
            }
          }}
          onKeyDown={(e) => e.preventDefault()}
          onWheel={(e) => e.preventDefault()}
          readOnly
          style={{ 
            "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
              "-webkit-appearance": "none",
              margin: 0,
            },
            "-moz-appearance": "textfield",
            margin: 0,
          }}
        />
        <button
          data-action="increment"
          className="bg-gray-300 text-center text-gray-600 hover:text-custom-secundary hover:bg-gray-400 h-6 w-10 rounded-r-full cursor-pointer custom-bg-white"
          onClick={increment}
        >
          <span className="m-auto text-xl font-thin">+</span>
        </button>
      </div>
  );
  
}
CustomNumberInput.displayName = "/src/widgets/layout/quantity.jsx";
export default CustomNumberInput;