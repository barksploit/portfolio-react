import '../styles/work.scss';
import 'react-typist/dist/Typist.css';
import axios from 'axios';
import Button from '@mui/material/Button';
import FadeInSection from './fadeinsection';
import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoadingButton from './loadingbutton';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

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

    let perPage = 1;

    const viewportWidth = window.innerWidth;

    if (viewportWidth > 1600) {
        perPage = 3;
    } else if (viewportWidth < 1600 && viewportWidth > 768) {
        perPage = 2;
    }

    const fetchWorks = async (buttonClick) => {

        axios.get("https://grfn.sh/work/?page=" + worksPage + "&perpage=" + perPage).then((response) => {
            if (buttonClick) Array.from(document.querySelectorAll('.loading-works-skeleton')).pop().scrollIntoView({ behavior: "smooth", block: "center" });
            setTimeout(() => {
                for (const i in response.data) {
                    setWorks(previousWorks => [...previousWorks, response.data[i]]);
                }
                setWorksPage(worksPage + 1);


                setLoading({ finished: true });

                setTimeout(() => {
                    if (buttonClick) Array.from(document.querySelectorAll('.github-repository')).pop().scrollIntoView({ behavior: "smooth", block: "center" });
                    setLoading({
                        loading: false,
                        finished: false
                    });

                }, 500);
            }, 500);

        });
    }

    const showLoadingSkeleton = () => {
        let arr = [];
        let indexes = ["firstskeleton", "secondskeleton", "thirdskeleton"]
        for (let i = 0; i < perPage; i++) {
            arr.push(

                <Stack key={indexes[i]} spacing={1} className="loading-works-skeleton">
                    <Typography variant="h1"><Skeleton sx={{ bgcolor: '#333' }} variant="text" /></Typography>
                    <Typography variant="p"><Skeleton sx={{ bgcolor: '#333' }} variant="text" />
                        <Skeleton sx={{ bgcolor: '#333' }} variant="text" />
                        <Skeleton sx={{ bgcolor: '#333' }} variant="text" /></Typography>
                    <Stack style={{ display: "block" }} spacing={2} className="loading-works-skeleton-topics">
                        <Skeleton sx={{ bgcolor: '#333' }} variant="text" width="15%" style={{ display: "inline-block", marginRight: "25px" }} />
                        <Skeleton sx={{ bgcolor: '#333' }} variant="text" width={50} style={{ display: "inline-block", marginRight: "25px" }} />
                        <Skeleton sx={{ bgcolor: '#333' }} variant="text" width={50} style={{ display: "inline-block", marginRight: "25px" }} />
                    </Stack>
                    <Skeleton sx={{ bgcolor: '#333' }} style={{ marginTop: '25px' }} variant="rectangular" width={150} height={40} />
                </Stack>
            )
        }
        return arr;
    }

    const getAllRepos = (buttonClick) => {
        // Fetch public GitHub repositories using PHP script querying GitHub REST API
        setLoading({ loading: true });
        fetchWorks(buttonClick);

    }

    useEffect(() => {

        getAllRepos(false);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section id="work" className="section-padding">

            <div className="works-container">
                {works?.map((work, i) => {
                    return (
                        <FadeInSection className="github-repository" transform={false} key={work.id} delay={`${i}00ms`}>
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
                        </FadeInSection>
                    );
                })}
                {loadingButton.loading ? showLoadingSkeleton().map(skeleton => skeleton) : undefined}
                <FadeInSection className="load-more-container">
                    <ThemeProvider theme={theme}>
                        <LoadingButton onClick={() => getAllRepos(true)} loading={loadingButton.loading ? 1 : 0} done={loadingButton.finished ? 1 : 0} className="load-more" variant="outlined" color="secondary">Load More</LoadingButton>
                    </ThemeProvider>
                </FadeInSection>
            </div>

        </section >
    );
}