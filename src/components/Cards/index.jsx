import './card.css'
import devhouse from './assets/devhouse-front.png'

export default function Cards (){
    return (
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
                <img className='flip_card_img' src={devhouse} alt=""/>
                <a href="#" id='flip_card_button'>Back-end </a>
                <h3 className="flip_card_name_project">1# project</h3>
                <p className='flip_card_description'>is simply dummy text of the printing and
                     typesetting industry.
                      Lorem Ipsum has been the industry's
                       y</p>
            </div>
            <div className="flip-card-back">
                
            </div>
            </div>  

                

        </div>
        
    )
}