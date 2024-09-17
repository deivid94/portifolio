import './Header.css'
import fotoPerfil from  './assets/perfil1.svg'
import Links from '../Links';

export default function Header(){
    return (
    <header className="header-app">
        <div className="elipse">
        <div className="container">
            <div className="profile-picture">
            <img src={fotoPerfil} alt="Foto de perfil" />
            </div>

            <div className="brief-dev">
                <h3>Hello, i`m Deivid Martins</h3>
                <h1>Developer Backend Java</h1>
                <p>Lorem ipsum dolor sit amet consectetur. 
                Orci suspendisse in quam eu vitae id nunc sed dui.
                Enim nulla fermentum faucibus lorem sodales suspendisse netus.
                A non platea hendrerit libero aenean porttitor in volutpat magna. </p>
            </div>
        </div>
        </div>
       
        <div className="social-midia">
            <Links></Links>
        </div>
        

        </header>

    )
}