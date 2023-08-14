import React, { useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from '@mui/material/TextField';
import { Alert, AlertTitle } from '@mui/material';

export const NewAuthor = () => {
  const [name, setName] = useState('')
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8000/api/authors", { name })
      .then(() => {
        setName('')
        navigate('/')
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        console.log(errorResponse);
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr)
        if (errors.length > 0) {
          setTimeout(() => {
            setErrors([]);
          }, 5000);
        }
      })
  }


  return (
    <div>
      <Header />
      <h4>Add A New Author:</h4>

      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-body">
            <div>
              <TextField
                label="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className='mb-2'
              />
            </div>
            <Link to={'/'} className="btn btn-secondary"> Cancel</Link>
            <button type='submit' className="btn btn-primary ms-2"> Submit</button>
          </div>
        </div>
      </form>
      {
        errors.length > 0
        && <Alert className='w-50 float-end mt-3' severity="error">
          <AlertTitle>Error</AlertTitle>
          {errors.map((err, index) =>
            <div key={index}>
              <span >{err}</span><br />
            </div>
          )}
        </Alert>
      }






    </div >
  )
}
