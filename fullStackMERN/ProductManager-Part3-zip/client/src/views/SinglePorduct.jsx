import React, { useState } from 'react'
import { useNavigate } from "react-router";
import ProductDetails from '../components/ProductDetails'
import ProductDetailsDisplay from '../components/ProductDetailsDisplay'


const SinglePorduct = (props) => {
  const [edit, setEdit] = useState(false)
  const navigate = useNavigate()


  const toggleEdit = () => {
    setEdit(((current) => !current))
  }

  return (
    <div>

      <div className="row mt-5 mb-4 text-center align-items-baseline">
        <div className="col-3"><button onClick={() => navigate("/")} className="btn btn-secondary mb-2">Home</button></div>
        <div className="col-6">
          <h3 className="">Product Details</h3>
        </div>
        <div className="col-3">
          <div class="d-flex justify-content-center mt-5 form-check form-switch">
            <input value={edit} onChange={toggleEdit} class="form-check-input me-2 " type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label class="form-check-label" for="flexSwitchCheckDefault">Edit</label>
          </div>
        </div>
      </div>

      {edit ? <ProductDetails /> : <ProductDetailsDisplay />}


    </div>
  )
}

export default SinglePorduct
