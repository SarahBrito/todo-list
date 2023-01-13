
import Container from './components/Container'

import TaskProvaider from './context/Tasks'

import './App.scss'


function App() {

  return (
   
    <TaskProvaider>
      <div className= 'App'>
        <Container />
      </div>
    </TaskProvaider>

  )
}

export default App
