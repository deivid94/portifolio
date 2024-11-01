import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Style.css'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Links(){
    return (
     <ul className='social-midia'> 
            
        <li>
            <a href="#" className='item__link' > 
                <FontAwesomeIcon icon={faEnvelope} className='fa-lg' />
                Email</a>
        </li>

        <li>
            
        <a href="#" className='item__link'>
            <FontAwesomeIcon icon={faGithub} className='fa-lg'/>
            Github</a>
            
        </li>

        <li>
            <a href="#" className='item__link'>
                <FontAwesomeIcon icon={faLinkedin} className='fa-lg'/>
                LinkedIN</a>
        </li>
     </ul>
        
    )   
}