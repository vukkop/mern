import React, { useState } from "react";
import axios from "axios";

const ProductForm = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const inputValue = {
      title: e.target.title.value,
      price: e.target.price.value,
      description: e.target.description.value
    }

    axios
      .post("http://localhost:8000/api/products", {
        title,
        price,
        description,
      })
      .then(() => {
        onCreate(inputValue)
        setTitle("")
        setPrice(0)
        setDescription("")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="row justify-content-center mt-5">
      <h3 className="text-center">New Product</h3>
      <form className="mt-3 w-75" onSubmit={onSubmitHandler}>
        <p>
          <label>Title:</label>
          <br />
          <input
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="form-control"
          />
        </p>
        <p>
          <label>Price:</label>
          <br />
          <input
            type="number"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="form-control"
          />
        </p>
        <p>
          <label>Description:</label>
          <br />
          <textarea
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="form-control"
          />
        </p>
        <button className="btn btn-primary float-end" type="submit">Create</button>
      </form>
    </div >
  );
};

export default ProductForm;
