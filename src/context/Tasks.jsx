import { createContext, useContext, useState, useEffect } from "react";


export const TaskContext = createContext()

const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks')) || []
const themeFromLocalStorage = JSON.parse( localStorage.getItem('theme')) || false

const TaskProvaider = ({ children }) => {
    const [tasks, setTasks] = useState(tasksFromLocalStorage)
    const [filterIsActive, setFilterIsActive] = useState('all')
    const [theme, setTheme] = useState(themeFromLocalStorage)


    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks))
      },[tasks])
      
      useEffect(()=>{
        localStorage.setItem('theme', JSON.stringify(theme))
      },[theme])
      

    const handleClickTheme = () =>{
      setTheme(!theme)
    }

    const changeTasksStatus = (taskId)=>{
      const newTasks = tasks.map((task)=>{
        if (task.id === taskId){

            return {...task, status: !task.status}
        }
        return task
        })
        
        setTasks(newTasks)
    }

    const getTasks = () =>{
     if (filterIsActive === 'all') return tasks
     if (filterIsActive === 'uncompleted') return tasks.filter(task => !task.status)
     if (filterIsActive === 'completed') return tasks.filter(task => task.status)
    }

    const handleShowActiveTasks = () =>{
      setFilterIsActive('uncompleted')
    }

    const handleShowAllTasks = () =>{
      setFilterIsActive('all')
    }

    const handleShowCompletedTasks = () =>{
      setFilterIsActive('completed')
    }
    return (
        <TaskContext.Provider 
        value={{
            getTasks, 
            setTasks, 
            handleShowActiveTasks,
            handleShowAllTasks,
            handleShowCompletedTasks,
            theme, 
            setTheme,
            changeTasksStatus
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTasks = () => {
    const context = useContext(TaskContext)
    const {getTasks, setTasks, setFilterIsActive, theme, setTheme,changeTasksStatus,handleShowActiveTasks,
      handleShowAllTasks, handleShowCompletedTasks} = context
    return {getTasks, setTasks, setFilterIsActive, theme, setTheme, changeTasksStatus, handleShowActiveTasks,
      handleShowAllTasks, handleShowCompletedTasks}
}

export default TaskProvaider;
