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
            <img 
                className='to-do__header__icon'
                src={'/src/assets/images/' + (theme ? 'icon-moon.svg' : 'icon-sun.svg')} 
                alt="theme icon"  
                onClick={handleClickTheme}
            />
      </div>
     )
}
 
export default Header;
