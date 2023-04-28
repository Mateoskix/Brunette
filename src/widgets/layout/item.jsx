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

        <div className="xl:gap-x-8' mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group static flex flex-row rounded-sm bg-black p-5"
            >
              <div className="custom-product-container mb-20 mt-4 flex flex-row">
                <div className="ml-2  w-40">
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  <div className="font-lemon mt-3 flex flex-row">
                    <p className="mr-5 text-sm text-white">{product.price}</p>
                    <CustomNumberInput
                      onChange={handleQuantityChange(product)}
                    />
                    <button
                      onClick={addToCart()}
                      className="h-10 text-sm text-white rounded-md bg-custom-secundary px-1 py-3"
                    >
                      Agregar
                    </button>
                  </div>
                </div>
                <div className="w-25">
                  <img
                    src={product.url}
                    alt={product.imageAlt}
                    className=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Example.displayName = "/src/widgets/layout/item.jsx";
export default Example;
