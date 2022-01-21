import React from "react";
import { useSpring, animated } from "react-spring";
import bujou from "./bujou.jpg";
import styled from "styled-components";

function About() {
    const fade = useSpring({
        from: { opacity: 0, marginTop: 300 },
        to: { opacity: 1, marginTop: 0 },
        config: { delay: 1000, duration: 400 }
    });
    const picture = useSpring({
        from: { opacity: 0, marginTop: 300 },
        to: { opacity: 1, marginTop: 0 },
        config: { delay: 2000, duration: 800 }
    });
    // to is not required w/ spring

    return (
        <>
            {/* <Navbar /> */}
            <Grid>
                <section>
                    <animated.div style={fade}>
                        <h1>About Me</h1>
                        <p>Hello there! :) My name is Joumana and I was born and raised in one of the most diverse cities in the world, Washington, DC. I've had a great passion for building websites since I was 10 where I started coding through an online game called Neopets. I love putting together clean layouts and making them accessible for all users. I recently graduated from a coding bootcamp, which gave me a more structured path to continue self-learning. I have started tackling my list of project ideas while seeking a career as a front-end developer.
                        <br /><br />Some interests of mine include journaling, reading fiction, watching Korean variety shows, anime, cooking my cravings, studying foreign languages, playing online games, and random crafting.</p>
                    </animated.div>
                    <animated.div style={picture}>
                        <Img src={bujou} alt="photo of keyboard and bullet journal" />
                    </animated.div>
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
