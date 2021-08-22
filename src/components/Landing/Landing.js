import React from 'react';
import windchime from './windchime.gif';

function Landing() {

    return (
        <>
            <div className="left">
                <div className="hello"><i>Hello, my name is</i></div>
                <div className="joumana">Joumana</div>
                <div className="intro">I’m a frontend developer who enjoys building unique web apps.</div>
            </div>
            <div className="right">
                <img className="intro-img" src={windchime} alt="wind chime" />
            </div>
        </>
    )
}

export default Landing;
