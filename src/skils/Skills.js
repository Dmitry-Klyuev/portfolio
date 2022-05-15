import style from './Skills.module.css'
import {SkillItem} from "./skillItem/SkillItem";

export const Skills = () => {
    return(
        <div className={style.skillsBlock}>
            <div className={style.skillsWrapper}>
                <h2>My Skills</h2>
                <div className={style.items}>
                    <SkillItem/>
                    <SkillItem/>
                    <SkillItem/>
                    <SkillItem/>
                    <SkillItem/>
                    <SkillItem/>
                </div>
            </div>
        </div>
    )
}