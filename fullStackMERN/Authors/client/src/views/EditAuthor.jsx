import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { Alert, AlertTitle, TextField } from '@mui/material'

const EditAuthor = () => {
  const [author, setAuthor] = useState({ name: '' })
  const [errors, setErrors] = useState([]);
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = () => {
    axios
      .get(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        setAuthor(res.data)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const inputValue = {
      name: e.target.name.value,
    }

    axios.put(`http://localhost:8000/api/authors/${id}`, inputValue)
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
      <h4>Edit This Author:</h4>

      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-body">
            <div>
              <TextField
                id='name'
                name='name'
                label="Name"
                onChange={(e) => {
                  setAuthor({ name: e.target.value })
                }}
                value={author.name}
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
    </div>
  )
}

export default EditAuthor
