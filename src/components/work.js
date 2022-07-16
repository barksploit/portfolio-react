import '../styles/work.scss';
import 'react-typist/dist/Typist.css';
import { createTheme } from '@mui/material/styles';
import axios from 'axios';
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

const outputWorks = works => {
    let arr = [];
    for (const iterator in works) {
        const work = works[iterator];
        arr.push(
            <a href={work.html_url} target="_blank" rel="noopener">
                <div className="github-repository">
                    <FadeInSection key={works[iterator]} delay={`${iterator}00ms`}>
                        <h2 className='work-title'>{work.full_name}</h2>
                        <p className='work-description'>{work.description}</p>
                    </FadeInSection>
                </div>
            </a>
        )
    }
    return arr;
}

export default function Intro() {

    const [works, setWorks] = useState([]);

    let page = 1;

    useEffect(() => {
        const fetchWorks = async () => {
            axios.get("https://grfn.sh/work/?offset=" + page).then((response) => {
                setWorks(previousWorks => [...previousWorks, response.data]);
            });
        }

        fetchWorks();
    }, []);

    return (
        <section id="work">

            <FadeInSection>

                <h1>&lt;work&gt;</h1>
                <div className="works-container">
                    {outputWorks(works[0])}
                </div>

            </FadeInSection>

        </section>
    );
}