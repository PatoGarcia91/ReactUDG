import { useState } from "react";
import { products } from "../../products";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardItem from "../cards/CardItem";
import './ItemListContainer.css'
 

export const ItemListContainer = () => {
    const {categoria} = useParams(); // {}
    const [juegos, setJuegos] = useState([]);
  
    useEffect(() => {
      const arrayFiltrado = products.filter(
          (game) => game.categoria === categoria
      );
      const getProducts = new Promise((resolve, reject) => {
        let isLogged = true;
        if (isLogged) {
          resolve(categoria ? arrayFiltrado : products);
        } else {
          reject({ message: "No se han podido cargar el listado" });
        }
      });
  
      getProducts
        .then((res) => {
          setJuegos(res);
        })
        .catch((error) => {
          console.log(error);
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