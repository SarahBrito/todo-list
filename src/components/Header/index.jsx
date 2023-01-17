import { BsSun } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa'

import { useTasks } from "../../context/Tasks";

import './styles.scss'


const Header = () => {

    const {theme, setTheme} = useTasks()
  
    const handleClickTheme = () =>{
        setTheme(!theme)
    }

    return ( 
        <div className="to-do__header">
            <h1>TODO</h1>
            <div className="to-do__header__icon"  
                onClick={handleClickTheme}>
                {theme ? <FaMoon className='theme-icon'/> : <BsSun className='theme-icon'/>}
            </div>
      </div>
     )
}
 
export default Header;
