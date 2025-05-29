import facebook from './img/fb.png';
import instagram from './img/ig.png';
import twitter from './img/tw.png';
import logo from './img/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <section>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank">
                            <img src={facebook} alt="Facebook"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank">
                            <img src={instagram} alt="Instagram"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/" rel="noopener noreferrer" target="_blank">
                            <img src={twitter} alt="X"/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src={logo} alt="Organo"/>
            </section>
            <section>
                <p>Desenvolvido por <a href="https://github.com/martinslmendes">@martinslmendes</a></p>
            </section>
        </footer>
    );
}

export default Footer;