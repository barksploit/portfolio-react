import '../styles/header-navigation.scss';
import FadeInSection from './fadeinsection';
import { Link } from 'react-scroll';

export default function HeaderNav() {

    const links = [
        {
            text: ".intro()",
            to: "intro-wrapper"
        },
        {
            text: ".about()",
            to: "about"
        },
        {
            text: ".work()",
            to: "work"
        },
        {
            text: ".credits()",
            to: "credits"
        }
    ]

    return (

        <nav className="desktop-navigation">

            <ul>


                {
                    links.map((link, i) => {
                        return (
                            <FadeInSection key={link.text} delay={`${i}00ms`}>
                                <li><Link isDynamic={true} activeClass="active" to={link.to} spy={true} smooth={true} duration={500}>{link.text}</Link></li>
                            </FadeInSection>
                        )
                    })
                }

            </ul>

        </nav>

    );
}