import { createContext, useContext, useState, useEffect } from "react";


export const TaskContext = createContext()

const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks')) || []
const themeFromLocalStorage = JSON.parse( localStorage.getItem('theme')) || false

const TaskProvaider = ({ children }) => {
    const [tasks, setTasks] = useState(tasksFromLocalStorage)

    const [filterTasks, setFilterTasks] = useState([])
    const [filterIsActive, setFilterIsActive] = useState(false)
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

    return (
        <TaskContext.Provider 
        value={{
            tasks, setTasks, 
            filterTasks, setFilterTasks, 
            filterIsActive, setFilterIsActive,
            theme, setTheme
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTasks = () => {
    const context = useContext(TaskContext)
    const {tasks, setTasks,filterTasks, setFilterTasks,filterIsActive, setFilterIsActive, theme, setTheme} = context
    return {tasks, setTasks,filterTasks, setFilterTasks,filterIsActive, setFilterIsActive, theme, setTheme}
}

export default TaskProvaider;
