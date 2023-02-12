
import {  useTasks } from "../../context/Tasks";
import TaskItem from "../TaskItem";

import '../TaskContainer/styles.scss'

const TaskContainer = () => {

  const {tasks, filterTasks, filterIsActive} = useTasks()
 
    return ( 
        <div className="to-do__tasks">
          {(filterIsActive ? filterTasks: tasks).map((task, index) => {
            return (
                <TaskItem task={task} index={index} key={index}/>
            )
          })}
        </div>
     );
}
 
export default TaskContainer;
