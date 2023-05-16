import { SimpleFooter } from "@/widgets/layout";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Checkout() {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [nota, setNota] = useState('');
  const [total, setTotal] = useState(0);
  const [nombres, setProductNombres] = useState([]);

  const [cart, setCart] = useState([]);
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
    calcularNombresProductos();
  }, [cart]);
  const calcularNombresProductos = () => {
    const nombres = cart.map(product => product.name);
    setProductNombres(nombres);
  };

  // Obtener la fecha y hora actual
  const fechaActual = new Date();

  // Formatear la fecha y hora en el formato esperado por MySQL (YYYY-MM-DD HH:MM:SS)
  const fechaFormateada = fechaActual.toISOString().slice(0, 19).replace('T', ' ');

  const ordenar = () => {
    const productos = nombres.join(', ');
    console.log(productos);
    const orden = {
      direccion,
      correo: email,
      nombre_cliente: `${nombre} ${apellido}`,
      valor: total,
      productos,
      fecha: fechaFormateada,
      estado: 'Pendiente',
      nota
    };
    fetch('http://localhost:3000/ordenes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ orden })
    })
    console.log(orden)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  };
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
                    {total} COP
                  </p>

                  <p className="mt-1 text-sm text-gray-600">Productos:</p>
                </div>

                <div>
                  <div className="flow-root">
                    <ul className="-my-4 divide-y divide-gray-100">
                      
                    {cart.map((product) => (
                      <li className="flex items-center gap-4 py-4">
                        <img
                          src={product.imageSrc}
                          alt=""
                          className="h-16 w-16 rounded object-cover"
                        />

                        <div>
                          <h3 className="text-sm text-gray-900">{product.name}</h3>

                          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                            <div>
                              <dt className="inline"></dt>
                              <dd className="inline"></dd>
                            </div>

                            <div>
                              <dt className="inline">Cantidad:</dt>
                              <dd className="inline">{product.quantity}</dd>
                            </div>
                          </dl>
                        </div>
                      </li>
                    ))}


                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white py-12 md:py-24">
              <div className="mx-auto max-w-lg px-4 lg:px-8">
                <form className="grid grid-cols-6 gap-4">
                  <div className="col-span-3">
                    <label htmlFor="nombre" className="block text-xs font-medium text-gray-700">
                      Nombre:
                      <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="mt-1 w-full rounded-md border-2 border-gray-300 shadow-sm sm:text-sm"
                      />
                    </label>
                  </div>
                  <div className="col-span-3">
                    <label htmlFor="apellido" className="block text-xs font-medium text-gray-700">
                      Apellido:
                      <input
                        type="text"
                        id="apellido"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        className="mt-1 w-full rounded-md border-2 border-gray-300 shadow-sm sm:text-sm"
                      />
                    </label>
                  </div>
                  <div className="col-span-6">
                    <label htmlFor="email" className="block text-xs font-medium text-gray-700">
                      Email:
                      <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 w-full rounded-md border-2 border-gray-300 shadow-sm sm:text-sm"
                      />
                    </label>
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="direccion" className="block text-xs font-medium text-gray-700">
                      Dirección:
                      <input
                        type="text"
                        id="direccion"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                        className="mt-1 w-full rounded-md border-2 border-gray-300 shadow-sm sm:text-sm"
                      />
                    </label>
                  </div>
                  <div className="col-span-6">
                    <label htmlFor="nota" className="block text-xs font-medium text-gray-700">
                      Nota:
                      <input
                        type="text"
                        id="nota"
                        value={nota}
                        onChange={(e) => setNota(e.target.value)}
                        className="mt-1 w-full h-14 rounded-md border-2 border-gray-300 shadow-sm sm:text-sm"
                      />
                    </label>
                  </div>

                  <div className="col-span-6">
                    <button
                      className="block w-full rounded-md bg-custom-secundary font-bunya-bold p-2.5 text-xl text-white transition hover:shadow-lg"
                      onClick={ordenar}
                    >
                      Ordenar
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
