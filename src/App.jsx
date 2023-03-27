import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import { ShoppingCart } from "@/widgets/layout";
import routes from "@/routes";
import React, { useState } from 'react';

function App() {

  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <div className="container static bg-white mx-auto">
        <Navbar routes={routes} onCartClick={handleCartClick}/>
      </div>
      {showCart && <ShoppingCart />}
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/inicio" replace />} />
      </Routes>
    </>
  );
}

export default App;
