import '../styles/credits.scss';
import FadeInSection from './fadeinsection';

export default function Credits() {
    return (

        <section id="credits">
            <div className="credits-content-wrapper">
                <FadeInSection>
                    <h2 className='section-header-lighter section-header-translucent section-header-font-size'>&lt;credits&gt;</h2>

                    <div class="credits-comment">

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
                        <p>GitHub REST API</p>
                        <br />
                        <p>*/</p>

                    </div>
                </FadeInSection>
            </div>
        </section>

    );
}