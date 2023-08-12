import { useParams, useNavigate } from "react-router";
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { deleteOne } from "../Utils/UtilsFunc";

const ProductDetails = (props) => {
  const { id } = useParams()
  const [product, setProduct] = useState({
    title: '',
    price: 0,
    description: '',
  })
  const navigate = useNavigate()


  useEffect(() => {
    getProductDetails();
  }, [id]);

  const getProductDetails = () => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data)
      })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const inputValue = {
      title: e.target.title.value,
      price: e.target.price.value,
      description: e.target.description.value
    }
    axios
      .put(`http://localhost:8000/api/products/${id}`, inputValue)
      .then(navigate('/'))
      .catch((err) => console.log(err));
  }

  const deleteProduct = (id) => {
    const res = deleteOne(id)

  }

  return (
    <div className="row justify-content-center mt-5">
      <form onSubmit={onSubmitHandler} className="w-75">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Title:</label>
          <input value={'' || product.title}
            onChange={(e) => setProduct(e.target.value)} type="text" name='title' className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Price:</label>
          <input value={0 || product.price}
            onChange={(e) => setProduct(e.target.value)} type="number" name='price' className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Description:</label>
          <textarea value={'' || product.description} onChange={(e) => setProduct(e.target.value)} name='description' className="form-control" id="exampleFormControlTextarea1" rows="3">
          </textarea>
        </div>
        <button onClick={() => deleteProduct(id)} className="btn btn-outline-danger float-start">Delete</button>
        <div className="float-end">

          <button type="submit" className="btn btn-primary">Update</button>
        </div>

      </form>

    </div>
  )
}

export default ProductDetails
