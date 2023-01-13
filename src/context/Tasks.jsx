import { createContext, useContext, useState } from "react";


export const TaskContext = createContext()

const TaskProvaider = ({ children }) => {
    const [tasks, setTasks] = useState([
         
    {id: "f8009cf0-3256-4241-b6f6-22c9310fcf8d", title: "Aprender Typescript", status: false},
    {id: "c26eb04f-1d83-4a13-bf2e-63229ee7144e", title: "Aprender Inglês", status: false}
    ])

    const [filterTasks, setFilterTasks] = useState([])
    const [filterIsActive, setFilterIsActive] = useState(false)
    const [theme, setTheme] = useState(false)

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
