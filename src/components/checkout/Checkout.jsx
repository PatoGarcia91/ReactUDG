import { useContext, useState } from "react";
import { db } from "../../firebaseConfig.js";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { CarritoContext } from "../context/CarritoContext.jsx";

const Checkout = () => {

  const { carrito, getMontoTotal, resetCarrito } = useContext(CarritoContext);

  const [userInfo, setUserInfo] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const [ordenId, setOrdenId] = useState(null);

  const envioDeFormulario = (evento) => {
    evento.preventDefault();

    let total = getMontoTotal();
    let orden = {
      comprador: userInfo,
      juegos: carrito,
      total,
    };

    let ordenCollection = collection(db, "orden");
    addDoc(ordenCollection, orden).then((res) => {
      setOrdenId(res.id);
      resetCarrito();
    });

    let productsCollection = collection(db, "products");
    orden.items.forEach((elemento) => {
      let refDoc = doc(productsCollection, elemento.id);
      updateDoc(refDoc, { stock: elemento.stock - elemento.cantidad });
    });
  };

  const capturaDatos = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };


  return (
    <div>
      {ordenId ? (
        alert("gracias por su compra! tu ticket es: ", {ordenId})
      ) : (
      <form onSubmit={envioDeFormulario}>
        <input
          type="text"
          placeholder="nombre..."
          name="nombre"
          onChange={capturaDatos}
        />
        <input
          type="text"
          placeholder="email..."
          name="email"
          onChange={capturaDatos}
        />
        <input
          type="text"
          placeholder="telefono..."
          name="telefono"
          onChange={capturaDatos}
        />
        <button>comprar</button>
        <button type="button">cancelar</button>
      </form>
      )}
    </div>
  );
};

export default Checkout;