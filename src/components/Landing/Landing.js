import React from 'react';
import windchime from './windchime.gif';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components'

function Landing() {

    return (
        <>
            <div className="left">
                <div className="hello"><i>Hello, my name is</i></div>
                <div className="joumana">Joumana</div>
                <div className="intro">I’m a frontend developer who enjoys building unique web apps.
                    <div className="socials">
                        <a href="https://github.com/JoumanaLaude" aria-label="GitHub" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="fa-2x fa-fw socials" /></a>
                        <a href="https://www.linkedin.com/in/joumana-laude/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className="fa-2x fa-fw socials" /></a>
                    </div>
                </div>

            </div>
            <div className="right">
                <img className="intro-img" src={windchime} alt="wind chime" />
            </div>
        </>
    )
}

// const Socials = styled.ul`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
// `;

export default Landing;
