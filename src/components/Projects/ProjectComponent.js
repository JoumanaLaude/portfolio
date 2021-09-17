import React from 'react';
import styled from 'styled-components';

const ProjectComponent = ({ data }) => {
    return (
        <>
            <Left>
                {data.map((projects, index) => {
                    return (
                        <div key={index}>
                            <h1>{projects.title}</h1>
                            <Img src={projects.img} alt={projects.title} />
                            {/* align img left or right in class style */}
                            <br />{projects.tools}

                            <p>{projects.desc}</p>
                        </div>
                    )
                })}
            </Left>
        </>
    )
}

const Left = styled.div`
    display: grid;
    grid-row: 2 / auto;
    grid-column: 2 / 3;
`;

const Img = styled.img`
    max-width: 100%;
`;


export default ProjectComponent;