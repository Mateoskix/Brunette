import React, { useState } from "react";
import numeral from 'numeral';


export function Ordeness(props) {
    const { products } = props;


    return (
        <div className="bg-white">
            <div className="mx-20 ">
                <h2 className="text-2xl font-bold text-gray-900">
                    ORDENES
                </h2>
                <div className="justify-between py-5">
                    <div className="flex flex-col sapce-y-4 ">
                        <div className="flex gap-x-4 py-2">
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">#Orden</p>
                            </div>
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">Productos</p>
                            </div>
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">Contacto</p>
                            </div>
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">Direccion</p>
                            </div>
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">Nota</p>
                            </div>
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">Fecha y Hora</p>
                            </div>
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">Valor</p>
                            </div>
                            <div className="hidden sm:flex sm:flex-col sm:items-center">
                                <p className="text-sm font-semibold leading-6 text-gray-900">Estado</p>
                            </div>
                            
                        </div>
                        {products.map((product) => (
                            <div className="flex py-2 border-t border-black ">    
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm leading-6 text-gray-900">1</p>
                                </div>
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm leading-6 text-gray-900">Producto 1, Producto 2</p>
                                </div>
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm leading-6 text-gray-900">Alejandro Gaviria Perez</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">correo@example.com</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">3002691290</p>
                                </div>
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm leading-6 text-gray-900">carrea 38 #84-56 Don Francisco</p>
                                </div>
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm leading-6 text-gray-900">NO QUIERO FRESAS</p>
                                </div>
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm leading-6 text-gray-900">2023-05-12 12:14:22</p>
                                </div>
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm leading-6 text-gray-900">$85.000</p>
                                </div>
                                <div className="hidden sm:flex sm:flex-col sm:items-center">
                                <p className="text-sm font-semibold leading-6 text-green-500">Pendiente</p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

Ordeness.displayName = "/src/widgets/layout/item_oder.jsx";
export default Ordeness;