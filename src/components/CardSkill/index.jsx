import './card.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faJava } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDocker } from '@fortawesome/free-brands-svg-icons'



export default function CardSkill (){
    return (
        <section className='card_container'>
        <div className="card_skill">
         <i className='icon-fa fa-3x'>
            <FontAwesomeIcon icon={faJava}/>
         </i>

        </div>

        <div className='card_skill'>
            <i className='fa-3x' >
            <FontAwesomeIcon icon={faReact}/>
            </i>
        </div>

        <div className='card_skill'>
        <i className='fa-3x' >
            <FontAwesomeIcon icon={faJs}/>
        </i>
        </div>

        <div className='card_skill'>
        <i className='fa-3x' >
            <FontAwesomeIcon icon={faGithub}/>
        </i>
        </div>
        <div className='card_skill'>
        <i className='fa-3x' >
            <FontAwesomeIcon icon={faDocker}/>
        </i>
        </div>

        </section>
    )
}