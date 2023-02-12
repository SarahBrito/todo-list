
import {  useTasks } from "../../context/Tasks";
import TaskItem from "../TaskItem";

import '../TaskContainer/styles.scss'

const TaskContainer = () => {

  const {getTasks} = useTasks()
  const tasks = getTasks()
  
    return ( 
        <div className="to-do__tasks">
          {tasks.map((task, index) => {
            return (
                <TaskItem task={task} index={index} key={index}/>
            )
          })}
        </div>
     );
}
 
export default TaskContainer;
