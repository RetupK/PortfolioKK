import myPhoto from "./images/my-photo.jpg";
import redux from "./images/redux.png";
import express from "./images/express.jpg"
import {
    faHtml5,
    faCss3Alt,
    faSass,
    faBootstrap,
    faJs,
    faReact,
    faNode,
    faNpm,
    faYarn,
    faJira,
    faSlack,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faMobileAlt, faLayerGroup, faCodeBranch} from '@fortawesome/free-solid-svg-icons'

const navigation = [
	{
		path: "/home",
		name: "Start",
	},
	{
		path: "/portfolio",
		name: "Portfolio",
	},
	{
		path: "/contact",
		name: "Kontakt",
	},
]

const greeting = {
    src: myPhoto,
};

const presentationalTextLeft = [
    {
        paragraph: ` 
        👨 PRZEDSTAWIENIE, KONCEPCJA`,
        text: `Nazywam się Krystian, mam 22 lata. Programowania uczę się od ponad półtora roku czasu. Stało się to moją pasją, którą codziennie rozwijam.
        Dzięki programowaniu jestem w stanie więcej zapamiętywać i efektywniej się uczyć. Nauczyłem się również w jaki sposób
        rozwiązywać różne problemy nie tylko w kontekście problemów programistycznych. Doszedłem do bardzo cennego wniosku,
        który pozwala mi sięgać po więcej. Nie załamuje się, gdy są problemy. Akceptuje je, czym więcej problemów rozwiąże
        tym lepszym człowiekiem się staje, tym mam większe doświadczenie. Te myślenie sprawia, że wyczekuje problemów i
        stawiam im czoła.
        `,
    },
    {
        paragraph: `💼 PODEJŚCIE`,
        text: `Wiem, że tylko ciężka praca pozwoli mi sięgać po więcej. Każdy, kto przebył podobną drogę w której poświęcał 
        swój czas na opanowanie czegoś wie jak kręta była droga - czasem nie po naszej myśli, 
        czasem chwile słabości... Ale gdy spojrzymy na to z perspektywy czasu i docenimy ile to wniosło do naszego życia
        (dyscyplina, nawyk codziennej nauki, rozmyślanie jak przyswoić szybciej wiedzę, 
        myślenie twórcze i masa wspaniałych ludzi, których napotykamy na drodze).`,
    },
];

const presentationalTextRight = [
    {
        paragraph: `⚡ KIERUNEK ROZWOJU`,
        text: `Chcę rozwijać się w kierunku Full Stack Developera. Na ten moment najlepiej czuję się na Front-Endzie
        dorzucając do tego technologie takie jak React(Hooks, class), Redux, Bootstrap, Material-UI. Co do backendu, 
        przyjemnie mi się pracuje w Node.js, Express, MongoDB.
        `,
    },
    {
        paragraph: `🎓 KURSY`,
        text: `
        ⭐ 9-cio miesięczy kurs Kodilla pod okiem indywidualnego mentora.
        ⭐ Udemy. Node.js, Express, MongoDB. Samuraj programowania.
        ⭐ React dla średniozaawansowanych, Udemy.
        ⭐ Programowanie w JavaScript, Udemy.
        ⭐ Przeprogramowani, opanuj JavaScript.
        ⭐ React od podstaw, Udemy.
        ⭐ Adobe Illustrator od podstaw.
        `,
    },
]

const socialMediaLinks = {
    github: "https://github.com/RetupK",
    linkedin: "https://www.linkedin.com/in/krystian-kalinowski-ab4931184/",
    gmail: "kalinowskikrystian98@gmail.com",
    cv: "https://drive.google.com/file/d/195PAoSJ2Qkiu0ajv03YE3fjDC764_CE8/view?usp=sharing",
};

const skillsDescription = {
    title: `🛠 Umiejętności 🛠`,
    description: `Są to owoce 🍊🍑🍒🍇, które zbierałem przez całą naukę programowania. Dzięki różnym narzędziom 
    praca jest bardziej przyjemna i dająca rezultaty. Poniżej znajdziesz listę bibliotek,
    frameworków, narzędzi jakimi się posługuję. 💪`
}

const buttonSkills = [
    {
        variant: "outline-primary",
        className: "filterDiv",
        name: "Wszystko"
    },
    {
        variant: "outline-secondary",
        className: "frontEnd",
        name: "Front-end"
    },
    {
        variant: "outline-dark",
        className: "backEnd",
        name: "Back-end"
    },
    {
        variant: "outline-warning",
        className: "tools",
        name: "Narzędzia",
    },
]

const skillsList = [
    {
        icon: faHtml5,
        classNameIcon: "filterDiv frontEnd icon-html",
        name: "HTML"
    },
    {
        icon: faCss3Alt,
        classNameIcon: "filterDiv frontEnd icon-css",
        name: "CSS"
    },
    {
        icon: faSass,
        classNameIcon: "filterDiv frontEnd icon-sass",
        name: "SASS"
    },
    {
        icon: faBootstrap,
        classNameIcon: "filterDiv frontEnd icon-bootstrap",
        name: "Bootstrap"
    },
    {
        icon: faJs,
        classNameIcon: "filterDiv frontEnd icon-js",
        name: "JavaScript(ESNext)"
    },
    {
        icon: faReact,
        classNameIcon: "filterDiv frontEnd icon-react",
        name: "ReactJS"
    },
    {
        img: redux,
        classNameIcon: "filterDiv frontEnd img",
        name: "Redux"
    },
    {
        icon: faMobileAlt,
        classNameIcon: "filterDiv frontEnd",
        name: "RWD"
    },
    {
        icon: faNode,
        classNameIcon: "filterDiv backEnd icon-node",
        name: "Node.js"
    },
    {
        icon: faLayerGroup,
        classNameIcon: "filterDiv backEnd icon-stack",
        name: "StackMERN"
    },
    {
        img: express,
        classNameIcon: "filterDiv backEnd img",
        name: "Express.js"
    },
    {
        icon: faNpm,
        classNameIcon: "filterDiv tools icon-npm",
        name: "git/npm"
    },
    {
        icon: faYarn,
        classNameIcon: "filterDiv tools icon-yarn",
        name: "Yarn"
    },
    {
        icon: faJira,
        classNameIcon: "filterDiv tools icon-jira",
        name: "Jira"
    },
    {
        icon: faSlack,
        classNameIcon: "filterDiv tools icon-slack",
        name: "Slack"
    },
    {
        icon: faGithub,
        classNameIcon: "filterDiv tools",
        name: "Github"
    },
    {
        icon: faCodeBranch,
        classNameIcon: "filterDiv tools icon-codebranch",
        name: "CodeBranch"
    },
]

export {
    greeting,
    presentationalTextLeft,
    presentationalTextRight,
    socialMediaLinks,
    skillsList,
    skillsDescription,
    buttonSkills,
    navigation
}