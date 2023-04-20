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
import React, {useState, useEffect} from 'react';

export function Menu() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/productos');
      const data = await response.json();
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div>
         <Example products={products} />
      </div>
      <div className="bg-custom-primary">
        <Footer />
      </div>
    </>
  );
}

export default Menu;
