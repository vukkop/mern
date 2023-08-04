import React from 'react'

const DisplayTasks = (params) => {

  return (
    <div className='container mt-5'>

      <ol className='list-group list-group-numbered'>
        {
          params.tasksInfo.map((el, i) =>
            <li key={i} className='list-group-item'>
              <input checked={el.completed} onChange={() => params.updateCompletedById(i)} className="form-check-input ms-2 me-2" type="checkbox" value="" id="flexCheckDefault"></input>
              <span>

                {el.task}
              </span>
              <button onClick={() => params.removeTaskById(i)} className='btn btn-outline-danger btn-sm ms-5 float-end'><i className="bi bi-trash-fill"></i></button>
            </li>
          )
        }

      </ol>




    </div>
  )
}

export default DisplayTasks
