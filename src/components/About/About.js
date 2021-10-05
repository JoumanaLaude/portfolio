import React from 'react';
import { useSpring, animated } from 'react-spring';
import Navbar from '../Navbar/Navbar';
import bujou from './bujou.jpg';
// import filler from './anime-filler.gif';
import styled from 'styled-components';

function About() {
    const fade = useSpring({
        from: { opacity: 0, marginTop: 300 },
        to: { opacity: 1, marginTop: 0 },
        config: { delay: 1000, duration: 500 }
    });
    // to is not required w/ spring

    return (
        <>
            <Navbar />
            <Grid>
                <section>
                    <animated.div style={fade}>
                        <h1>About Me</h1>
                        <p>Hello there! :) My name is Joumana and I was born and raised in one of the most diverse cities in the world, Washington, DC. I have a great passion for front end development, and I am looking to become a full-time Front End Developer/Engineer.</p>
                        <p>I recently graduated from Nucamp Bootcamp, and have started tackling my list of project ideas. Every day as I’m building things, I learn something new, which I find the most enjoyable.</p>
                        </animated.div>
                        <animated.div style={fade}>
                        <h1>Hobbies</h1>
                        <p>Interests of mine include bullet journaling, reading fiction, watching Korean variety shows, anime, cooking my cravings, studying foreign languages, playing online games, and random crafting.</p>
                        <Img src={bujou} alt="photo of keyboard and bullet journal" />
                    </animated.div>
                    <h1>Coding Journey</h1>
                    <p>I first became interested in coding at the age of 10 when I played an online game called Neopets. Neopets taught me the basics of HTML & CSS. I started creating fansites for a few games I played and hosted them for free. This was a hobby I enjoyed for years, so I decided to pursue web development in college.</p>
                    <p>My university only offered the very basics of coding courses, and throughout university & after, I was lost on how to learn more. I tried YouTube videos and resources like FreeCodeCamp and Udemy, but it didn't seem like I was progressing much. I worked in IT mainly because that was my major. I still had the desire to be a developer, so when COVID hit, I quit my job due to safety concerns and took this opportunity to become more serious about learning. I joined a coding bootcamp where I learned modern dev tools, such as React. The bootcamp has helped me find the proper path to continue self learning.</p>
                    <p></p>
                </section>
            </Grid>
        </>
    )
}

const Grid = styled.div`
    display: grid;
    grid-row: 2 / auto;
    grid-column: 2 / 4;
    @media only screen and (min-width: 900px) and (max-width: 1500px) {
        margin: 0 8rem;
    }
`;

const Img = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    padding-top: 1.6rem;
`;

export default About;
