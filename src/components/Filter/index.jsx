import { useState } from "react";
import { useTasks } from "../../context/Tasks";
import classNames from "classnames";

import '../Filter/styles.scss'

const Filter = () => {

    const [filterActive, setFilterActive] = useState(false)
    const [filterAll, setFilterAll] = useState(true)
    const [filterCompleted, setFilterCompleted] = useState(false)


    const { handleShowAllTasks, handleShowActiveTasks, handleShowCompletedTasks} = useTasks()
    
    const currentActiveClass = classNames('remove-active', {'active': filterActive})
    const currentAllClass = classNames('remove-active', {'active': filterAll})
    const currentCompletedClass = classNames('remove-active', {'active': filterCompleted})

     //* Filtros
    const handleFilterAllTasks = () => {
        handleShowAllTasks()
        setFilterAll(true)
        setFilterActive(false)
        setFilterCompleted(false)
    }

    const handleFilterActiveTasks = () => {
        handleShowActiveTasks()
        
        setFilterActive(true)
        setFilterAll(false)
        setFilterCompleted(false)
        
    }

    const handleFilterCompletedTasks = () => {
        handleShowCompletedTasks()
        
        setFilterAll(false)
        setFilterActive(false)
        setFilterCompleted(true)
    }
    return ( 
        <div className="to-do__filters">
            <span className={`filter__all ${currentAllClass}`}  onClick={handleFilterAllTasks}>All</span>
            <span className={`filter__active ${currentActiveClass}`} onClick={handleFilterActiveTasks}>Active</span>
            <span className={`filter__completed ${currentCompletedClass}`} onClick={handleFilterCompletedTasks}>Completed</span>
          </div>
     );
}
 
export default Filter;