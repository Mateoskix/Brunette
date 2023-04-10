import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import { Example } from "@/widgets/layout/item";

export function Menu() {
  return (
    <>
      <div>
        <Example></Example>
      </div>
      <div className="bg-custom-primary">
        <Footer />
      </div>
    </>
  );
}

export default Menu;
