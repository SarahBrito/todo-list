import { RxCross1 } from 'react-icons/rx'
import { useTasks } from "../../context/Tasks";

import './styles.scss'


const TaskItem = ({task, index}) => {

    const {tasks, setTasks, filterIsActive, filterTasks, setFilterTasks,currentTasks,changeTasksStatus} = useTasks()


    // * lida com o click no checkbox - tarefa concluida/pendente
    const handleClickCheckbox = (taskId) => {
        changeTasksStatus(taskId)
    
    }
    
    // *remove uma tarefa
    const removeTask = (id) => {

        const newTasks = tasks.filter((item) => item.id !== id);
        setTasks(newTasks);
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
                onClick={() => removeTask(task.id)}>
               <RxCross1 className='remove-icon'/>
            </div>
        </div>
     );
}
 
export default TaskItem;