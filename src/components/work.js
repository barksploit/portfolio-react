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

export default function Intro() {

    // Define state to store list of repositories
    const [works, setWorks] = useState([]);
    const [loadingButton, setLoading] = useState({
        loading: false,
        finished: false
    });
    const [worksPage, setWorksPage] = useState(1);

    const getAllRepos = () => {
        // Fetch public GitHub repositories using PHP script querying GitHub REST API
        setLoading({ loading: true });

        setTimeout(() => {
            axios.get("https://grfn.sh/work/?page=" + worksPage).then((response) => {
                setWorksPage(worksPage + 1);
                setLoading({ finished: true });
                setWorks(previousWorks => [...previousWorks, response.data[0]]);
                setTimeout(() => {
                    setLoading({ loading: false, finished: false });
                }, 2500);

            });
        }, 2500);
    }

    useEffect(() => {

        getAllRepos();

    }, []);

    return (
        <section id="work" className="section-padding">

            <FadeInSection>
                <div className="works-container">
                    {works?.map((work, i) => {
                        return (
                            <FadeInSection key={work.id} delay={`${i}00ms`}>
                                <div className="github-repository">
                                    <h2 className='work-title'>{work.full_name}</h2>
                                    <p className='work-description'>{work.description}</p>
                                    {work.topics.map((topic, e) => {
                                        return (
                                            <a key={e} href={`https://github.com/topics/${topic}`} target="_blank" rel="noreferrer"><span className="work-topic">{topic}</span></a>
                                        )
                                    })}
                                    <ThemeProvider theme={theme}>
                                        <Button className="view-repository" onClick={() => window.location = `${work.html_url}`} variant="outlined">view repository</Button>
                                    </ThemeProvider>
                                </div>
                            </FadeInSection>
                        );
                    })}
                </div>

                <div className="load-more-container">
                    <ThemeProvider theme={theme}>
                        <LoadingButton onClick={getAllRepos} loading={loadingButton.loading ? 1 : undefined} done={loadingButton.finished ? 1 : undefined} className="load-more" variant="outlined" color="secondary">Load More</LoadingButton>
                    </ThemeProvider>
                </div>
            </FadeInSection>

        </section>
    );
}