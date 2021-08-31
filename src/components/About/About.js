import React from 'react';
import filler from './anime-filler.gif';
import styled from 'styled-components';

function About() {
    return (
        <>
            <div className="left">
                <AboutMe>
                    <TLDR>About Me</TLDR>
                    <Section>Hello there! :) My name is Joumana Laude and I was born and raised in Washington, DC. I grew up with a single mother and we didn't have much money for me to go out, so I spent a lot of my time on the computer. I first became interested in coding around the age of 10 when I was playing an online game called Neopets. Through this game I learned HTML & CSS and how to build websites from scratch and host them for free.</Section>
                    
                    <Section>When I'm not studying web development, I enjoy journaling, reading, Korean comedy shows, cooking, studying foreign languages, playing online games, and random crafting.</Section>
                    
                    <Section>Some life goals of mine include wanting to live in New York, visit and stay in South Korea for a few months, visit London and get a golden snitch tattoo, go skydiving, and a lot more...</Section>

                    <Section>(This is just filler text until I condense the 5 paragraphs I wrote of my life story :D)</Section>
                </AboutMe>
            </div>
            <div className="right">
                <img className="intro-img" src={filler} alt="filler img" />
            </div>
        </>
    )
}

const AboutMe = styled.div`
    font-size: 1.2rem;
    line-height: 2rem;
    padding: 2rem 0;
`

const TLDR = styled.h1`
    padding: 1rem 0;
`

const Section = styled.p`
    padding: 1rem 0;
`
export default About;
