import '../styles/about.scss';
import FadeInSection from './fadeinsection';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
export default function About() {
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
    return (
        <section id="about">
            <div class="about-content-wrapper">
                <FadeInSection>
                    <h1>&lt;about me&gt;</h1>

                    <p style={{ lineHeight: "2em" }}>I am a Junior Web Developer based in the South West UK. I specialise in Full-Stack Web Development. I graduated with a First with Honours BSc degree in Applied Computing from UWE Bristol in July 2022. I plan on going back to University to hopefully achieve a Masters degree in Cyber Security.</p>

                    <p>Here are some things I've worked with:</p>
                    <ThemeProvider theme={theme}>
                        <Stack direction="row" spacing={1} style={{ flexWrap: "wrap", marginTop: "50px", justifyContent: "space-between" }}>
                            <Chip className="about-worked-with-chip" avatar={<Avatar alt="Natacha" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />} label="Javascript ES6+" color="primary" variant="outlined" />
                            <Chip className="about-worked-with-chip" avatar={<Avatar alt="Natacha" src="https://reactjs.org/logo-og.png" />} label="React.js" color="primary" variant="outlined" />
                            <Chip className="about-worked-with-chip" avatar={<Avatar alt="Natacha" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" />} label="PHP 8+" color="primary" variant="outlined" />
                            <Chip className="about-worked-with-chip" avatar={<Avatar sx={{ bgcolor: "#FFF !important" }} alt="Natacha" src="https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg" />} label="MySQL" color="primary" variant="outlined" />
                            <Chip className="about-worked-with-chip" avatar={<Avatar alt="Natacha" sx={{ bgcolor: "#FFF !important" }} src="https://seeklogo.com/images/L/laravel-logo-9B01588B1F-seeklogo.com.png" />} label="Laravel" color="primary" variant="outlined" />
                            <Chip className="about-worked-with-chip" avatar={<Avatar alt="Natacha" sx={{ bgcolor: "#FFF !important" }} src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" />} label="HTML & CSS" color="primary" variant="outlined" />
                            <Chip className="about-worked-with-chip" avatar={<Avatar sx={{ bgcolor: "#FFF !important" }} alt="Natacha" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png" />} label="SCSS/SASS" color="primary" variant="outlined" />
                            <Chip className="about-worked-with-chip" avatar={<Avatar alt="Natacha" src="https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png" />} label="Amazon Web Services" color="primary" variant="outlined" />
                        </Stack>
                    </ThemeProvider>
                </FadeInSection>
            </div>
        </section>
    );
}