import React from 'react'

const DisplayTasks = ({ tasksInfo, updateCompletedById, removeTaskById }) => {

  return (
    <div className='container mt-5'>
      <ol className='list-group list-group-numbered'>
        {
          tasksInfo.map((el, i) =>
            <li key={i} className='list-group-item'>
              <input checked={el.completed} onChange={() => updateCompletedById(i)} className="form-check-input ms-2 me-2" type="checkbox" value="" id="flexCheckDefault"></input>
              <span >
                {!el.completed ? el.task : <s>{el.task}</s>}
              </span>
              <button onClick={() => removeTaskById(i)} className='btn btn-outline-danger btn-sm ms-5 float-end'><i className="bi bi-trash-fill"></i></button>
            </li>
          )
        }
      </ol>
    </div>
  )
}

export default DisplayTasks
