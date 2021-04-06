import logo from './assets/images/logo.svg';
import hamburguer from './assets/images/hamburguer.svg';

function Header() {
    return (
        <header>
            <img src={logo} alt="Logo" />
            <button type="button" class="hamburguer-menu">
                <img src={hamburguer} alt="Hamburguer Menu" />
            </button>            
            <nav class="navbar nav-legendaries">
                <a href="#">
                    Home
                </a>
                <a href="#">
                    Pokédex
                </a>
                <a href="#">
                    Legendaries
                </a>
                <a href="#">
                    Documentation
                </a>
            </nav>
        </header>
    )
}

export default Header;