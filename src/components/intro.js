import '../styles/intro.scss';
import Typist from 'react-typist';
import { useEffect, useRef } from 'react';
import 'react-typist/dist/Typist.css';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ButtonGroup from '@mui/material/ButtonGroup';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Intro() {
    gsap.registerPlugin(ScrollTrigger);
    const introRef = useRef();

    const theme = createTheme({
        palette: {
            primary: {
                // Purple and green play nicely together.
                main: '#FFF',
            },
            secondary: {
                // This is green.A700 as hex.
                main: '#11cb5f',
            },
        },
    });

    useEffect(() => {
        gsap.to(introRef.current, {
            x: "100vw",
            scrollTrigger: {
                markers: true,
                trigger: "#intro",
                scrub: true,
                start: "top top",
                end: "bottom top",
                pin: true
            }
        });
    }, []);

    return (
        <section id="intro" ref={introRef}>
            <div class="intro-content-wrapper">
                <h1 className="intro-header"><Typist avgTypingDelay={100}>Hello, BarkSploit<Typist.Backspace count={10} delay={200} /> Thomas here. </Typist></h1>
                <h2 className="intro-subtitle">Full-Stack Web Developer</h2>
                <div className="intro-social-media-links">
                    <Link href="https://twitter.com/barksploit" className="intro-social-media-link" target="_blank" rel="noopener">
                        <TwitterIcon />
                    </Link>
                    <Link href="https://github.com/" className="intro-social-media-link" target="_blank" rel="noopener">
                        <GitHubIcon />
                    </Link>
                    <Link href="https://www.linkedin.com/in/thomas-anthony-griffin/" className="intro-social-media-link" target="_blank" rel="noopener">
                        <LinkedInIcon />
                    </Link>
                    <Link href="https://www.instagram.com/barksploit/" className="intro-social-media-link" target="_blank" rel="noopener">
                        <InstagramIcon />
                    </Link>
                </div >
                <ThemeProvider theme={theme}>
                    <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                        <Button>Contact me</Button>
                        <Button>Learn more</Button>
                    </ButtonGroup></ThemeProvider>
            </div >
        </section >
    );
}