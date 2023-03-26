import { Inicio, Profile, Menu, SignUp } from "@/pages";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

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
  {
    icon: ShoppingCartIcon,
    path: "/sign-up",
    element: <SignUp />,
  },
];

export default routes;
