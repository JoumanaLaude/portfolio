import React from 'react';
import styled from 'styled-components';

const ProjectComponent = ({ data }) => {
    return (
        <>
            <Grid>
                {data.map((projects, index) => {
                    return (
                        <Projects key={index}>
                            <h1>{projects.title}</h1>
                            <Img src={projects.img} alt={projects.title} />
                            {/* align img left or right in class style */}
                            <br />{projects.tools}

                            <p>{projects.desc}</p>
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
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.4rem;

    @media only screen and (max-width: 901px) {
        grid-template-columns: 1fr;
    }
`;

const Projects = styled.div`
    font-size: 1.2rem;
    padding: 2rem;
`

const Img = styled.img`
    max-width: 100%;
`;


export default ProjectComponent;