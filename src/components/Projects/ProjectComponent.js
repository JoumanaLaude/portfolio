import React from 'react';
import styled from 'styled-components';
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectComponent = ({ data }) => {
    return (
        <>
            <Grid>
                <Description>
                    <h1>Projects</h1>
                    <Text>Here are some of my personal front end projects. I still add to them and find ways to improve them as I learn while also working on new projects.</Text>
                </Description>
                {data.map((projects, index) => {
                    return (
                        <Projects key={index}>
                            <Img src={projects.img} alt={projects.title} />
                            <Title>{projects.title}</Title>
                            <p>{projects.tools}</p>
                            <Text>{projects.desc}</Text>
                            <Icons>
                                <a href={projects.link} target="_blank" rel="noreferrer noopener" className="icon-link">
                                    <FontAwesomeIcon icon={faExternalLinkAlt} className="fa-2x fa-fw" />
                                </a>
                                <a href={projects.github} target="_blank" rel="noreferrer noopener" className="icon-link">
                                    <FontAwesomeIcon icon={faGithub} className="fa-2x fa-fw" />
                                </a>
                            </Icons>
                        </Projects>
                    )
                })}
            </Grid>
        </>
    )
}

const Grid = styled.div`
    display: grid;
    grid-row: 2 / auto;
    grid-column: 2 / 4;
    grid-template-columns: 2fr;
    grid-gap: 4rem;

    @media only screen and (min-width: 900px) and (max-width: 1500px) {
        grid-column: 2 / 4;
        grid-template-columns: .7fr;
    }
`;

const Projects = styled.div`
    font-size: 1.2rem;
    padding: 0 2rem;
`;

const Icons = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem 0 3rem 0;
`;

const Description = styled.div`
    font-size: 1.2rem;
    line-height: 2rem;
    padding: 2rem;
`;

const Text = styled.p`
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