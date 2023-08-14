import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";

const AuthorForm = (props) => {
  const { initialName, onSubmitProp } = props;
  const [name, setName] = useState(initialName);
  const handleSubmit = e => {
    e.preventDefault();
    onSubmitProp({ name });
    setName("");
  }

  return (
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
  )
}

export default AuthorForm
