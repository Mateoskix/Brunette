import { Inicio, Nosotros, Menu, SignUp } from "@/pages";

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
    path: "/Menu",
    element: <Menu />,
  },
];

export default routes;
