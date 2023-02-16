import { BsSun } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa'

import { useTheme } from '../../context/Theme';

import './styles.scss'


const Header = () => {

    const {theme, changeCurrentTheme} = useTheme()
  
    const handleClickTheme = () =>{
        return changeCurrentTheme()
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
