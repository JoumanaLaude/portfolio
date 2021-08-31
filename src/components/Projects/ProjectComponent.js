import React from 'react';
import styled from 'styled-components';

const ProjectComponent = ({ data }) => {
    return (
        <>
            <div className="left">
                {data.map((projects, index) => {
                    return (
                        <div key={index}>
                            <Img src={projects.img} alt={projects.title} />
                        </div>
                    )
                })}
            </div>

            <div className="right">
                {/* {data.map((projects, index) => {
                    return (
                        <div key={index}>
                            {projects.title}
                        </div>
                    )
                })} */}
                TBA
            </div>

        </>
    )
}

export const Img = styled.img`
    padding: 2rem;
`



export default ProjectComponent;