import Cards from "../Cards"

export default function ProjectCards (){
        return (
            <section className="ProjectCards">
                <p>Portifolio</p>
                <h1>Featured Projects</h1>

                <div className="buttons">
                    <ul>
                        <li>
                            All projects
                        </li>
                        <li>
                            Front-end
                        </li>
                        <li>
                            Back-end
                        </li>
                        <li>
                            Full Stack
                        </li>
                    </ul>
                </div>

                <Cards />

            </section>

        )
}