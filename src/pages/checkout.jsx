import { SimpleFooter } from "@/widgets/layout";
import { Link } from 'react-router-dom';

export function Checkout() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="absolute inset-0 z-0 h-full w-full bg-white" /> {/* ESTO OCULTA LA NAVBAR */}
        <section className="absolute">
        <button className="hover:text-custom-secundary text-black font-bunya mb-3">
        <Link to="/inicio">← Volver</Link>
      </button>
          <div className="grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
            <div className="bg-gray-50 py-12 md:py-24">
              <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
                <div>
                  <p className="text-2xl font-medium tracking-tight text-gray-900">
                    26000 COP
                  </p>

                  <p className="mt-1 text-sm text-gray-600">Productos:</p>
                </div>

                <div>
                  <div className="flow-root">
                    <ul className="-my-4 divide-y divide-gray-100">
                      <li className="flex items-center gap-4 py-4">
                        <img
                          src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                          alt=""
                          className="h-16 w-16 rounded object-cover"
                        />

                        <div>
                          <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                            <div>
                              <dt className="inline">Size:</dt>
                              <dd className="inline">XXS</dd>
                            </div>

                            <div>
                              <dt className="inline">Color:</dt>
                              <dd className="inline">White</dd>
                            </div>
                          </dl>
                        </div>
                      </li>

                      <li className="flex items-center gap-4 py-4">
                        <img
                          src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                          alt=""
                          className="h-16 w-16 rounded object-cover"
                        />

                        <div>
                          <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                            <div>
                              <dt className="inline">Size:</dt>
                              <dd className="inline">XXS</dd>
                            </div>

                            <div>
                              <dt className="inline">Color:</dt>
                              <dd className="inline">White</dd>
                            </div>
                          </dl>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white py-12 md:py-24">
              <div className="mx-auto max-w-lg px-4 lg:px-8">
                <form className="grid grid-cols-6 gap-4">
                  <div className="col-span-3">
                    <label
                      htmlFor="FirstName"
                      className="block text-xs font-medium text-gray-700"
                    >
                      Nombre
                    </label>

                    <input
                      type="text"
                      id="FirstName"
                      className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                  </div>

                  <div className="col-span-3">
                    <label
                      htmlFor="LastName"
                      className="block text-xs font-medium text-gray-700"
                    >
                      Apellido
                    </label>

                    <input
                      type="text"
                      id="LastName"
                      className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="Email" className="block text-xs font-medium text-gray-700">
                      Email
                    </label>

                    <input
                      type="email"
                      id="Email"
                      className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="Phone" className="block text-xs font-medium text-gray-700">
                      Dirección
                    </label>

                    <input
                      type="tel"
                      id="Phone"
                      className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                  </div>
                  <fieldset className="col-span-6">
                    <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                      <div>
                        <label className="sr-only" htmlFor="PostalCode"> Código Postal</label>

                        <input
                          type="text"
                          id="PostalCode"
                          placeholder="Zip code"
                          className="relative w-full rounded-b-md border-gray-200 focus:z-10 sm:text-sm"
                        />
                      </div>
                    </div>
                  </fieldset>

                  <div className="col-span-6">
                    <button
                      className="block w-full rounded-md bg-custom-secundary font-bunya-bold p-2.5 text-sm text-white transition hover:shadow-lg"
                    >
                      Pagar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Checkout;
