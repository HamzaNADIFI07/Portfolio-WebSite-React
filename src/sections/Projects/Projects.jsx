import React from 'react';
import styles from './ProjectsStyles.module.css';
import ZombieDefenseGameLight from '../../assets/ZombieDefenseGame_Light.png';
import ZombieDefenseGameDark from '../../assets/ZombieDefenseGame_Dark.png';
import WeatherApplicationLight from '../../assets/Weather_Light.png';
import WeatherApplicationDark from '../../assets/Weather_Dark.png';
import FruitCollectionGameLight from '../../assets/fruitCollectionGame_Light.png';
import FruitCollectionGameDark from '../../assets/fruitCollectionGame_Dark.png';
import PortFolioWebSiteLight from '../../assets/portFolioWebSite_Light.png';
import PortFolioWebSiteDark from '../../assets/portFolioWebSite_Dark.png';
import { useTheme } from '../../common/ThemeContext';
import ProjectCard from '../../common/ProjectCard';


function Projects() {
  const {theme}=useTheme();
  const ZombieDefenseGameIcon = theme==='light' ? ZombieDefenseGameLight : ZombieDefenseGameDark;
  const WeatherApplicationIcon = theme==='light' ? WeatherApplicationLight : WeatherApplicationDark;
  const FruitCollectionGameIcon = theme==='light' ? FruitCollectionGameLight : FruitCollectionGameDark;
  const PortFolioWebSiteIcon = theme==='light' ? PortFolioWebSiteLight : PortFolioWebSiteDark;


  return (
  <section id='projects' className={styles.container}>
    <h1 className='sectionTitle'>Projects</h1>
    <div className={styles.projectsContainer}>
        <ProjectCard 
        src={ZombieDefenseGameIcon} 
        link="https://github.com/HamzaNADIFI07/Zombie-Defense-Game"
        title="Zombie Defense Game"
        description={
          <>
            This Java project involves modeling and developing a defense game against zombie attacks. Inspired by the game Zombicide, it features simplified mechanics to offer a unique experience:
            <ul>
              <li>Dynamic construction of a city made up of streets and buildings.</li>
              <li>Separate game phases for survivors and zombies, each with specific rules.</li>
              <li>Various actions for survivors, such as attacking, searching, or using equipment.</li>
              <li>Different types of zombies with unique characteristics and behaviors.</li>
            </ul>
            The project is designed to be extensible, allowing easy addition of new features.
          </>
        }
        />

        <ProjectCard 
        src={FruitCollectionGameIcon} 
        link="https://github.com/HamzaNADIFI07/Fruit-collection-game"
        title="Fruit Collection Game"
        description={
          <>
            A Node.js game project where a character must eat fruits that randomly move within the game area to score points. The player must avoid a monster chasing them: each time the monster touches the player, they lose one life (out of the three initial lives).<br/>When the player runs out of lives, they lose the game. The game features simple and dynamic mechanics, with collision management and random movement.
          </>
        }
        />

        <ProjectCard 
        src={WeatherApplicationIcon} 
        link="https://github.com/HamzaNADIFI07/Interactive-Weather-Application"
        title="Interactive weather application"
        description={
          <>
            An interactive weather application developed with React.js that displays meteorological data for different cities (minimum temperature, maximum temperature, rainfall, sunshine, etc.) over the course of a year. The user can select a city and set it as their favorite, then compare its data with other cities. Results are presented in tables and interactive charts, providing a clear visualization of weather differences between cities.
          </>
        }
        />

        <ProjectCard 
        src={PortFolioWebSiteIcon} 
        link="https://github.com/HamzaNADIFI07/Portfolio-WebSite-React"
        title="Portfolio Web Site"
        description={
          <>
            An interactive weather application developed with React.js that displays meteorological data for different cities (minimum temperature, maximum temperature, rainfall, sunshine, etc.) over the course of a year. The user can select a city and set it as their favorite, then compare its data with other cities. Results are presented in tables and interactive charts, providing a clear visualization of weather differences between cities.
          </>
        }
        />
    </div>
  
  </section>
  );
}

export default Projects