import { useParams } from "react-router";
import React, { useEffect, useState } from 'react'
import axios from "axios";

const ProductDetails = (props) => {
  const { id } = useParams()
  const [product, setProduct] = useState()

  useEffect(() => {
    getProductDetails();
  }, [id]);

  const getProductDetails = () => {
    console.log("hi");
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data)
      })
  }

  return (
    <div className="row justify-content-center mt-5">
      <h3 className="mb-4">Product Details</h3>
      {
        product
        && (<form className="w-75">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Title:</label>
            <input value={product.title}
              onChange={(e) => setProduct(e.target.value)} type="text" name='title' className="form-control" id="exampleFormControlInput1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Price:</label>
            <input value={product.price}
              onChange={(e) => setProduct(e.target.value)} type="number" name='price' className="form-control" id="exampleFormControlInput1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description:</label>
            <textarea onChange={(e) => setProduct(e.target.value)} name='description' className="form-control" id="exampleFormControlTextarea1" rows="3">
              {product.description}
            </textarea>
          </div>

        </form>
        )

      }
    </div>
  )
}

export default ProductDetails
