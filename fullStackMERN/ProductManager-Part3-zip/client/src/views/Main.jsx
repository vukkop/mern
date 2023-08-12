import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const addNewProduct = () => {
    getList()
  }

  const removeProduct = (id) => {
    setProductList((current) => current.filter(el => el._id != id))
  }

  const getList = () => {
    axios
      .get("http://localhost:8000/api/products/all")
      .then((res) => {
        setProductList(res.data)
      }).catch((err) => console.log(err))
  }


  return (
    <div>
      <ProductForm onCreate={addNewProduct} />
      <ProductList productList={productList} onDelete={removeProduct} />
    </div>
  );
};

export default Main
