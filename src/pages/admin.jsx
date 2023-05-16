import { Footer } from "@/widgets/layout";
import { Ordeness } from "@/widgets/layout/item_order";
import React, { useState, useEffect } from 'react';
import { Prods } from "@/widgets/layout/item_proc";

export function Admin() {
    const [products, setProducts] = useState([]);
    const [activeButton, setActiveButton] = useState('ordenes');
    const [ordenes, setOrders] = useState(['']);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3000/productos');
            const data = await response.json();
            setProducts(data);
        }
        fetchData();
    }, []);
    
    
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3000/ordenes');
            const data2 = await response.json();
            setOrders(data2);
        }
        fetchData();
    }, []);
    
    return (
        <>
            <div className="flex">
                <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <h2 className="text-xl font-bold">Administracion</h2>
                        </div>
                        <div className="flex-1">
                            <ul className="pt-2 pb-4 space-y-1 text-sm">
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                        onClick={() => handleButtonClick('ordenes')}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                            />
                                        </svg>
                                        <span>Ordenes</span>
                                    </a>

                                </li>
                                <li className="rounded-sm">
                                    <button
                                        className={`flex items-center p-2 space-x-3 rounded-md ${activeButton === 'productos' ? 'bg-white' : ''
                                            }`}
                                        onClick={() => handleButtonClick('productos')}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                            />
                                        </svg>
                                        <span>Productos</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    {activeButton == 'ordenes' && (
                        <div>
                            <Ordeness ordenes={ordenes} />
                        </div>
                    )}
                    {activeButton == 'productos' && (
                        <div>
                            <Prods products={products} />
                        </div>
                    )}
                </div>
            </div>

            <div className="bg-custom-primary">
                <Footer />
            </div>
        </>
    );
}

export default Admin;
