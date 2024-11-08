import './card.css'
import devhouse from './assets/devhouse-front.png'

export default function Cards (){
    return (
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
                <img src={devhouse} alt=""/>
            </div>
            <div className="flip-card-back">
            <a href="">Back-end</a> 
            <h3>Project Name #1</h3>    
            <p>
            Lorem ipsum dolor sit amet consectetur. 
            Semper lacus eget et consectetur egestas  
            </p>
            </div>
            </div>  

                

        </div>
        
    )
}