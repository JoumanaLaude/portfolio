import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faReact, faSass, faHtml5, faCss3Alt, faJs, faBootstrap, faWordpress, faMdb, faFigma, faNode } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Animated from "./Animated";

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
                    <h1>Projects & Skills</h1>
                    <p>Here are some of my personal projects. As I learn more, I update and improve what I have while also working on new projects.</p>
                </animated.div>
                <animated.div style={tech}>
                <center><p>Technologies I have worked with:</p></center>
                <Skills>
                    <div><Animated rotation={20} timing={200}><FontAwesomeIcon icon={faReact} className="fa-3x fa-fw" alt="React" /></Animated><p className="icon-name">React</p></div>
                    <div><Animated rotation={20} timing={200}><FontAwesomeIcon icon={faSass} className="fa-3x fa-fw" alt="Sass" /></Animated><p className="icon-name">Sass</p></div>
                    <div><Animated rotation={20} timing={200}><FontAwesomeIcon icon={faHtml5} className="fa-3x fa-fw" alt="HTML5" /></Animated><p className="icon-name">HTML5</p></div>
                    <div><Animated rotation={20} timing={200}><FontAwesomeIcon icon={faCss3Alt} className="fa-3x fa-fw" alt="CSS3" /></Animated><p className="icon-name">CSS3</p></div>
                    <div><Animated rotation={20} timing={200}><FontAwesomeIcon icon={faJs} className="fa-3x fa-fw" alt="JavaScript" /></Animated><p className="icon-name">JavaScript</p></div>
                    <div><Animated rotation={20} timing={200}><FontAwesomeIcon icon={faBootstrap} className="fa-3x fa-fw" alt="Bootstrap" /></Animated><p className="icon-name">Bootstrap</p></div>
                    <div><Animated rotation={20} timing={200}><FontAwesomeIcon icon={faWordpress} className="fa-3x fa-fw" alt="WordPress" /></Animated><p className="icon-name">WordPress</p></div>
                    <div><Animated rotation={20} timing={200}><FontAwesomeIcon icon={faFigma} className="fa-3x fa-fw" alt="Figma" /></Animated><p className="icon-name">Figma</p></div>
                    <div><Animated rotation={20} timing={200}><FontAwesomeIcon icon={faMdb} className="fa-3x fa-fw" alt="MongoDB" /></Animated><p className="icon-name">MongoDB</p></div>
                    <div><Animated rotation={20} timing={200}><FontAwesomeIcon icon={faNode} className="fa-3x fa-fw" alt="NodeJS" /></Animated><p className="icon-name">NodeJS</p></div>
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
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 1rem;
`;

const Img = styled.img`
    max-width: 100%;
`;

const Title = styled.h1`
    font-size: 1.6rem;
    padding-top: .5rem;
`;

export default ProjectComponent;