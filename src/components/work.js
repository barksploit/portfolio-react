import '../styles/work.scss';
import 'react-typist/dist/Typist.css';
import { createTheme } from '@mui/material/styles';
import Axios from 'axios';
import FadeInSection from './fadeinsection';
import { useEffect, useState } from 'react';

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

export default function Intro() {

    const [works, setWorks] = useState({});

    useEffect(() => {

        Axios.get("grfn.sh/work/?offset=" + works.length).then((response) => {
            setWorks(previousWorks => [...previousWorks, JSON.parse(response)]);
        });

    }, []);

    return (
        <section id="work">

            <FadeInSection>

                <h1>&lt;work&gt;</h1>

            </FadeInSection>

        </section>
    );
}