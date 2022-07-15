import '../styles/about.scss';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
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
                <h1>&lt;about me&gt;</h1>

                <p>I am a UWE Bristol BSc Graduate based in the South West UK. I specialise in Full-Stack Web Development. I intend on going back to University and achieving a Masters degree in Cyber Security at UWE Bristol.</p>

                <p>Here are some things I've worked with:</p>
                <ThemeProvider theme={theme}>
                    <Stack direction="row" spacing={1}>
                        <Chip label="Javascript ES6+" color="primary" variant="outlined" />
                        <Chip label="React.js" color="primary" variant="outlined" />
                        <Chip label="PHP 8+" color="primary" variant="outlined" />
                        <Chip label="Laravel" color="primary" variant="outlined" />
                        <Chip label="HTML & CSS" color="primary" variant="outlined" />
                        <Chip label="SCSS/SASS" color="primary" variant="outlined" />
                        <Chip label="Amazon Web Services" color="primary" variant="outlined" />
                    </Stack>
                </ThemeProvider>
            </div>
        </section>
    );
}