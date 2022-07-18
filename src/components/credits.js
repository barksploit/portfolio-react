import '../styles/credits.scss';
import FadeInSection from './fadeinsection';

export default function Credits() {
    return (

        <section id="credits">
            <div className="credits-content-wrapper">
                <FadeInSection>
  
                    <div className="credits-comment">
                        {/* eslint-disable-next-line */}
                        <p>/*</p>
                        <br />
                        <p>Made with</p>
                        <br />
                        <p>React</p>
                        <p>react-scroll</p>
                        <p>axios</p>
                        <p>Material UI</p>
                        <p>GSAP</p>
                        <p>ScrollTrigger</p>
                        <p>SCSS</p>
                        <p>PHP</p>
                        <p>php-cURL</p>
                        <p>GitHub REST API</p>
                        <br />
                        <p>This is a work in progress so check back often!</p>
                        <br />
                        <p>*/</p>


                    </div>
                </FadeInSection>
            </div>
        </section>

    );
}