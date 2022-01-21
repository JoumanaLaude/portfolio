import React from "react";
import Navbar from "../Navbar/Navbar";
import { projects } from "./ProjectData";
import Projects from "./ProjectComponent"
function ProjectPage() {
    return (
        <>
            <Navbar />
            <Projects data={projects} />
        </>
    )
}


export default ProjectPage;
