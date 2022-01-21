import windchime from "./windchime.gif";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Landing() {
    return (
        <>
            <div className="left">
                <div className="hello"><i>Hello, my name is</i></div>
                <div className="joumana">Joumana</div>
                <div className="intro">I’m a front end developer who enjoys building unique web apps.
                    <div className="icon-link">
                        <a href="https://github.com/JoumanaLaude" aria-label="GitHub" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="fa-lg fa-fw icon-link" /></a>
                        <a href="https://www.linkedin.com/in/joumana-laude/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className="fa-lg fa-fw icon-link" /></a>
                        <a href="https://www.instagram.com/manabulous/" aria-label="Instagram" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className="fa-lg fa-fw icon-link" /></a>
                    </div>
                </div>

            </div>
            <div className="right">
                <img className="intro-img" src={windchime} alt="wind chime" />
            </div>
        </>
    )
}

export default Landing;
