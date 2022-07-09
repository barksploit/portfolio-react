import '../styles/intro.scss';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

export default function Intro() {
    return (
        <section id="intro">
            <h1><Typist>Hello, Barksploit<Typist.Backspace count={10} delay={200} /> Thomas here. </Typist></h1>
        </section>
    );
}