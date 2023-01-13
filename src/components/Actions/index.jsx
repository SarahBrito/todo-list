import { useTasks } from "../../context/Tasks";
import Filter from "../Filter";
import './styles.scss'

const Actions = () => {

  const {tasks, setTasks} = useTasks()

  // *calcula a quantidade de itens restantes
  const showItemsLeft = () =>{
    const activeTasks = tasks.filter((active)=>{
      return active.status === false
  })
  return activeTasks.length
  }

  const itemsLeft = showItemsLeft() //? Quantidade de tarefas pendentes

   // *Limpa as tarefas completadas
   const clearTasksCompleted = () => {
    const resetTasksCompleted = tasks.map((task)=>{
      return {...task, status: false}
    })
    setTasks(resetTasksCompleted)
  }

    return ( 
        <div className="to-do__actions">
          <span className="to-do__info">{itemsLeft} items left</span>
          <Filter />
          <span className="btn-clear__completed" onClick={clearTasksCompleted}>Clear Completed</span>
        </div>
     );
}
 
export default Actions;