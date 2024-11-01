import Cards from "../Cards"
import './index.css'

export default function ProjectCards (){
        return (
            <section className="ProjectCards">
                <p>PORTIFOLIO</p>
                <h1>Featured Projects</h1>

                <div className="ProjectCards_menu">
                    <ul>
                        <li>
                                <a href="">All projects</a>
                        </li>
                        <li>
                        <a href="">Front-end</a>
                        </li>
                        <li>
                            <a href="">Back-end</a>
                         </li>
                        <li>
                            <a href="">FullStack</a>
                        </li>
                    </ul>
                </div>

                <Cards />

            </section>

        )
}