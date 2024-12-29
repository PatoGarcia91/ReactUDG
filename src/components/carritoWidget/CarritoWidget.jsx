import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext.jsx";

const CarritoWidget = () => {
  const { carrito } = useContext(CarritoContext);

  return (
    <div>
      <FaCartShopping color="white" />
      <h3>{carrito.length}</h3>
    </div>
  );
};

export default CarritoWidget;