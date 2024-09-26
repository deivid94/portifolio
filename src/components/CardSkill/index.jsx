import './card.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faJava } from '@fortawesome/free-brands-svg-icons'

export default function CardSkill (){
    return (
        <section className='card_container'>
        <div className="card_skill">
         <i className='fa-3x'>
            <FontAwesomeIcon icon={faReact}/>
         </i>
          
        </div>

        <div className='card_skill'>
        <i className='fa-3x' >
            <FontAwesomeIcon icon={faJava}/>
        </i>
        </div>

        <div className='card_skill'>
        <i className='fa-3x' >
            <FontAwesomeIcon icon={faJava}/>
        </i>
        </div>

        <div className='card_skill'>
        <i className='fa-3x' >
            <FontAwesomeIcon icon={faJava}/>
        </i>
        </div>
        <div className='card_skill'>
        <i className='fa-3x' >
            <FontAwesomeIcon icon={faJava}/>
        </i>
        </div>
        <div className='card_skill'>
        <i className='fa-3x' >
            <FontAwesomeIcon icon={faJava}/>
        </i>
        </div>

        </section>
    )
}