import styles from '../styles/footer.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../components/Themes/ThemeContext'
    

export default function Footer() {
    const {theme} = useContext(ThemeContext)
    return (
        <footer className={theme ==='dark' ? styles.footer : `${styles.footer} ${styles.footer_light}`}>

            <a href='https://github.com/MaxenceCalifano/my-portfoli'>Designé et développé par Maxence Califano en 2022</a>
        </footer>
    )
}