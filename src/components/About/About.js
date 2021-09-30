import React from 'react';
import Navbar from '../Navbar/Navbar';
import filler from './anime-filler.gif';
import styled from 'styled-components';

function About() {
    return (
        <>
        <Navbar />
            <Grid>
                <AboutMe>
                    <h1>About Me</h1>
                    <Section>Hello there! :) My name is Joumana and I was born and raised in Washington, DC. I first became interested in coding around the age of 10 when I built fansites for online games I played. I continued this hobby throughout my teen years, and graduated from university with an IT degree. Recently, I decided to partake in a coding bootcamp to be up to speed on the latest web development practices.</Section>
                    <Section>I graduated from the bootcamp in September 2021 earning my certificate in Full Stack Development. I have built projects using React and React Native, and have learned about Express & MongoDB. I have started tackling my list of project ideas and everyday as I’m building things, I learn something new, which I find the most enjoyable.</Section>
                    <Img src={filler} alt="filler img" />
                    <h1>Hobbies</h1>
                    <Section>Other interests of mine include bullet journaling, reading fiction, watching Korean comedy shows, cooking, studying foreign languages, playing online games, and random crafting.</Section>
                </AboutMe>
            </Grid>
        </>
    )
}

const Grid = styled.div`
    display: grid;
    grid-row: 2 / auto;
    grid-column: 2 / 4;
`;

const AboutMe = styled.div`
    font-size: 1.2rem;
    line-height: 2rem;
    padding: 2rem;
`

const Section = styled.p`
    padding: 1rem 0;
`

const Img = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    padding: 1rem 0 3rem;
`;

export default About;
