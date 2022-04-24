import {ReactComponent as GithubIcon} from 'assets/img/github.svg'
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="ingressofacil-nav-content">
                    <h1>Ingresso Fácil</h1>
                    <a href="https://github.com/robmartinhao" target="_blank" rel="noreferrer">
                        <div className="ingressofacil-contact-container">
                            <GithubIcon />
                            <p className="ingressofacil-contact-link">/robmartinhao</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;