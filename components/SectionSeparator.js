import styles from '../styles/sectionSeparator.module.css'

export default function SectionSeparator({title}) {
    return (
        <div className={styles.projectsHeader} >
          <h3 className={styles.projects_sectionTitle}>{title}</h3>
            <hr/>
          </div>
    )
}