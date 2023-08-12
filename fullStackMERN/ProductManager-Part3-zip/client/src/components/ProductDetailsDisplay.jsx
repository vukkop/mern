import React from 'react'
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from 'react'
import axios from "axios";


const ProductDetailsDisplay = () => {

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



  return (
    <div>
      <div className="card">
        <h4 className="card-header">{product.title}</h4>
        <div className="card-body">
          <p className="card-text">{product.description}</p>
          <h5 className='float-end'>${product.price}</h5>
        </div>
        <div class="card-footer text-body-secondary">
          {product.createdAt}
        </div>
      </div>



    </div>
  )
}

export default ProductDetailsDisplay
