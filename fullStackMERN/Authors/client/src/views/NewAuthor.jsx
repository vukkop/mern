import React, { useState } from 'react'
import Header from '../components/Header'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert, AlertTitle } from '@mui/material';
import AuthorForm from '../components/AuthorForm';

export const NewAuthor = () => {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate()

  const createAuthor = (author) => {
    axios.post("http://localhost:8000/api/authors", author)
      .then(() => {
        navigate('/')
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr)
        if (errorArr.length > 0) {
          setTimeout(() => {
            setErrors([]);
          }, 4000);
        }
      })
  }

  return (
    <div>
      <Header />
      <h4>Add A New Author:</h4>

      <AuthorForm onSubmitProp={createAuthor} initialName="" />

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
