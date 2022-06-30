import styles from '../styles/skillsCard.module.css'
import { useContext } from "react";
import { ThemeContext } from "./Themes/ThemeContext";

export default function SkillsCard(props) {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={theme === 'dark' ? `${styles.card}` : `${styles.card} ${styles.card_light}`} >
            <h4 className={styles.title}>{props.title}</h4>
            <ul>
                {props.children}
            </ul>
        </div>
    )
}