import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const FormLukeAPIWalker = (props) => {

  const [category, setCategory] = useState('people');
  const [id, setId] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/${category}/${id}`)
  }


  return (
    <div className='mt-5'>
      <form onSubmit={handleSubmit} className='form-floating'>
        <div className="row align-items-baseline">
          <div className="col-9">
            <div className="">
              <select onChange={e => setCategory(e.target.value)} value={category}
                id='name' name='name' className="form-select" placeholder="Open this select menu">
                <option value="people">People</option>
                <option value="planets">Planets</option>
              </select>
            </div>
          </div>

          <div className="col-3 align-content-bottom">
            <input onChange={e => setId(e.target.value)} value={id}
              type="number" name='id' id='id' className='form-control' placeholder='ID:' />
          </div>
          <div>
            <button className='btn btn-primary mt-3'>Submit</button>
          </div>
        </div>

      </form>
    </div>
  )
}

export default FormLukeAPIWalker
