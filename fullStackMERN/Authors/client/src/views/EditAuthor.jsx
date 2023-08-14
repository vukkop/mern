import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Alert, AlertTitle } from '@mui/material'
import AuthorForm from '../components/AuthorForm'

const EditAuthor = () => {
  const [author, setAuthor] = useState({ name: '' })
  const [loaded, setLoaded] = useState(false);
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
        setLoaded(true);
      })
  }

  const updateAuthor = (author) => {
    axios.put(`http://localhost:8000/api/authors/${id}`, author)
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
      <h4>Edit This Author:</h4>

      {loaded && (
        <AuthorForm
          onSubmitProp={updateAuthor}
          initialName={author.name}
        />
      )}

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
