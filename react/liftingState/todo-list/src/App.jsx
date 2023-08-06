import { useEffect, useState } from 'react';
import './App.css';
import NewTask from './components/NewTask';
import DisplayTasks from './components/DisplayTasks';


function App() {
  // const saveditems = JSON.parse(localStorage.getItem('items'));
  // const [taskList, setTaskList] = useState(saveditems || [])
  const [taskList, setTaskList] = useState(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    return savedTasks || []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }, [taskList]);

  const prevNewTasks = (newTask) => {
    setTaskList((prev) => [...prev, newTask])
  }

  const removeTaskById = (deleteIdx) => {
    const filteredTaskList = taskList.filter((el, i) => i !== deleteIdx)
    setTaskList(filteredTaskList)
  }

  const updateCompletedById = (updateIdx) => {
    const taskListCopy = [...taskList]
    taskListCopy[updateIdx].completed = taskListCopy[updateIdx].completed ? false : true
    setTaskList(taskListCopy)
  }

  return (
    <div className="App">
      <NewTask onCreate={prevNewTasks} />
      <DisplayTasks tasksInfo={taskList} removeTaskById={removeTaskById} updateCompletedById={updateCompletedById} />
    </div>
  );
}

export default App;

