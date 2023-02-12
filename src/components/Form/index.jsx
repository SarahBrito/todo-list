import { useState } from "react";
import { useTasks } from "../../context/Tasks";
import {v4 as uuidv4} from 'uuid'

import '../Form/styles.scss'

const Form = () => {
  const [task, setTask] = useState('')

  const {getTasks, setTasks} = useTasks()
  const tasks = getTasks()

  // * adiciona uma nova tarefa
  const handleAddTask = (event) => {
    event.preventDefault()
    handleTasks(task)
  }

   // *cria uma nova tarefa
   const handleTasks = () =>{

    const newTask = [...tasks, {
        id: uuidv4(),
        title: task,
        status: false
      }]
      setTasks(newTask)
    }

    return ( 
        <div className="to-do__input">
          <div className="checkbox"></div>
          <form onSubmit={handleAddTask}>
            <input 
                type="text" 
                placeholder='Create a new todo...' 
                value={task} 
                onChange={(e)=> setTask(e.target.value)} />
          </form>
        </div>
     );
}
 
export default Form;