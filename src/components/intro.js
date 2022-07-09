import '../styles/intro.scss';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

export default function Intro() {
    return (
        <section id="intro">
            <div class="intro-content-wrapper">
                <h1 className="intro-header"><Typist avgTypingDelay={100}>Hello, Barksploit<Typist.Backspace count={10} delay={200} /> Thomas here. </Typist></h1>
                <h2 className="intro-subtitle">Full-Stack Web Developer</h2>
                <p className="intro-description">Nullam ut imperdiet dui. Donec tempus sem vestibulum est volutpat vestibulum. Quisque tempor enim a urna malesuada tempor. Sed blandit aliquet metus, ac efficitur felis efficitur quis. Sed fermentum tempus pulvinar.</p>
            </div>
        </section>
    );
}