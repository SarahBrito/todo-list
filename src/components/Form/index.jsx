import { useState } from "react";
import { useTasks } from "../../context/Tasks";


import '../Form/styles.scss'

const Form = () => {
  const [task, setTask] = useState('')

  const { createNewTask } = useTasks()

  const handleAddTask = (event) => {
    event.preventDefault()
    handleTaskCreation(task)
  }

   const handleTaskCreation = () => {
    createNewTask(task)
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