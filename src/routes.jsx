import { Inicio, Profile, Menu, SignUp } from "@/pages";

export const routes = [
  {
    name: "inicio",
    path: "/inicio",
    element: <Inicio />,
  },
  {
    name: "Nosotros",
    path: "/nosotros",
    element: <Profile />,
  },
  {
    name: "Menu",
    path: "/Menu",
    element: <Menu />,
  },
];

export default routes;
