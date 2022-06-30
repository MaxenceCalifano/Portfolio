import styles from '../styles/button.module.css'
import { useContext } from 'react'
import { ThemeContext } from './Themes/ThemeContext'

export default function Button({className, scrollTo, projectsRef, type, children, lightClassName}) {
    const {theme} = useContext(ThemeContext)
    return (
        <button type={type}  className={theme === 'dark' ? `${styles.button} ${styles[className]}` :
        `${styles.button} ${styles.button_light} ${styles[className]} ${styles[lightClassName]}`
        } onClick={scrollTo ? () => scrollTo(projectsRef) : () => {}}>{children}</button>
    )
}