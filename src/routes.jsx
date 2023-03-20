import { Inicio, Profile, SignIn, SignUp } from "@/pages";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export const routes = [
  {
    name: "inicio",
    path: "/inicio",
    element: <Inicio />,
  },
  {
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    icon: ShoppingCartIcon,
    path: "/sign-up",
    element: <SignUp />,
  },
];

export default routes;
