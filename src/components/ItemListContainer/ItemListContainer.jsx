import { useState } from "react";
// import { products } from "../../products";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardItem from "../cards/CardItem";
import './ItemListContainer.css'

import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
 

export const ItemListContainer = () => {
    const {categoria} = useParams(); // {}
    const [juegos, setJuegos] = useState([]);
  
    useEffect(() => {
      let productsCollection = collection(db, "products");

    let referFiltroColec = productsCollection;
    if (categoria) {
      let filtroColeccion = query(productsCollection, where("category", "==", categoria));
      referFiltroColec = filtroColeccion;
    }
    getDocs(referFiltroColec).then((res) => {
      let arrayJuegosFiltrados = res.docs.map((elemento) => {
        return { ...elemento.data(), id: elemento.id };
      });

      setJuegos(arrayJuegosFiltrados);
    });
  }, [categoria]);

    return (
      <div>
        <h2 className="titulo">Listado de juegos</h2>
        {juegos.map((game) => {
          return <CardItem key={game.id} juego={game} />;
        })}
      </div>
    );
  };

  export default ItemListContainer