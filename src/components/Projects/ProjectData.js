import space from "./images/explore.png"
import cafe from "./images/clichecafe.png"
import portfolio from "./images/portfolio.png"
import mixormatch from "./images/mix-or-match.png"
import wurklo from "./images/wurklo-landing.png"

export const projects = [
    {
        title: "Spacetagram",
        img: space,
        tools: "React, NASA API, CSS Grid, React Router DOM, styled-components",
        desc: "Responsive web app with custom CSS that fetches images and videos from NASA's API that date back to 1995.",
        github: "https://github.com/JoumanaLaude/spacetagram-v2",
        link: "https://prettyspacious.netlify.app/"
    },
    {
        title: "Wurklo",
        img: wurklo,
        tools: "React, Reactstrap, React Router 6",
        desc: "Built landing page components and collaborated with creator to make sitely changes. Styled Reactstrap components, created custom CSS timeline, and created media queries for responsive views.",
        github: "https://github.com/JoumanaLaude/wurklo-landing-page",
        link: "https://www.wurklo.com/"
    },
    {
        title: "Cliche Cafe",
        img: cafe,
        tools: "React, Hooks, Reactstrap",
        desc: "First solo React project using hooks and libraries. Created the UI, food menus, and included a shopping cart for online ordering.",
        github: "https://github.com/JoumanaLaude/cliche-cafe-react",
        link: "https://clichecafe.netlify.app/"
    },
    {
        title: "Personal Portfolio",
        img: portfolio,
        tools: "React, CSS Grid, Flexbox, React Spring, React Router DOM",
        desc: `Since this is a *personal* portfolio I created a responsive layout from scratch with custom CSS and media queries. I used a simple design with a theme that fits what I personally like. I have separate page components for the "about" and "projects" sections for easier viewing.`,
        github: "https://github.com/JoumanaLaude/portfolio",
        link: "https://joumana.netlify.app/"
    },
    {
        title: "Halloween Mix-or-Match (Clone)",
        img: mixormatch,
        tools: "HTML, CSS, Vanilla JS, Audio",
        desc: "Halloween themed matching card game using CSS Grid and Vanilla JS. Cloned from a YT tutorial to become more familiar with object oriented design.",
        github: "https://github.com/JoumanaLaude/mix-or-match",
        link: "https://halloween-match.netlify.app/"
    }
]