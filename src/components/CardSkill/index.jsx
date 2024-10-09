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
        <div className="wrapper">
            <div className="outer">
                <div className="inner">
                    <div className="icon">
                        <i className='fa-3x'>
                          <FontAwesomeIcon icon={ faReact} />  
                        </i>
                    </div>
                </div>
            </div>
        </div>
        <div className="wrapper">
            <div className="outer">
                <div className="inner">
                    <div className="icon">
                        <i className='fa-3x'>
                          <FontAwesomeIcon icon={ faJava} />  
                        </i>
                    </div>
                </div>
            </div>
        </div>
        <div className="wrapper">
            <div className="outer">
                <div className="inner">
                    <div className="icon">
                        <i className='fa-3x'>
                          <FontAwesomeIcon icon={ faJs} />  
                        </i>
                    </div>
                </div>
            </div>
        </div>
        <div className="wrapper">
            <div className="outer">
                <div className="inner">
                    <div className="icon">
                        <i className='fa-3x'>
                          <FontAwesomeIcon icon={ faGithub} />  
                        </i>
                    </div>
                </div>
            </div>
        </div>
        <div className="wrapper">
            <div className="outer">
                <div className="inner">
                    <div className="icon">
                        <i className='fa-3x'>
                          <FontAwesomeIcon icon={ faDocker} />  
                        </i>
                    </div>
                </div>
            </div>
        </div>

        



        </section>
    )
}