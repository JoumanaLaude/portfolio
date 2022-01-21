import React from 'react';
import { projects } from './ProjectData';
import Projects from './Cards'
function ProjectPage() {
    return (
        <>
            <Projects data={projects} />
        </>
    )
}


export default ProjectPage;
