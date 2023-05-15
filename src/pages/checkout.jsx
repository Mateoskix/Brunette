import { SimpleFooter } from "@/widgets/layout";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Checkout() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [nota, setNota] = useState('');
  // Obtener la fecha y hora actual
  const fechaActual = new Date();

  // Formatear la fecha y hora en el formato esperado por MySQL (YYYY-MM-DD HH:MM:SS)
  const fechaFormateada = fechaActual.toISOString().slice(0, 19).replace('T', ' ');

  const ordenar = () => {
    const orden = {
      direccion,
      correo: email,
      nombre_cliente: `${nombre} ${apellido}`,
      valor: 150.99,
      productos: 'Producto 1, Producto 2',
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
        // Aquí puedes manejar el error de acuerdo a tus necesidades
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
                    <label htmlFor="apellido" className="block text-xs font-medium text-gray-700">
                      Apellido:
                      <input
                        type="text"
                        id="apellido"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
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
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
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
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
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
                        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                    </label>
                  </div>

                  <div className="col-span-6">
                    <button
                      className="block w-full rounded-md bg-custom-secundary font-bunya-bold p-2.5 text-sm text-white transition hover:shadow-lg"
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
/*
const orden = {
  direccion: 'Calle 123, Ciudad',
  correo: 'correo@example.com',
  nombre_cliente: 'Juan Pérez',
  valor: 150.99,
  productos: 'Producto 1, Producto 2',
  fecha: new Date(),
  estado: 'Pendiente',
  nota: 'Ninguna'
};
*/
/*
function ordenar(direccion, correo, nombre_cliente, valor, productos, fecha, estado, nota) {
  const orden = [direccion, correo, nombre_cliente, valor, productos, fecha, estado, nota];

  fetch('/ordenes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ orden }) // Enviar la lista como objeto JSON en el cuerpo de la solicitud
  })
    .then(response => {
      // Manejar la respuesta de la solicitud
    })
    .catch(error => {
      // Manejar errores de la solicitud
    });
}
*/