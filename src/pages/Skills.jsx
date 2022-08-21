import { VisualDemo, Skill } from "../components"
import {  skills  } from '../data/skills'

export const Skills = () => {
    return (
        <>
            <h1>Skills</h1>
            <VisualDemo />
            {
                skills.map((s,i) => (<Skill key={i} name={s.name} experience={s.experience} abouts={s.abouts} />))
            }
        </>
    )
}
