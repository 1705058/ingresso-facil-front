import {ReactComponent as Person} from 'assets/img/person.svg'
import { Link } from 'react-router-dom';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="ingressofacil-nav-content">
                    <Link to="/">
                        <h1>Ingresso Fácil</h1>
                    </Link>
                    <a href="#" target="_blank" rel="noreferrer">
                        <div className="ingressofacil-contact-container">
                            <Person />
                            <p className="ingressofacil-contact-link">Entrar</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;