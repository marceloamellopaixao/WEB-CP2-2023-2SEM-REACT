import './Header.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Header() {

    const titulo = "The Walking Dead"

    return (

        <header>
            <a href="#">
                <img src={logo} alt={titulo} />
            </a>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/historia'>História</Link></li>
                    <li><Link to='/episodios'>Episódios</Link></li>
                    <li><Link to='/serie_quadrinhos'>Série Quadrinhos</Link></li>
                    <li><Link to='/contatos'>Contatos</Link></li>
                </ul>
            </nav>
        </header>
    )
}