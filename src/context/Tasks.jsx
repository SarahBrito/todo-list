import { createContext, useContext, useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid'

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

    const createNewTask = (task) =>{

      const newTask = [...tasks, {
          id: uuidv4(),
          title: task,
          status: false
        }]
        setTasks(newTask)
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

    const removeTask = (taskId) => {
      const newTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(newTasks);
  }

  const getItemsLeft = () =>{
    const activeTasks = tasks.filter((task)=>{
      return task.status === false
  })
  return activeTasks.length
  }

  const clearTasksCompleted = () => {
    const resetTasksCompleted = tasks.map((task)=>{
      return {...task, status: false}
    })
    setTasks(resetTasksCompleted)
  }

    return (
      <TaskContext.Provider 
      value={{
          getTasks, 
          handleShowActiveTasks,
          handleShowAllTasks,
          handleShowCompletedTasks,
          theme, 
          setTheme,
          changeTasksStatus,
          removeTask,
          createNewTask,
          getItemsLeft,
          clearTasksCompleted
      }}>
          {children}
      </TaskContext.Provider>
    )
}

export const useTasks = () => {
    const context = useContext(TaskContext)
    const {
      getTasks, 
      theme, 
      setTheme,
      changeTasksStatus,
      handleShowActiveTasks,
      handleShowAllTasks, 
      handleShowCompletedTasks,
      removeTask,
      createNewTask,
      getItemsLeft,
      clearTasksCompleted} = context

    return {
      getTasks, 
      theme, 
      setTheme, 
      changeTasksStatus, 
      handleShowActiveTasks,
      handleShowAllTasks, 
      handleShowCompletedTasks,
      removeTask,
      createNewTask,
      getItemsLeft,
      clearTasksCompleted}
}

export default TaskProvaider;
