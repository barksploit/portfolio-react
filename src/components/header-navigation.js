import '../styles/header-navigation.scss';
import { Link } from 'react-scroll';

export default function HeaderNav() {

    return (

        <nav className="desktop-navigation">

            <ul>

                <li><Link isDynamic={true} activeClass="active" to="intro-wrapper" spy={true} smooth={true} duration={500}>.Intro()</Link></li>
                <li><Link isDynamic={true} activeClass="active" to="about" spy={true} smooth={true} duration={500}>.About()</Link></li>
                <li><Link offset={25} isDynamic={true} activeClass="active" to="work" spy={true} smooth={true} duration={500}>.Work()</Link></li>
                <li><Link offset={25} isDynamic={true} activeClass="active" to="credits" spy={true} smooth={true} duration={500}>.Credits()</Link></li>


            </ul>

        </nav>

    );
}