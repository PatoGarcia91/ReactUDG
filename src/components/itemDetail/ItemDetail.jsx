import { useEffect, useState } from "react";
// import { products } from "../../products";
import { useParams } from "react-router-dom";
import CuentaCarrito from "../cuentaCarrito/CuentaCarrito.jsx";
import { db } from "../../firebaseConfig.js";
import { collection, getDoc, doc } from "firebase/firestore";

const ItemDetail = () => {
  const { id } = useParams(); // un objeto --> propiedad : valor

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let refDocJuego = doc(productsCollection, id);

    getDoc(refDocJuego).then((res) => {
      setProduct({ ...res.data(), id: res.id });
    });
  }, [id]);

  return (
    <div>
      <h2>{product.nombre}</h2>
      <img src={product.imagen} alt="" />
      <CuentaCarrito product={product} />
      <h3>{product.descripcion}</h3>
      <h3>${product.precio}</h3>
      <h3>Copias disponibles: {product.stock}</h3>
    </div>
  );
};

export default ItemDetail;