import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import { ShoppingCart } from "@/widgets/layout";
import routes from "@/routes";
import React, { useState, useEffect } from "react";

function App() {
  const [showCart, setShowCart] = useState(false);
  const location = useLocation();

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  useEffect(() => {
    if (location.pathname === "/checkout") {
      setShowCart(false);
    }
  }, [location.pathname]);

  return (
    <>
      <div className="container static bg-white mx-auto">
        <Navbar routes={routes} onCartClick={handleCartClick} />
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
