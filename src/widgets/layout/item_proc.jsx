import React, { useState } from "react";
import numeral from 'numeral';

import { BiTrash, BiEditAlt } from 'react-icons/bi';


export function Prods(props) {
    const { products } = props;
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [tamaño, setTamaño] = useState('');
    const [precio, setPrecio] = useState('');
    const [disponibilidad, setDisponibilidad] = useState('');
    const [stock, setStock] = useState('');
    const [img, setImg] = useState('');

    const [state, setState] = useState("productos");

    const [productToDelete, setProductToDelete] = useState('');

    const handleAgregarClick = () => {
        setState("agregar");
    };
    const handleBackClick = () => {
        setState("productos");
    };
    const handleEliminarClick = (product) => {
        setProductToDelete(product);
        setState("eliminar");
      };
    const handleUpdateClick = (product) => {
        setNombre(product.nombre);
        setDescripcion(product.descripcion);
        setTamaño(product.tamaño);
        setPrecio(product.precio);
        setDisponibilidad(product.disponibilidad);
        setStock(product.stock);
        setImg(product.img);
        setState("actualizar");
    };

    const eliminar = () => {
        const id = productToDelete.ID_Producto;
        fetch(`http://localhost:3000/productos/${id}`, {
          method: 'DELETE',
        })
          .then(response => {
            if (response.ok) {
              console.log('Producto eliminado');
            } else {
              console.error('Error al eliminar el producto');
            }
          })
          .catch(error => {
            console.error(error);
          });
      
        handleBackClick();
      };

    const agregar = () => {
        const producto = {
            nombre,
            descripcion: descripcion,
            tamaño: tamaño,
            precio: precio,
            disponibilidad: disponibilidad,
            stock: stock,
            img: img,
        };
        fetch('http://localhost:3000/productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ producto })
        })
        console.log(producto)
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    };
    const actualizar = () => {
        const productoActualizado = {
            nombre,
            descripcion,
            tamaño,
            precio,
            disponibilidad,
            stock,
            img,
        };

        fetch(`http://localhost:3000/productos/${nombre}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ producto: productoActualizado })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log("actualización completa")
            })
            .catch(error => {
                console.error(error);
                console.log("actualización falló")
            });
    };
    return (
        <div className="bg-white">
            <div className="mx-20 ">
                {state === "productos" && (
                    <div className="justify-between py-5">
                        <h2 className="text-2xl font-bold text-gray-900">
                            PRODUCTOS <button onClick={handleAgregarClick} className="ml-10 hover:bg-custom-primary text-base border-2 px-4 py-2 rounded-lg">Agregar</button>
                        </h2>
                        <div className="flex flex-col sapce-y-4 ">
                            <div className="flex gap-x-4 py-2">
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">Imagen</p>
                                </div>
                                <div className="min-w-0 flex-auto pr-10 w-20">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">Nombre</p>
                                </div>
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">Descripcion</p>
                                </div>
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">Tamaño</p>
                                </div>
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">Precio</p>
                                </div>
                                <div className="flex sm:flex-col sm:items-center">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">Disponibilidad</p>
                                </div>
                                <div className="flex">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">Editar</p>
                                </div>
                                <div className="flex">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">Eliminar</p>
                                </div>
                            </div>
                            {products.map((product) => (
                                <div className="flex py-2 border-t border-black items-center">
                                    <div className="min-w-0 flex-inital">
                                        <img
                                            src={product.img}
                                            alt=""
                                            className="h-28 w-28 flex-none bg-gray-50"
                                        />
                                    </div>
                                    <div className=" flex-auto pl-10">
                                        <p className="text-sm leading-6 w-24 text-gray-900" style={{ wordWrap: 'break-word' }}>{product.nombre}</p>
                                    </div>
                                    <div className=" flex-auto">
                                        <p className="text-sm leading-6 w-32 text-gray-500">{product.descripcion}</p>
                                    </div>
                                    <div className="flex-auto">
                                        <p className="text-sm leading-6 text-gray-900">{product.tamaño}</p>
                                    </div>
                                    <div className="flex-auto ">
                                        <p className="text-sm leading-6 text-gray-900 ">{product.precio}</p>
                                    </div>
                                    <div className="flex-auto">
                                        <p className={`text-sm leading-6 ${product.disponibilidad === 1 ? 'text-green-500' : 'text-red-500'}`}>{product.disponibilidad === 1 ? 'DISPONIBLE' : 'NO DISPONIBLE'}</p>
                                    </div>
                                    <div className="flex-end">
                                        <div className="flex flex-col items-center space-y-2">
                                            <BiEditAlt onClick={handleUpdateClick} className="text-4xl rounded-md bg-gray-200 hover:bg-gray-300 p-2" />
                                            <BiTrash onClick={() => handleEliminarClick(product)} className="text-4xl rounded-md bg-gray-200 hover:bg-gray-300 p-2" />
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                )}
                {state === "eliminar" && (
                    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                        <div class="fixed inset-0 z-10 overflow-y-auto">
                            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div class="sm:flex sm:items-start">
                                            <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                                </svg>
                                            </div>
                                            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">¿Estas seguro en eliminar el producto seleccionado?</h3>
                                                <div class="mt-2">
                                                    <p class="text-sm text-gray-500">Estás a punto de eliminar el producto seleccionado de forma permanente. Esta acción no se puede deshacer y toda la información asociada al producto se perderá. Asegúrate de que deseas eliminar este producto antes de continuar.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button onClick={eliminar} type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Eliminar</button>
                                        <button onClick={handleBackClick} type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancelar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )}
                {state === "agregar" && (
                    <div>Ingresa los datos <button onClick={handleBackClick} className="ml-10 hover:bg-custom-primary text-base border-2 px-4 py-2 rounded-lg"> Volver</button>
                        <form className="grid grid-cols-6 gap-4">
                            <div className="col-span-3">
                                <label htmlFor="nombre" className="block text-xs font-medium text-gray-700">
                                    Nombre:
                                    <input
                                        type="text"
                                        id="nombre"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                    />
                                </label>
                            </div>

                            <div className="col-span-3">
                                <label htmlFor="descripcion" className="block text-xs font-medium text-gray-700">
                                    Descripcion:
                                    <input
                                        type="text"
                                        id="descripcion"
                                        value={descripcion}
                                        onChange={(e) => setDescripcion(e.target.value)}
                                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                    />
                                </label>
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="precio" className="block text-xs font-medium text-gray-700">
                                    Precio:
                                    <input
                                        type="number"
                                        id="precio"
                                        value={precio}
                                        onChange={(e) => setPrecio(e.target.value)}
                                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                    />
                                </label>
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="tamaño" className="block text-xs font-medium text-gray-700">
                                    tamaño:
                                    <input
                                        type="text"
                                        id="tamaño"
                                        value={tamaño}
                                        onChange={(e) => setTamaño(e.target.value)}
                                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                    />
                                </label>
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="disponibilidad" className="block text-xs font-medium text-gray-700">
                                    Disponibilidad:
                                    <input
                                        type="number"
                                        id="disponibilidad"
                                        value={disponibilidad}
                                        onChange={(e) => setDisponibilidad(e.target.value)}
                                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                    />
                                </label>
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="stock" className="block text-xs font-medium text-gray-700">
                                    Stock:
                                    <select
                                        id="stock"
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"

                                    >
                                        <option value="no">No</option>
                                        <option value="yes">Sí</option>
                                    </select>
                                </label>
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="Cantidad Stock" className="block text-xs font-medium text-gray-700">
                                    Cantidad Stock:
                                    <input
                                        type="number"
                                        id="can_stock"
                                        value={stock}
                                        onChange={(e) => setStock(e.target.value)}
                                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                    />
                                </label>
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="img" className="block text-xs font-medium text-gray-700">
                                    Imagen:
                                    <input
                                        type="text"
                                        id="img"
                                        value={img}
                                        onChange={(e) => setImg(e.target.value)}
                                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                    />
                                </label>
                            </div>

                            <div className="col-span-6">
                                <button
                                    className="block w-full rounded-md bg-custom-secundary font-bunya-bold p-2.5 text-sm text-white transition hover:shadow-lg"
                                    onClick={agregar}
                                >
                                    Agregar
                                </button>
                            </div>
                        </form>
                    </div>

                )
                }
                {state === "actualizar" && (
                    <div>Actualiza los datos <button onClick={handleBackClick} className="ml-10 hover:bg-custom-primary text-base border-2 px-4 py-2 rounded-lg"> Volver</button>
                        <form className="grid grid-cols-6 gap-4">
                            <div className="col-span-3">
                                <label htmlFor="nombre" className="block text-xs font-medium text-gray-700">
                                    Nombre:
                                    <input
                                        type="text"
                                        id="nombre"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                    />
                                </label>
                            </div>

                            <div className="col-span-3">
                                <label htmlFor="descripcion" className="block text-xs font-medium text-gray-700">
                                    Descripcion:
                                    <input
                                        type="text"
                                        id="descripcion"
                                        value={descripcion}
                                        onChange={(e) => setDescripcion(e.target.value)}
                                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                    />
                                </label>
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="precio" className="block text-xs font-medium text-gray-700">
                                    Precio:
                                    <input
                                        type="number"
                                        id="precio"
                                        value={precio}
                                        onChange={(e) => setPrecio(e.target.value)}
                                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                    />
                                </label>
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="tamaño" className="block text-xs font-medium text-gray-700">
                                    tamaño:
                                    <input
                                        type="text"
                                        id="tamaño"
                                        value={tamaño}
                                        onChange={(e) => setTamaño(e.target.value)}
                                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                    />
                                </label>
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="disponibilidad" className="block text-xs font-medium text-gray-700">
                                    Disponibilidad:
                                    <input
                                        type="number"
                                        id="disponibilidad"
                                        value={disponibilidad}
                                        onChange={(e) => setDisponibilidad(e.target.value)}
                                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                    />
                                </label>
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="stock" className="block text-xs font-medium text-gray-700">
                                    Stock:
                                    <select
                                        id="stock"
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"

                                    >
                                        <option value="no">No</option>
                                        <option value="yes">Sí</option>
                                    </select>
                                </label>
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="Cantidad Stock" className="block text-xs font-medium text-gray-700">
                                    Cantidad Stock:
                                    <input
                                        type="number"
                                        id="can_stock"
                                        value={stock}
                                        onChange={(e) => setStock(e.target.value)}
                                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                    />
                                </label>
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="img" className="block text-xs font-medium text-gray-700">
                                    Imagen:
                                    <input
                                        type="text"
                                        id="img"
                                        value={img}
                                        onChange={(e) => setImg(e.target.value)}
                                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                    />
                                </label>
                            </div>

                            <div className="col-span-6">
                                <button
                                    className="block w-full rounded-md bg-custom-secundary font-bunya-bold p-2.5 text-sm text-white transition hover:shadow-lg"
                                    onClick={actualizar}
                                >
                                    Agregar
                                </button>
                            </div>
                        </form>
                    </div>

                )
                }
            </div>
        </div>
    );
}

Prods.displayName = "/src/widgets/layout/item_proc.jsx";
export default Prods;