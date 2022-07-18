import '../styles/header-navigation.scss';
import { Link } from 'react-scroll';

export default function HeaderNav() {

    return (

        <nav className="desktop-navigation">

            <ul>

                <li><Link isDynamic={true} activeClass="active" to="intro-wrapper" spy={true} smooth={true} duration={500}>.intro()</Link></li>
                <li><Link isDynamic={true} activeClass="active" to="about" spy={true} smooth={true} duration={500}>.about()</Link></li>
                <li><Link offset={25} isDynamic={true} activeClass="active" to="work" spy={true} smooth={true} duration={500}>.work()</Link></li>
                <li><Link isDynamic={true} activeClass="active" to="credits" spy={true} smooth={true} duration={500}>.credits()</Link></li>


            </ul>

        </nav>

    );
}