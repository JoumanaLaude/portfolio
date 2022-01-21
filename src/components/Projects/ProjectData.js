import space from "./images/explore.png"
import cafe from "./images/clichecafe.png"
import portfolio from "./images/portfolio.png"
import mixormatch from "./images/mix-or-match.png"

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
    // ,
    // {
    //     title: "Animal Crossing Database",
    //     img: filler,
    //     tools: "React JS, API",
    //     desc: "description here",
    //     github: ""
    // },
    // {
    //     title: "React Native Campsite App",
    //     img: filler,
    //     tools: "React Native",
    //     desc: "description here",
    //     github: "https://github.com/JoumanaLaude/react-native-nucamp"
    // },
    // {
    //     title: "HiLo Game",
    //     img: filler,
    //     tools: "React Native",
    //     desc: "description here",
    //     github: "https://github.com/JoumanaLaude/hilo-game"
    // }
]