import { CustomNumberInput } from "@/widgets/layout/quantity";
import React, { useState } from 'react';


export function Example (props) {
  const { products } = props;
  const [value, setValue] = useState(0);
  const [producto, setProducto] = useState([]);
  const [item, setItem] = useState([]);
  const handleQuantityChange = (product) => (value1) => {
    setValue(value1);
    setProducto(product);
    console.log("Producto:", producto.name, "Cantidad:", value);
  }

  const addToCart = (producto) => {
    const data = { name: producto.name, quantity: value , price: producto.price};
    fetch('http://localhost:3000/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        console.log('Producto agregado al carrito');
      } else {
        console.log('Error al agregar producto al carrito');
      }
    })
    .catch(error => console.error('Error:', error));
  };


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nuestros productos</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative flex flex-row-reverse">
              <div className="mb-20 mt-4  custom-product-container">
                <div className="ml-2  w-40" >
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                  <CustomNumberInput onChange={handleQuantityChange(product)} />
                  <button onClick= {addToCart(product)}className="rounded bg-custom-primary px-1 py-3 font-bunya-bold">Agregar</button>
                </div>
              </div>
              <div className="min-h-40 aspect-h-1 aspect-w-1.8 w-40 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-40">
                <img
                  src={product.url}
                  alt={product.imageAlt}
                  className="h-40 w-full object-cover object-center lg:h-40 lg:w-40"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


Example.displayName = "/src/widgets/layout/item.jsx";
export default Example;
