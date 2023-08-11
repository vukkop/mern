import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import SinglePorduct from "../views/SinglePorduct";


const ProductList = ({ productList }) => {

  return (
    <div className="row justify-content-center mt-5">
      <h3>ProductList</h3>
      <ul>
        {productList.map((e, i) =>
          <li key={i}>
            <Link to={`/product/${e._id}`}>{e.title}</Link >
          </li>
        )}
      </ul>

    </div >
  )
}

export default ProductList
