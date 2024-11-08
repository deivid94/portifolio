
import './Skill.css'
import CardSkill from '../CardSkill'
export default function Skills (){
    return (
        <section className='container_skill'>
            <div className='skill_title'>
                <p>PORTIFOLIO</p>
                <h1 className='skill_tittle_h'>Hard Skills Levels</h1>
            </div>
            <div className='skill'>
                 <CardSkill />
            </div>
        </section>
    )
}