import { Inicio, Nosotros, Menu, Checkout } from "@/pages";

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
];

export default routes;
