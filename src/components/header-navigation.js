import '../styles/header-navigation.scss';
import { Link } from 'react-scroll';

export default function HeaderNav() {

    return (

        <nav className="desktop-navigation">

            <ul>

                <li><Link activeClass="active" to="intro-wrapper" spy={true} smooth={true} duration={500}>intro.js</Link></li>
                <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>about.js</Link></li>
                <li><Link activeClass="active" to="experience" spy={true} smooth={true} duration={500}>experience.js</Link></li>
                <li><Link activeClass="active" to="work" spy={true} smooth={true} duration={500}>work.js</Link></li>
                <li><Link activeClass="active" to="credits" spy={true} smooth={true} duration={500}>end.js</Link></li>


            </ul>

        </nav>

    );
}