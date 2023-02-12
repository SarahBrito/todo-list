import { RxCross1 } from 'react-icons/rx'
import { useTasks } from "../../context/Tasks";

import './styles.scss'


const TaskItem = ({task, index}) => {

    const {changeTasksStatus, removeTask} = useTasks()

    // * lida com o click no checkbox - tarefa concluida/pendente
    const handleClickCheckbox = (taskId) => {
        changeTasksStatus(taskId)
    }
    
    // *remove uma tarefa
    const handleTasksDeleted = (taskId) =>{
        removeTask(taskId)
    }
    
    return ( 
        <div className="to-do__task" key={index}>
            <div 
                className={task.status ? 'checkbox-checked': 'checkbox'} 
                onClick={() => handleClickCheckbox(task.id)}
                >
            </div>
            <p className={task.status ? 'task-completed': null}>
                {task.title}
            </p>
            <div 
                className="to-do__task-remove" 
                onClick={() => handleTasksDeleted(task.id)}>
               <RxCross1 className='remove-icon'/>
            </div>
        </div>
     );
}
 
export default TaskItem;