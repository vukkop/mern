import React, { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {

  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const addNew = () => {
    getList()
  }

  const removeOne = (id) => {
    setList((current) => current.filter(el => el._id !== id))
  }

  const getList = () => {
    axios
      .get("http://localhost:8000/api/products/all")
      .then((res) => {
        setList(res.data)
      }).catch((err) => console.log(err))
  }


  return (
    <div>
      <h1>Main</h1>
      {/* <ProductForm onCreate={addNew} />
      <ProductList list={list} onDelete={removeOne} /> */}
    </div>
  );
};

export default Main
