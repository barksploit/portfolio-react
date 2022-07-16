import '../styles/work.scss';
import 'react-typist/dist/Typist.css';
import axios from 'axios';
import FadeInSection from './fadeinsection';
import { useEffect, useState } from 'react';

const outputWorks = works => {
    let arr = [];
    for (const iterator in works) {
        const work = works[iterator];
        arr.push(
            <FadeInSection key={works[iterator]} delay={`${iterator}00ms`}>
                <div className="github-repository">

                    <h2 className='work-title'>{work.full_name}</h2>
                    <p className='work-description'>{work.description}</p>
                    {work.topics.map((topic) => {
                        return (
                            <a href={`https://github.com/topics/${topic}`} target="_blank" rel="noreferrer"> <span key={topic} class="work-topic">{topic}</span></a>
                        )
                    })}

                </div>
            </FadeInSection>
        )
    }
    return arr;
}

export default function Intro() {

    const [works, setWorks] = useState([]);

    useEffect(() => {
        let page = 1;
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