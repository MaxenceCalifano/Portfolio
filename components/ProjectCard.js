import Image from "next/image";
import styles from '../styles/projectCard.module.css'
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "./Themes/ThemeContext";

export default function ProjectCard(props) {
    const height = props.height;
    const width = props.width;

    const {theme} = useContext(ThemeContext)
    return (
        <>
        {props.reverse ?

<div className={theme ==='dark' ? `${styles.card} ${styles.reverseCard}` : `${styles.card} ${styles.card_light} ${styles.reverseCard}`}>
        

<div className={`${styles.image} ${styles.imageReverse}`}>
        <a className={styles.image_container} href={props.demoLink}>
                <Image 
                src={props.imgSrc}
                width={width}
                height={height}
                layout='responsive'
                sizes="50vw"
                alt={`capture d'écran du projet ${props.title}`}
                className={styles.project_image}
                > 
                </Image>
                <span className={styles.overlay}></span>
            </a>
</div>         
<div className={styles.content}>
    <h4 className={styles.project_title}>{props.title}<hr/></h4>
    <div className={`${styles.project_description} ${styles[props.projectNumber]} ${styles.project_descriptionReverse} `}>
        <p>{props.children}</p>
    </div>
    <ul className={styles.project_tech_list}>
        {props.tech_list.map(i => <li key={i}>{i} </li>)}
    </ul>
    <div className={styles.project_links}>
        <a href={props.githubLink}><FontAwesomeIcon icon={faGithub} title="lien vers le github du projet"/></a>
        <a href={props.demoLink}><FontAwesomeIcon icon={faArrowUpRightFromSquare} title="lien vers la demo du projet"/></a>
    </div>
</div>
</div>
        
        : <div className={theme ==='dark' ? `${styles.card}` : `${styles.card} ${styles.card_light} `}>
        
        <div className={styles.image}>
           <a className={styles.image_container} /* className={styles.image}  */href={props.demoLink}>
                <Image 
                src={props.imgSrc}
                width={width}
                height={height}
                layout='responsive'
                sizes="50vw"
                className={styles.project_image}
                alt={`capture d'écran du projet ${props.title}`}
                > 
                </Image>
                <span className={styles.overlay}></span>
            </a>
        </div>    
        <div className={styles.content}>
            <h4 className={styles.project_title}>{props.title}<hr/></h4>
            <div className={`${styles.project_description} ${styles[props.projectNumber]}`}>
                <p>{props.children}</p>
            </div>
            <ul className={styles.project_tech_list}>
                {props.tech_list.map( i => <li key={i}>{i} </li>)}
            </ul>
            <div className={styles.project_links}>
                <a href={props.githubLink}><FontAwesomeIcon icon={faGithub} title="lien vers le repo Github du projet"/></a>
                <a href={props.demoLink}><FontAwesomeIcon icon={faArrowUpRightFromSquare} title="lien vers la demo du projet"/></a>
            </div>
        </div>
    </div>}
        </>
    )
}