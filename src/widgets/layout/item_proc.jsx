import React, { useState } from "react";

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

    const handleAgregarClick = () => {
        setState("agregar");
    };
    const handleBackClick = () => {
        setState("productos");
    };
    const handleUpdateClick = () => {
        setState("actualizar");
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
                                <div className="min-w-0 flex-auto">
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
                                <div className="flex py-2 border-t border-black ">
                                    <div className="min-w-0 flex-auto">
                                        <img
                                            src={product.img}
                                            alt=""
                                            className="h-28 w-28 flex-none bg-gray-50"
                                        />
                                    </div>

                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm leading-6 text-gray-900" style={{ wordWrap: 'break-word' }}>{product.nombre}</p>
                                    </div>
                                    <div className="min-w-0 flex-auto">
                                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{product.descripcion}</p>
                                    </div>
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm leading-6 text-gray-900">{product.tamaño}</p>
                                    </div>
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm leading-6 text-gray-900">{product.precio}</p>
                                    </div>
                                    <div className="flex">
                                        <p className={`text-sm leading-6 ${product.disponibilidad === 1 ? 'text-green-500' : 'text-red-500'}`}>{product.disponibilidad === 1 ? 'DISPONIBLE' : 'NO DISPONIBLE'}</p>
                                    </div>
                                    <BiEditAlt onClick={handleUpdateClick} />
                                    <BiTrash />
                                </div>

                            ))}
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
                                        /* value={""} */
                                        onChange={""}
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
                                        /* value={""} */
                                        onChange={""}
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
                                        /* value={""} */
                                        onChange={""}
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
                                        /* value={""} */
                                        onChange={""}
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
                                        /* value={""} */
                                        onChange={""}
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
                                        /*  value={""} */
                                        onChange={""}
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
                                        /* value={""} */
                                        onChange={""}
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
                                        /* value={""} */
                                        onChange={""}
                                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                    />
                                </label>
                            </div>

                            <div className="col-span-6">
                                <button
                                    className="block w-full rounded-md bg-custom-secundary font-bunya-bold p-2.5 text-sm text-white transition hover:shadow-lg"
                                    onClick={""}
                                >
                                    Agregar
                                </button>
                            </div>
                        </form>
                    </div>
                )}

            </div>
        </div>
    );
}

Prods.displayName = "/src/widgets/layout/item_proc.jsx";
export default Prods;