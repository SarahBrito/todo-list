import { createContext, useContext, useState, useEffect } from "react";


export const ThemeContext = createContext()

const themeFromLocalStorage = JSON.parse( localStorage.getItem('theme')) || false

const ThemeProvaider = ({ children }) => {
    const [theme, setTheme] = useState(themeFromLocalStorage)

      useEffect(()=>{
        localStorage.setItem('theme', JSON.stringify(theme))
      },[theme])
      

    const changeCurrentTheme = () =>{
      setTheme(!theme)
    }

    return (
      <ThemeContext.Provider value={{theme, changeCurrentTheme}}>
          {children}
      </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    const {theme, changeCurrentTheme} = context

    return {theme, changeCurrentTheme}
}

export default ThemeProvaider;
