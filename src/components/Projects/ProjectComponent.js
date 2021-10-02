import React from 'react';
import styled from 'styled-components';
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faReact, faSass, faHtml5, faCss3Alt, faJs, faBootstrap, faWordpress, faMdb, faFigma, faNodeJs, faNode } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectComponent = ({ data }) => {
    return (
        <Grid>
            <section>
                <h1>Projects & Skills</h1>
                <p>Here are some of my personal projects. As I learn more, I update and improve what I have while also working on new projects.<br /><br /><center>Technologies I have worked with:</center></p>
                <Skills>
                    <FontAwesomeIcon icon={faReact} className="fa-3x fa-fw" />
                    <FontAwesomeIcon icon={faSass} className="fa-3x fa-fw" />
                    <FontAwesomeIcon icon={faHtml5} className="fa-3x fa-fw" alt="" />
                    <FontAwesomeIcon icon={faCss3Alt} className="fa-3x fa-fw" />
                    <FontAwesomeIcon icon={faJs} className="fa-3x fa-fw" />
                    <FontAwesomeIcon icon={faBootstrap} className="fa-3x fa-fw" />
                    <FontAwesomeIcon icon={faWordpress} className="fa-3x fa-fw" />
                    <FontAwesomeIcon icon={faFigma} className="fa-3x fa-fw" />
                    <FontAwesomeIcon icon={faMdb} className="fa-3x fa-fw" />
                    <FontAwesomeIcon icon={faNode} className="fa-3x fa-fw" />
                </Skills>
                {data.map((projects, index) => {
                    return (
                        <div key={index}>
                            <Img src={projects.img} alt={projects.title} />
                            <Title>{projects.title}</Title>
                            <p>{projects.tools}</p>
                            <Text>{projects.desc}</Text>
                            <div className="icon-link">
                                <a href={projects.link} target="_blank" rel="noreferrer noopener" className="icon-link">
                                    <FontAwesomeIcon icon={faExternalLinkAlt} className="fa-2x fa-fw" />
                                </a>
                                <a href={projects.github} target="_blank" rel="noreferrer noopener" className="icon-link">
                                    <FontAwesomeIcon icon={faGithub} className="fa-2x fa-fw" />
                                </a>
                            </div>
                        </div>
                    )
                })}
            </section>
        </Grid>
    )
}

const Grid = styled.div`
    display: grid;
    grid-row: 2 / auto;
    grid-column: 2 / 4;
    grid-template-columns: 2fr;
    grid-gap: 4rem;
    @media only screen and (min-width: 900px) and (max-width: 1500px) {
        margin: 0 8rem;
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

const Text = styled.p`
    padding-top: 1rem;
`;

const Img = styled.img`
    max-width: 100%;
    padding-top: 7rem;
`;

const Title = styled.h1`
    font-size: 1.6rem;
    padding-top: .5rem;
`;

export default ProjectComponent;