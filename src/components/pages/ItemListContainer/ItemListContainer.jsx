import React, { useState, useEffect } from "react";
import ProductCard from "../../common/productCard/ProductCard";
import { useParams } from "react-router";
import { Box } from "@mui/material";
import ProductSkeleton from "../../common/ProductSkeleton/ProductSkeleton";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { products } from "../../../products";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const { name } = useParams();
  const [items, setItems] = useState([]); // {id, title ....}
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const coleccionDeProductos = collection(db, "products");
      let consulta = coleccionDeProductos;

      if (name) {
        const coleccionFiltrada = query(
          coleccionDeProductos,
          where("category", "==", name)
        );
        consulta = coleccionFiltrada;
      }

      try {
        const res = await getDocs(consulta);
        const newArray = res.docs.map((elemento) => {
          return { id: elemento.id, ...elemento.data() };
        });
        setItems(newArray);
      } catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [name]);

  // funcion para actualizar el estado de items con los productos filtrados porque estaban tardando en cargar
  const OnClickCategoria = (category) => {
    setLoading(true);
    setItems([]); // limpio el estado de items
    const fetchProductosFiltrados = async () => {
      // funcion asincrona para traer los productos filtrados
      const coleccionDeProductos = collection(db, "products");
      const coleccionFiltrada = query(
        coleccionDeProductos,
        where("category", "==", category)
      );
      try {
        const res = await getDocs(coleccionFiltrada);
        const newArray = res.docs.map((elemento) => {
          return { id: elemento.id, ...elemento.data() };
        });
        setItems(newArray);
      } catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductosFiltrados();
  };

  // funcion para rellenar la db
  // const rellenar = async () => {
  //   const productsCollection = collection(db, "products");
  //   try {
  //     for (const product of products) {
  //       await addDoc(productsCollection, product);
  //     }
  //     console.log("Productos agregados exitosamente");
  //   } catch (error) {
  //     console.error("Error agregando productos: ", error);
  //   }
  // };

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>

      {/* <button onClick={rellenar}>Rellenar db</button> */}

      <div className="categories">
        <button
          className="btn btn-secondary"
          onClick={() => OnClickCategoria("vuelo")}
        >
          Simuladores de Vuelo
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => OnClickCategoria("carreras")}
        >
          Simuladores de Carreras
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => OnClickCategoria("espacio")}
        >
          Simuladores de Espacio
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => OnClickCategoria("shooters")}
        >
          Simuladores de Shooters
        </button>
      </div>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </Box>
      ) : (
        <div className="item-list">
          {items.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
