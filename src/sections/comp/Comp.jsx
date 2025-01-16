import styles from './CompStyles.module.css';
import MyImg from '../../assets/MyImg.png';
import themeIconSun from '../../assets/sun.svg';
import themeIconMoon from '../../assets/moon.svg';
import GithubLight from '../../assets/github-light.svg';
import GithubDark from '../../assets/github-dark.svg';
import LinkedinLight from '../../assets/linkedin-light.svg';
import LinkedinDark from '../../assets/linkedin-dark.svg';
import GmailLight from '../../assets/gmail-light.svg';
import GmailDark from '../../assets/gmail-dark.svg';
import CV from '../../assets/HamzaNadifiResume.pdf';
import { useTheme } from '../../common/ThemeContext';



function Comp() {
    const {theme,toggleTheme}=useTheme();
    const themeIcon = theme==='light' ? themeIconSun : themeIconMoon;
    const GithubIcon = theme==='light' ? GithubLight : GithubDark;
    const LinkedinIcon = theme==='light' ? LinkedinLight : LinkedinDark;
    const GmailIcon = theme==='light' ? GmailLight : GmailDark;

  return (
  <section id="comp" className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img className={styles.comp}src={MyImg} alt="Profile picture of Hamza NADIFI" />
        <img className={styles.colorMode}src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>

    </div>
    <div className={styles.info}>
        <h1>Hamza <br /> NADIFI</h1>
        <h2>Computer science student</h2>
        <span>
            <a href="https://github.com/HamzaNADIFI07" target="_blank">
                <img src={GithubIcon} alt="Github icon" />
            </a>
            <a href="https://www.linkedin.com/in/hamza-nadifi-18840a1a9/" target="_blank">
                <img src={LinkedinIcon} alt="Linkedin icon" />
            </a>
            <a href="mailto:nadifihamza07@gmail.com" target="_mailto:nadifihamza07@gmail.com">
                <img src={GmailIcon} alt="Gmail icon" />
            </a>
         </span>
         <p className={styles.description}>I am a computer science student at the University of Lille, passionate about web development and innovative technologies. I am currently looking for an apprenticeship to apply my skills and deepen my knowledge.</p>
         <a href={CV} download>
            <button className="hover">Resume</button>
         </a>
    </div>
  </section>
  )
}

export default Comp