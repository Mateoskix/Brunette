import React, { useState } from "react";

const products = [
    {
        id: 1,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        price: '$90.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 2,
        name: 'Medium Stuff Satchel',
        href: '#',
        color: 'Blue',
        price: '$32.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    {
        id: 3,
        name: 'Medium Stuff Satchel',
        href: '#',
        color: 'Blue',
        price: '$32.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    {
        id: 4,
        name: 'Medium Stuff Satchel',
        href: '#',
        color: 'Blue',
        price: '$32.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
]

export function Ordeness(props) {
    const { ordenes } = props;
    console.log(ordenes);
    if (!Array.isArray(ordenes)) {
        // Si ordenes no es un array, haz la conversión necesaria.
        ordenes = [ordenes];
    }
    return (
        <div className="bg-white">
            <div className="mx-20 ">
                <h2 className="text-2xl font-bold text-gray-900">
                    ORDENES
                </h2>
                <div className="justify-between py-5">
                    <div className="flex flex-col sapce-y-4 ">
                        <div className="flex gap-x-4 py-2">
                            <div className="min-w-0 flex-start">
                                <p className="text-sm font-semibold leading-6 text-gray-900"></p>
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
                        {ordenes.map((orden) => (
                            <div className="flex py-2 border-t border-black ">
                                <div className="min-w-0 flex-inital">
                                    <p className="text-sm leading-6 text-gray-900"></p>
                                </div>
                                <div className="min-w-0 flex-inital">
                                    <p className="text-sm w-32 leading-6 text-gray-900">{orden.productos}</p>
                                </div>
                                <div className="min-w-0 flex-auto pl-10">
                                    <p className="text-sm w-36 leading-6 text-gray-900">{orden.nombre_cliente}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{orden.correo}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">3002691290</p>
                                </div>
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm w-24 leading-6 text-gray-900">{orden.direccion}</p>
                                </div>
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm w-20 leading-6 text-gray-900">{orden.nota}</p>
                                </div>
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm w-16 leading-6 text-gray-900">{orden.fecha}</p>
                                </div>
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm leading-6 text-gray-900">{orden.valor}</p>
                                </div>
                                <div className="flex-end">
                                    <p className="text-sm font-semibold leading-6 text-green-500">{orden.estado}</p>
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