import { useCallback, useState, useEffect, useMemo } from "react"
import { ThemeContext, themes } from "./ThemeContext";

export default function ThemeContextWrapper(props) {

      const [theme, setTheme] = useState('dark');

      const changeTheme = useCallback( function () {
        setTheme(t => t === 'light' ? 'dark' : 'light')
      })

      useEffect( ()=> {
        switch (theme) {
            case themes.light:
                document.body.classList.add('light-content');
                break;
            case themes.dark:
                default:
                document.body.classList.remove('light-content');
                break;
        }
      },[theme])

      const value = useMemo( function () {
        return {
        theme : theme,
        changeTheme
        }
      }, [changeTheme, theme])
    return (
        <ThemeContext.Provider value={value} /* changeTheme={changeTheme} */>
            {props.children}
        </ThemeContext.Provider>
    )
}
