import { Inicio, Nosotros, Menu, Checkout, Admin } from "@/pages";

export const routes = [
  {
    name: "inicio",
    path: "/inicio",
    element: <Inicio />,
  },
  {
    name: "Nosotros",
    path: "/nosotros",
    element: <Nosotros />,
  },
  {
    name: "Menu",
    path: "/menu",
    element: <Menu />,
  },
  {
    name: "Checkout",
    path: "/checkout",
    element: <Checkout />,
  },
  {
    name: "Admin",
    path: "/Admin",
    element: <Admin />,
  },
];

export default routes;
