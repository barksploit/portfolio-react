import '../styles/work.scss';
import 'react-typist/dist/Typist.css';
import axios from 'axios';
import Button from '@mui/material/Button';
import FadeInSection from './fadeinsection';
import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoadingButton from './loadingbutton';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000',
        },
        secondary: {
            main: '#FFF',
        },
    },
});

const outputWorks = works => {
    let arr = [];
    // Unable to use map because object is not iterable, loop instead using for in control structure
    for (const iterator in works) {
        const work = works[iterator];
        arr.push(
            <FadeInSection key={iterator} delay={`${iterator}00ms`}>
                <div className="github-repository">
                    <h2 className='work-title'>{work.full_name}</h2>
                    <p className='work-description'>{work.description}</p>
                    {work.topics.map((topic, i) => {
                        return (
                            <a key={i} href={`https://github.com/topics/${topic}`} target="_blank" rel="noreferrer"><span className="work-topic">{topic}</span></a>
                        )
                    })}
                    <ThemeProvider theme={theme}>
                        <Button className="view-repository" onClick={() => window.location = `${work.html_url}`} variant="outlined">view repository</Button>
                    </ThemeProvider>
                </div>
            </FadeInSection>
        )
    }
    return arr;
}

export default function Intro() {

    // Define state to store list of repositories
    const [works, setWorks] = useState([]);
    const [loadingButton, setLoading] = useState({
        loading: false,
        finished: false
    });

    const handleLoadMore = () => {
        // Show loadingbutton
        setLoading({ loading: true });


        // TODO fetch more repos

        // Test that loading works by simulating data fetching using setTimeout function
        setTimeout(() => {
            setLoading({ finished: true });
            setTimeout(() => {
                setLoading({ loading: false, finished: false });
            });
        }, 2500);
    }

    useEffect(() => {
        let page = 1;

        // Fetch public GitHub repositories using PHP script querying GitHub REST API
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
             <div className="works-container">
                    {outputWorks(works[0])}
                </div>
                <div className="load-more-container">
                    <ThemeProvider theme={theme}>
                        <LoadingButton onClick={handleLoadMore} loading={loadingButton.loading ? 1 : undefined} done={loadingButton.finished ? 1 : undefined} className="load-more" variant="outlined" color="secondary">Load More</LoadingButton>
                    </ThemeProvider>
                </div>
            </FadeInSection>

        </section>
    );
}