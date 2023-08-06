import React from 'react'
import { useState } from 'react'

const NewTask = ({ onCreate }) => {
  const [task, setTask] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = {
      task: e.target.task.value,
      completed: false
    }
    onCreate(inputValue)
    setTask("")
  }

  return (
    <div className='container mt-5'>
      <form onSubmit={handleSubmit} className=''>
        <div className="form-floating mb-3">
          <input name='task' value={task} onChange={(e) => setTask(e.target.value)} id="floatingInput" type="text" className="form-control w-50" placeholder="New Task"></input>
          <label htmlFor="floatingInput">New Task</label>
          <button className='btn btn-primary btn-lg mt-2'>Add</button>
        </div>
      </form>
    </div >

  )
}

export default NewTask
