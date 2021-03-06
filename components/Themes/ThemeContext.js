import { createContext } from "react"

export const themes = {
    dark: "dark",
    light: "light-content"
  }
  export const ThemeContext = createContext({
    theme: themes.dark,
    changeTheme: () => {},
  })