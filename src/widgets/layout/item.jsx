import { CustomNumberInput } from "@/widgets/layout/quantity";
import React, { useState } from "react";

export function Example(props) {
  const { products } = props;
  const [value, setValue] = useState(0);
  const [producto, setProducto] = useState([]);
  const [item, setItem] = useState([]);
  const handleQuantityChange = (product) => (value1) => {
    setValue(value1);
    setProducto(product);
    console.log("Producto:", producto.name, "Cantidad:", value);
  };

  const addToCart = () => {
    const data = {
      name: producto.name,
      quantity: value,
      price: producto.price,
    };
    console.log(producto.name);
    fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Producto agregado al carrito");
        } else {
          console.log("Error al agregar producto al carrito");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Nuestros productos
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
           <div className="rounded-md p-5 flex flex-row bg-custom-variant1 bg-opacity-40 group relative justify-between">
            <div className="flex flex-col w-4/6 mr-2">
              <p className="font-lemon text-xs text-custom-secundary">{product.nombre}</p>
              <p className="font-bunya text-xs text-white">{product.descripcion}</p>
              <div className="flex flex-row items-center">
                <p className="font-bold text-sm text-white">COP {product.precio}</p>
                <CustomNumberInput onChange={handleQuantityChange(product)}/>
                <button onClick={addToCart()} className="rounded-md bg-custom-secundary px-3 py-0.5 font-bunya-bold text-white text-sm">Agregar</button>
              </div>
            </div>
            <div className="relative h-28 w-28 sm:h-24 sm:w-24 lg:h-28 lg:w-28 overflow-hidden border-2 rounded-md bg-gray-200 group-hover:opacity-75 order-last">
                <img
                  src={product.img}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
           </div>
          ))}
    </div>
      </div>
    </div>
  );
}

Example.displayName = "/src/widgets/layout/item.jsx";
export default Example;