import React, { useState } from "react";
import numeral from 'numeral';


export function Prods(props) {
    const { products } = props;


    return (
        <div className="bg-white">
            <div className="mx-20 ">
                <h2 className="text-2xl font-bold text-gray-900">
                    PRODUCTOS
                </h2>
                <div className="justify-between py-5">
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
                            <div className="hidden sm:flex sm:flex-col sm:items-center">
                                <p className="text-sm font-semibold leading-6 text-gray-900">Disponibilidad</p>
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
                                <div className="hidden sm:flex sm:flex-col sm:items-center">
                                    <p className={`text-sm leading-6 ${product.disponibilidad === 1 ? 'text-green-500' : 'text-red-500'}`}>{product.disponibilidad === 1 ? 'DISPONIBLE' : 'NO DISPONIBLE'}</p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

Prods.displayName = "/src/widgets/layout/item_proc.jsx";
export default Prods;