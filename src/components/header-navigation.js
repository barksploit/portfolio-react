import '../styles/header-navigation.scss';
import { Link } from 'react-scroll';

export default function Header() {
    return (

        <nav className="desktop-navigation">

            <ul>

                <li><Link activeClass="active" to="intro" spy={true} smooth={true} offset={50} duration={500}>intro.js</Link></li>
                <li><a href="#">about.js</a></li>
                <li><a href="#">experience.js</a></li>
                <li><a href="#">work.js</a></li>
                <li><a href="#">end.js</a></li>


            </ul>

        </nav>

    );
}