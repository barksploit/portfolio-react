import '../styles/credits.scss';
import FadeInSection from './fadeinsection';

export default function Credits() {
    return (

        <section id="credits">
            <div className="credits-content-wrapper">
                <FadeInSection>
                    <h1>&lt;credits&gt;</h1>

                    <div class="credits-comment">

                        <p>/*</p>
                        <br />
                        <p>Made with</p>
                        <br />
                        <p>React</p>
                        <p>react-scroll</p>
                        <p>axios</p>
                        <p>MUI</p>
                        <p>GSAP</p>
                        <p>ScrollTrigger</p>
                        <p>SCSS</p>
                        <p>PHP</p>
                        <p>GitHub REST API</p>
                        <br />
                        <p>*/</p>

                    </div>
                </FadeInSection>
            </div>
        </section>

    );
}