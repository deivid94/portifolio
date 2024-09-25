import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
export default function Aboutme(){
    return (
        <section className="aboutme_section">
        <div className="about__me"> 
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet consectetur.
            Semper lacus eget et consectetur egestas pharetra lectus.
             Lorem cras scelerisque id dignissim phasellus. 
             Sed turpis pellentesque gravida magna diam nunc porta eget.
            Vitae donec ultricies faucibus id et enim porta adipiscing.</p>

                  <a href="#"> Download CV </a>
        </div>

        <div className="aboutme__links">
            <ul>
                <li> <FontAwesomeIcon icon= {faGlobe} /> Website Development</li>
                <li> <FontAwesomeIcon icon ={faLaptop} /> Webapp Development</li>
                <li> <FontAwesomeIcon icon={faDatabase} /> Web hosting</li>
            </ul>
        </div>

        </section> 
           
    )
}