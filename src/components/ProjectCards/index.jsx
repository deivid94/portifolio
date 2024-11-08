import Cards from "../Cards"
import './index.css'

export default function ProjectCards (){
        return (
            <section className="ProjectCards">
                <p>PORTIFOLIO</p>
                <h1>Featured Projects</h1>

                <div className="Projectcards_menu">
                    <ul className="projectcards_menu_ul">
                        <li className="projectcards_menu_li">
                                <a href="">All projects</a>
                        </li>
                        <li className="projectcards_menu_li">
                        <a href="" >Front-end</a>
                        </li>
                        <li className="projectcards_menu_li">
                            <a href="">Back-end</a>
                         </li>
                        <li className="projectcards_menu_li">
                            <a href="" >FullStack</a>
                        </li>
                    </ul>
                </div>

                <div className='ProjectCards_cards'>
                  <Cards />
                  <Cards />
                  <Cards />
                  <Cards />
                </div>

            </section>
           
        )
}