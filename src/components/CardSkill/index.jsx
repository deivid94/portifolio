
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
            <i className='svgLanguage fa-3x'>
            <FontAwesomeIcon icon={faJava} />
            </i>
            <div className="outer">
          
                <div className="inner">
              
                                
                    <div id="icon">
                           
                            <svg width="350px" height="350px">
                            <defs>
                            <radialGradient id="linearGradient">
                                <stop offset="0%" stopColor='#6f61ff' />
                                <stop offset="55%" stopColor='#9a90ff' />
                                <stop offset="100%" stopColor='#6f61ff' />
                            </radialGradient>
                            </defs> 
                            <circle cx="175" cy="176" r="82"/>
                            </svg>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="wrapper">
        <i className='svgLanguage fa-3x'>
            <FontAwesomeIcon icon={faReact} />
            </i>
            <div className="outer">
                <div className="inner">
                    <div id="icon">
                        
                            <svg width="350px" height="350px">
                            <defs>
                            <radialGradient id="linearGradient">
                                <stop offset="0%" stopColor='#6f61ff' />
                                <stop offset="55%" stopColor='#9a90ff' />
                                <stop offset="100%" stopColor='#6f61ff' />
                            </radialGradient>
                            </defs> 
                            <circle cx="175" cy="176" r="82"/>
                            </svg>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="wrapper">
        <i className='svgLanguage fa-3x'>
            <FontAwesomeIcon icon={faJs} />
            </i>
            <div className="outer">
                <div className="inner">
                    <div id="icon">    
                
                            <svg width="350px" height="350px">
                            <defs>
                            <radialGradient id="linearGradient">
                                <stop offset="0%" stopColor='#6f61ff' />
                                <stop offset="55%" stopColor='#9a90ff' />
                                <stop offset="100%" stopColor='#6f61ff' />
                            </radialGradient>
                            </defs> 
                            <circle cx="175" cy="176" r="82"/>
                            </svg>
                            </div>
                </div>
            </div>
        </div>
       
        <div className="wrapper">
        <i className='svgLanguage fa-3x'>
            <FontAwesomeIcon icon={faGithub} />
            </i>
            <div className="outer">
                <div className="inner">
                    
                    <div id="icon">
                            
                            <svg width="350px" height="350px">
                            <defs>
                            <radialGradient id="linearGradient">
                                <stop offset="0%" stopColor='#6f61ff' />
                                <stop offset="55%" stopColor='#9a90ff' />
                                <stop offset="100%" stopColor='#6f61ff' />
                            </radialGradient>
                            </defs> 
                            <circle cx="175" cy="176" r="82"/>
                            </svg>
                            
                                                         
                            
                    </div>
                </div>
            </div>
        </div>

        <div className="wrapper">
        <i className='svgLanguage fa-3x'>
            <FontAwesomeIcon icon={faDocker} />
            </i>
            <div className="outer">
                <div className="inner">
                    
                    <div id="icon">
                            
                            <svg width="350px" height="350px">
                            <defs>
                            <radialGradient id="linearGradient">
                                <stop offset="0%" stopColor='#6f61ff' />
                                <stop offset="55%" stopColor='#9a90ff' />
                                <stop offset="100%" stopColor='#6f61ff' />
                            </radialGradient>
                            </defs> 
                            <circle cx="175" cy="176" r="82"/>
                            </svg>
                            
                                                         
                            
                    </div>
                </div>
            </div>
        </div>
       
       
       
        



        </section>
    )
}