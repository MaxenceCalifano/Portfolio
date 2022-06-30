import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ProjectCard from '../components/ProjectCard'
import SkillsCard from '../components/SkillsCard'
import Navbar from '../components/Navbar'
import SectionSeparator from '../components/SectionSeparator'
import ContactForm from '../components/ContactForm'
import Button from '../components/Button'
 import { ThemeContext } from '../components/Themes/ThemeContext';
import React from 'react'
import { useRef, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faNodeJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import { faCode, faAngleDoubleRight, faCodeCompare, faDatabase, faServer,faMoon,faSun } from '@fortawesome/free-solid-svg-icons'
import { faFileCode } from '@fortawesome/free-regular-svg-icons'
import Footer from '../components/footer'

export default function Home() {

  const {theme} = useContext(ThemeContext)

  const projectsRef = useRef();
  const skillsRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  function scrollTo(target) {
    target.current.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Maxence Califano - Développeur Web</title>
        <meta name="description" content="Portfolio du développeur React Maxence Califano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    
      <header className={theme ==='dark' ? styles.header : `${styles.header} ${styles.header_light}`}>
      <Navbar
           scrollTo={scrollTo} 
           projectsRef={projectsRef} 
           skillsRef={skillsRef} 
           aboutRef={aboutRef} 
           contactRef={contactRef}>
      </Navbar>
    
        <h1>Maxence,<br/>Développeur Web</h1>
        <h2>Je construis des applications Web à l&apos;aide de React.JS, Node.JS, Express et MySQL</h2>
        <Button scrollTo={scrollTo} projectsRef={projectsRef}>Découvrir mes projets</Button>
      </header>

      <main className={theme ==='dark' ? `${styles.main}` : `${styles.main} ${styles.main_light}`}>
        <section>
          <SectionSeparator title="Mes projets"/>      
            <div ref={projectsRef} id="projects" className={styles.projects}>
            <ProjectCard width={724}
                        height={827} 
                        imgSrc="/images/sans-titre-2.jpg"
                        title='OhMyFood!'
                        tech_list={['HTML/CSS ', 'SASS ', 'Responsive/Mobile first']}
                        githubLink='https://github.com/MaxenceCalifano/OhMyFood'
                        demoLink='https://maxencecalifano.github.io/OhMyFood/'
                        projectNumber="project1"
                        reverse>
                        Réalisation dans le cadre de ma formation développeur web d&apos;un site web responsive pour une application
                        de réservation de repas en ligne. On y retrouve des animations CSS et j&apos;ai notament utilisé la méthodologie BEM et le préprocesseur SASS
            </ProjectCard>
            <ProjectCard width={724}
                        height={827} 
                        imgSrc="/images/screen_react_calculator.jpg"
                        title='React Calculator'
                        tech_list={['HTML/CSS ', 'SASS ', 'Responsive/Mobile first']}
                        githubLink='https://github.com/MaxenceCalifano/OhMyFood'
                        demoLink='https://maxencecalifano.github.io/OhMyFood/'
                        projectNumber="project2">
                        Une calculatrice permettant d&apos;effectuer les opérations basiques, réalisée en Javascript et à l&apos;aide de librairie ReactJS

            </ProjectCard>
            <ProjectCard width={724}
                        height={827} 
                        imgSrc="/images/screen_pomodoro_timer.jpg"
                        title='OhMyFood!'
                        tech_list={['HTML/CSS ', 'SASS ', 'Responsive/Mobile first']}
                        githubLink='https://github.com/MaxenceCalifano/OhMyFood'
                        demoLink='https://maxencecalifano.github.io/OhMyFood/'
                        reverse>
            A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, 
            and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
            </ProjectCard>
            <ProjectCard width={724}
                        height={827} 
                        imgSrc="/images/sans-titre-2.jpg"
                        title='OhMyFood!'
                        tech_list={['HTML/CSS ', 'SASS ', 'Responsive/Mobile first']}
                        githubLink='https://github.com/MaxenceCalifano/OhMyFood'
                        demoLink='https://maxencecalifano.github.io/OhMyFood/'>
            A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, 
            and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
            </ProjectCard>
           
            </div>
        </section>
        <section ref={skillsRef} className={styles.skills_section}>
          <SectionSeparator title="Ma stack"/>
          <div className={styles.skills} >
            <SkillsCard title='Développement frontend'>
              <li><FontAwesomeIcon icon={faCode}/> HTML/CSS</li>
              <li><FontAwesomeIcon icon={faSass}/> SASS</li>
              <li><FontAwesomeIcon icon={faJs}/> Javascript</li>
              <li><FontAwesomeIcon icon={faReact}/> React/Redux</li>
              <li><FontAwesomeIcon icon={faAngleDoubleRight}/> Next.JS</li>
            </SkillsCard>
            <SkillsCard title='Développement backend'>
              <li><FontAwesomeIcon icon={faNodeJs}/> Node.JS</li>
              <li><FontAwesomeIcon icon={faCodeCompare}/> Express</li>
              <li><FontAwesomeIcon icon={faDatabase}/> MySQL</li>
              <li><FontAwesomeIcon icon={faServer}/> API Rest</li>
              <li><FontAwesomeIcon icon={faFileCode}/> MongoDB</li>
            </SkillsCard>
          </div>
        </section>
        <section ref={aboutRef}  className={theme ==='dark' ? styles.about : `${styles.about} ${styles.about_light}`} >
          <SectionSeparator title='A propos'/>
          <p>J&apos;ai découvert par hasard le déeloppement web en créant un site pour un projet personnel, j&apos;ai tellement aimé
           que j&apos;ai décidé de me reconvertir et d&apos;en faire mon métier. <br/> 
           Autodidacte pendant 3 ans puis diplômé de la formation développeur Web d’OpenClassRooms, je suis aujourd’hui notamment capable de : <br/>
           <ul>
            <li>✅ Créer des interfaces utilisateur, en créant des composants réutilisables avec React</li>
            <li>✅ Gérer les états de l’application avec Redux</li>
            <li>✅ Intégrer une maquette de manière responsive en HTML/CSS/SASS</li>
            <li>✅ Créer une API avec NodeJS / ExpressJS et réaliser les opérations CRUD</li>
            <li>✅ Gérer un stockage de données MongoDB ou MySQL</li>
            <li>✅ Versionner mon code et collaborer avec Git / Github</li>
           </ul>
            Contactez-moi pour me parler de votre projet 👋
           </p>
        </section>
        <section className={styles.contact} ref={contactRef} >
          <SectionSeparator title='Contact'/>
          <ContactForm />
        </section>
      </main>

      <Footer/>
    </div>
  )
}
