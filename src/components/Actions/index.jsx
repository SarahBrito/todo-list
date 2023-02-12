import { useTasks } from "../../context/Tasks";
import Filter from "../Filter";
import './styles.scss'

const Actions = () => {

  const { getItemsLeft, clearTasksCompleted } = useTasks()
   
  // *calcula a quantidade de itens restantes
  const showItemsLeft = () =>{
    return getItemsLeft()
  }
 
  const itemsLeft = showItemsLeft() //? Quantidade de tarefas pendentes

   // *Limpa as tarefas completadas
  const handleCheckedTasks = () =>{
    clearTasksCompleted()
  }

  return ( 
      <div className="to-do__actions">
        <span className="to-do__info">{itemsLeft} items left</span>
        <Filter />
        <span className="btn-clear__completed" onClick={handleCheckedTasks}>Clear Completed</span>
      </div>
    );
}
 
export default Actions;