import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import numeral from 'numeral';


export function ShoppingCart() {
  const [open, setOpen] = useState(true)
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/cart');
      const data = await response.json();
      setCart(data);
    }
    fetchData();
  }, []);

 const calcular_total = () => {
      let total = 0;
      cart.forEach((product) => {
        const precio = parseFloat(product.price);
        const cantidad = parseFloat(product.quantity);
        total += precio * cantidad;
      });
      setTotal(total);
    };
    useEffect(() => {
      calcular_total();
    }, [cart]);


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-bunya text-gray-900">Carrito</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-custom-secundary hover:text-opacity-50"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cart.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray">
                                  <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-lemon text-gray-900">
                                      <h3>
                                        <a href={product.href}>{product.name}</a>
                                      </h3>
                                      <p className="ml-4">{numeral(product.price).format('$0,0')}</p>
                                    </div>
                                    <p className="mt-1 font-bunya text-sm text-gray-500">{product.color}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between font-bunya text-sm">
                                    <p className="text-gray-500 flex">Cantidad <p className='ml-3 font-lemon'>{product.quantity}</p></p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-custom-secundary hover:text-opacity-50"
                                      >
                                        Remover
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between font-bunya-bold text-lg text-gray-900">
                        <p>Subtotal</p>
                        <p className='font-lemon'>{numeral(total).format('$0,0')}</p>
                      </div>
                      <p className="mt-0.5 text-sm font-bunya text-gray-500">Costos de envío en el checkout.</p>
                      <div className="mt-6">
                        <div className="mt-6">
                          <Link
                            to="/checkout"
                            className="flex items-center justify-center rounded-md border border-transparent bg-custom-secundary px-6 py-3 text-base font-bunya-bold text-white shadow-sm hover:bg-opacity-90"
                          >
                            Ir al Checkout
                          </Link>
                        </div>

                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          O &nbsp;
                          <button
                            type="button"
                            className="font-medium text-custom-secundary hover:opacity-50"
                            onClick={() => setOpen(false)}
                          >
                            Continúa Comprando
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ShoppingCart;
