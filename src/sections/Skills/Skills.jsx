import styles from './SkillsStyles.module.css';
import checkmarkDark from '../../assets/checkmark-dark.svg';
import checkmarkLight from '../../assets/checkmark-light.svg';
import { useTheme } from '../../common/ThemeContext';
import SkillList from '../../common/SkillList';

function Skills() {
    const {theme}=useTheme();
    const checkmarkIcon = theme==='light' ? checkmarkLight : checkmarkDark;

    return (
    <section id='skills' className={styles.container}>
        <h1>Skills</h1>
        
        <h2>Programming Languages</h2>
        <div className={styles.skillList}>
            <SkillList src={checkmarkIcon} skill="HTML"/>
            <SkillList src={checkmarkIcon} skill="CSS"/>
            <SkillList src={checkmarkIcon} skill="JavaScript"/>
            <SkillList src={checkmarkIcon} skill="Java"/>
            <SkillList src={checkmarkIcon} skill="Python"/>
            <SkillList src={checkmarkIcon} skill="C"/>
            <SkillList src={checkmarkIcon} skill="MySQL"/>
            <SkillList src={checkmarkIcon} skill="PHP"/>
        </div>
        <hr />
        
        <h2>Frameworks & Libraries</h2>
        <div className={styles.skillList}>
            <SkillList src={checkmarkIcon} skill="Node.js"/>
            <SkillList src={checkmarkIcon} skill="React"/>
        </div>
        <hr />
        
        <h2>Development Tools</h2>
        <div className={styles.skillList}>
            <SkillList src={checkmarkIcon} skill="Visual Studio Code"/>
            <SkillList src={checkmarkIcon} skill="Eclipse"/>
            <SkillList src={checkmarkIcon} skill="Emacs"/>
            <SkillList src={checkmarkIcon} skill="IntelliJ IDEA"/>
        </div>
        <hr />
        
        <h2>Version Control & Others</h2>
        <div className={styles.skillList}>
            <SkillList src={checkmarkIcon} skill="GitLab"/>
            <SkillList src={checkmarkIcon} skill="GitHub"/>
            <SkillList src={checkmarkIcon} skill="Markdown"/>
        </div>
    </section>
  );
}

export default Skills;
