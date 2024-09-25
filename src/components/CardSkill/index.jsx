import './card.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"

export default function CardSkill (){
    return (
        <div className="card_skill">
         <i className='card_skill__language fa-3x'>
            <FontAwesomeIcon icon={faReact}  />
         </i>

        </div>
    )
}