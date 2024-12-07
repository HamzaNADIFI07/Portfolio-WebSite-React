import React from 'react';
import styles from './ProjectsStyles.module.css';
import ZombieDefenseGame from '../../assets/ZombieDefenseGame.png';

function Projects() {
  return (
  <section id='projects' className={styles.container}>
    <h1 className='sectionTitle'>Projects</h1>
    <div className={styles.projectsContainer}>
        <a href="https://github.com/HamzaNADIFI07/Zombie-Defense-Game">
            <img className='hover' src={ZombieDefenseGame} alt="Zombie-Defense-Game" />
        </a>
    </div>
  
  </section>
  );
}

export default Projects