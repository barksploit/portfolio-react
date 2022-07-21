import '../styles/about.scss';
import FadeInSection from './fadeinsection';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFF',
        },
        secondary: {
            main: '#11cb5f',
        },
    },
});

export default function About() {

    // Object containing list of technologies I've worked with, and accompanying logos for the MUI avatar components

    const technologies = [
        {
            label: "PHP 8+",
            avatarsrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
        },
        {
            label: "Laravel 9+",
            avatarsrc: "https://seeklogo.com/images/L/laravel-logo-9B01588B1F-seeklogo.com.png",
        },
        {
            label: "Javascript ES6+",
            avatarsrc: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        },
        {
            label: "jQuery",
            avatarsrc: "https://avatars.githubusercontent.com/u/70142?s=280&v=4",
        },
        {
            label: "ReactJS",
            avatarsrc: "https://reactjs.org/logo-og.png",
        },
        {
            label: "MySQL",
            avatarsrc: "https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg",
        },
        {
            label: "HTML5 & CSS3",
            avatarsrc: "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png",
        },
        {
            label: "SCSS/SASS",
            avatarsrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png",
        },
        {
            label: "WordPress",
            avatarsrc: "https://cdn.cdnlogo.com/logos/w/65/wordpress.svg",
        },
        {
            label: "AWS",
            avatarsrc: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
        },
    ];

    return (
        <section id="about" className="section-padding">
            <div className="about-content-wrapper">
                <FadeInSection>
                    <p style={{ lineHeight: "2em" }}>I am a Junior Web and Software Developer based in the South West of England. I specialise in Full-Stack Web Development. I graduated with a First-Class Honours BSc degree in Applied Computing from UWE Bristol in 2022 and plan on going back to University to achieve a Masters degree in Cyber Security.</p>

                    <p>Here are some things I've worked with:</p>
                    <ThemeProvider theme={theme}>
                        <Stack direction="row" spacing={1} style={{ flexWrap: "wrap", marginTop: "50px", justifyContent: "flex-start" }}>

                            {technologies.map((tech_item, i) => {
                                return (
                                    <FadeInSection className="about-worked-with-chip" key={tech_item.label} delay={`${i + 1}00ms`}>
                                        <Chip avatar={<Avatar sx={{ bgcolor: "#FFF !important", margin: "0" }} alt="Natacha" src={tech_item.avatarsrc} />} label={tech_item.label} color="primary" variant="outlined" />
                                    </FadeInSection>
                                );
                            })}
                        </Stack>
                    </ThemeProvider>
                </FadeInSection>
            </div>
        </section>
    );
}