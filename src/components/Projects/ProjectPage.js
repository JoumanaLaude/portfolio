import React from 'react';
import { projects } from './ProjectData';
import Projects from './ProjectComponent'

function ProjectPage() {
    return (
        <Projects data={projects} />
    )
}

export default ProjectPage;
