
import { useTasks } from "../../context/Tasks";

import './styles.scss'


const TaskItem = ({task, index}) => {

    const {tasks, setTasks} = useTasks()

    // * lida com o click no checkbox - tarefa concluida/pendente
    const handleClickCheckbox = (index) => {
        const newTasks = tasks.map((task, i)=>{
        if (i == index){
            return {...task, status: !task.status}
        }
        return task
        })
        setTasks(newTasks)
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
                onClick={() => handleClickCheckbox(index)}
                >
            </div>
            <p className={task.status ? 'task-completed': null}>
                {task.title}
            </p>
            <div 
                className="to-do__task-remove" 
                onClick={() => removeTask(task.id)}>
                <img src="/src/assets/images/icon-cross.svg" alt="remove task" />
            </div>
        </div>
     );
}
 
export default TaskItem;