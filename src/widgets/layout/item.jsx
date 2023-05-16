import { CustomNumberInput } from "@/widgets/layout/quantity";
import React, { useState } from "react";
import numeral from 'numeral';


export function Example(props) {
  const { products } = props;
  const [value, setValue] = useState(0);
  const [producto, setProducto] = useState([]);
  const [item, setItem] = useState([]);
  const [lista, setLista] = useState([]);
  
 const handleQuantityChange = (product) => (value1) => {
    setValue(value1);
    setProducto(product);
  };

  const addToCart = () => {
    let data = {};
    let existeData = false;
    data = {
      name: producto.nombre, quantity: value,
      price: producto.precio, imageSrc: producto.img
    };
      for (let i = 0; i < lista.length; i++) {
        if (lista[i].name === data.name) {
          lista[i].quantity = data.quantity;
          existeData = true;
          actualizarListaMenu(lista)
          break;
        }
      }
      // Si no existe el objeto data en la lista, lo agrega
      if (!existeData) {
        setLista([...lista, data]);
        actualizarListaMenu(lista)
      }
  };


  function actualizarListaMenu(lista1) {
    fetch('http://localhost:3000/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(lista1)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo actualizar la lista en el servidor');
        }
        else
          console.log('exito');
      })
      .catch(error => {
        console.error(error);
      });
  };


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Nuestros productos
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div className="rounded-md p-5 flex flex-row bg-white bg-opacity-40 border-2 border-custom-variant1 group relative justify-between">
              <div className="flex flex-col w-4/6 mr-2">
                <p className="font-lemon text-m text-custom-secundary">{product.nombre}</p>
                <p className="font-bunya text-sm text-black">{product.descripcion}</p>
                <div className="flex flex-row items-center">
                  <p className="font-bold text-sm text-custom-secundary mr-2">Presentacion: </p>
                  <p className="font-bold text-sm text-custom-secundary">{product.tamaño}</p>
                </div>
                
                <div className="flex flex-row items-center">
                  <p className="font-bold text-sm text-black mr-2">COP</p>
                  <p className="font-bold text-sm text-black">{numeral(product.precio).format('$0,0')}</p>
                </div>
                <div className="flex mt-1 items-center w-4/6 mr-2 ">
                  <CustomNumberInput onChange={handleQuantityChange(product)} />
                  <button onClick={addToCart} className="ml-3 mt-2.5 rounded-md bg-custom-secundary px-3 py-0.5 font-bunya-bold text-white text-sm">Agregar</button>
                </div>
              </div>
              <div className="relative h-28 w-28 sm:h-24 sm:w-24 lg:h-40 lg:w-40 overflow-hidden border-2 rounded-md bg-gray-200 group-hover:opacity-75 order-last border-custom-secundary">
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
export default Example;
