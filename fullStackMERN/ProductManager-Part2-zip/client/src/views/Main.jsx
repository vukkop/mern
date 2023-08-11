import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    console.log("hi");
    axios
      .get("http://localhost:8000/api/products/all")
      .then((res) => {
        setProductList(res.data)
      })
  }

  const addNewProduct = (newProduct) => {
    getList()
  }

  return (
    <div>
      <ProductForm onCreate={addNewProduct} />
      <ProductList productList={productList} />
    </div>
  );
};
export default Main
