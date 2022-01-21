import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faReact, faSass, faHtml5, faCss3Alt, faJsSquare, faBootstrap, faWordpress, faMdb, faFigma, faGit, faYarn, faNode } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Animated from './Animated';

const ProjectComponent = ({ data }) => {
    const fade = useSpring({
        from: { opacity: 0, marginTop: 300 },
        to: { opacity: 1, marginTop: 0 },
        config: { delay: 1000, duration: 500 }
    });
    const tech = useSpring({
        from: { opacity: 0, marginTop: 300 },
        to: { opacity: 1, marginTop: 0 },
        config: { delay: 1000, duration: 700 }
    });
    const projects = useSpring({
        from: { opacity: 0, marginTop: 300 },
        to: { opacity: 1, marginTop: 0 },
        config: { delay: 2000, duration: 2000 }
    });

    return (
        <Grid>
            <section>
                <animated.div style={fade}>
                    <h1>Projects & Skillset</h1>
                    <p>Here are some of my personal projects. As I learn more, I update and improve what I have while also working on new projects. My main focus is currently front-end development, but I would like to later transition into full stack.</p>
                </animated.div>
                <animated.div style={tech}>
                    <center><p>Technologies I have worked with:</p></center>
                    <Skills>
                        <div><Animated rotation={20} timing={200}><FontAwesomeIcon icon={faReact} className="fa-3x fa-fw" alt="React" /></Animated><IconName>React</IconName></div>
                        <div><Animated rotation={20} timing={200}><FontAwesomeIcon icon={faSass} className="fa-3x fa-fw" alt="Sass" /></Animated><IconName>Sass</IconName></div>
                        <div><Animated rotation={20} timing={200}><FontAwesomeIcon icon={faHtml5} className="fa-3x fa-fw" alt="HTML5" /></Animated><IconName>HTML5</IconName></div>
                        <div><Animated rotation={20} timing={200}><FontAwesomeIcon icon={faCss3Alt} className="fa-3x fa-fw" alt="CSS3" /></Animated><IconName>CSS3</IconName></div>
                        <div><Animated rotation={20} timing={200}><FontAwesomeIcon icon={faJsSquare} className="fa-3x fa-fw" alt="JavaScript" /></Animated><IconName>JavaScript</IconName></div>
                        <div><Animated rotation={20} timing={200}><FontAwesomeIcon icon={faBootstrap} className="fa-3x fa-fw" alt="Bootstrap" /></Animated><IconName>Bootstrap</IconName></div>
                    </Skills>
                    <Skills>
                        <div><Animated rotation={20} timing={200}><FontAwesomeIcon icon={faWordpress} className="fa-3x fa-fw" alt="WordPress" /></Animated><IconName>WordPress</IconName></div>
                        <div><Animated rotation={20} timing={200}><FontAwesomeIcon icon={faFigma} className="fa-3x fa-fw" alt="Figma" /></Animated><IconName>Figma</IconName></div>
                        <div><Animated rotation={20} timing={200}><FontAwesomeIcon icon={faGit} className="fa-3x fa-fw" alt="Git" /></Animated><IconName>Git</IconName></div>
                        <div><Animated rotation={20} timing={200}><FontAwesomeIcon icon={faYarn} className="fa-3x fa-fw" alt="Yarn" /></Animated><IconName>Yarn</IconName></div>
                        <div><Animated rotation={20} timing={200}><FontAwesomeIcon icon={faMdb} className="fa-3x fa-fw" alt="MongoDB" /></Animated><IconName>MongoDB</IconName></div>
                        <div><Animated rotation={20} timing={200}><FontAwesomeIcon icon={faNode} className="fa-3x fa-fw" alt="NodeJS" /></Animated><IconName>NodeJS</IconName></div>
                    </Skills>
                </animated.div>
                <animated.div style={projects}>
                    {data.map((projects, index) => {
                        return (
                            <div key={index} className="card">
                                <a href={projects.link} target="_blank" rel="noreferrer noopener" aria-label="Launch site">
                                    <Img src={projects.img} alt={projects.title} /></a>
                                <div className="card-content">
                                    <Title>{projects.title}</Title>
                                    <p>{projects.tools}<br /><br />{projects.desc}</p>
                                    <div className="icon-link">
                                        <a href={projects.link} target="_blank" rel="noreferrer noopener" aria-label="Launch site" className="icon-link">
                                            <FontAwesomeIcon icon={faExternalLinkAlt} className="fa-2x fa-fw" /></a>
                                        <a href={projects.github} target="_blank" rel="noreferrer noopener" aria-label="Github" className="icon-link">
                                            <FontAwesomeIcon icon={faGithub} className="fa-2x fa-fw" /></a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </animated.div>
            </section>
        </Grid >
    )
}

const Grid = styled.div`
    display: grid;
    grid-row: 2 / auto;
    grid-column: 2 / 4;
    grid-template-columns: 1fr;
    grid-gap: 4rem;
    @media only screen and (min-width: 900px) and (max-width: 1500px) {
        margin: 0 2rem;
    }
`;

const Skills = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const IconName = styled.p`
    display: flex;
    justify-content: center;
    align-self: center;
    padding-top: 0;
    @media only screen and (max-width: 900px) {
        font-size: .8rem;
    }
`;

const Img = styled.img`
    max-width: 100%;
`;

const Title = styled.h1`
    font-size: 1.6rem;
    padding-top: .5rem;
`;

export default ProjectComponent;