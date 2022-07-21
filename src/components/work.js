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

    const fetchWorks = async () => {
        const viewportWidth = window.innerWidth;
        let perPage = 1;
        
        if (viewportWidth > 1600 || viewportWidth < 768) {
            perPage = 3;
        } else if (viewportWidth < 1600 && viewportWidth > 768) {
            perPage = 2;
        }
        axios.get("https://grfn.sh/work/?page=" + worksPage + "&perpage=" + perPage).then((response) => {
            for (const i in response.data) {
                console.log(response.data);
                setWorks(previousWorks => [...previousWorks, response.data[i]]);
            }
            setWorksPage(worksPage + 1);
            setTimeout(() => {
                setLoading({ finished: true });
                setTimeout(() => {
                    setLoading({
                        loading: false,
                        finished: false
                    })
                }, 1500);
            }, 500);
        });
    }

    const getAllRepos = () => {
        // Fetch public GitHub repositories using PHP script querying GitHub REST API
        setLoading({ loading: true });
        fetchWorks();

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
                        <LoadingButton onClick={getAllRepos} loading={loadingButton.loading ? 1 : 0} done={loadingButton.finished ? 1 : 0} className="load-more" variant="outlined" color="secondary">Load More</LoadingButton>
                    </ThemeProvider>
                </div>
            </FadeInSection>

        </section>
    );
}