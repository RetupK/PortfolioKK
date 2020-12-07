import dashboard from "../../assests/images/Dashboard.png";
import portfolio from "../../assests/images/portfolio.png";
import todo from "../../assests/images/todo.png";

export const portfolioDescription = {
    title: "Portfolio",
    subTitle: "Oto moje niekomercyjne projekty, wykonane na etapie rozwoju"
}

export const projects = [
    {
        id: 0,
        name: "Portfolio Projekt",
        path: "https://retupk.github.io/portfolioKK/",
        pathGithub: "https://github.com/RetupK/portfolioKK/",
        img: "#",
    },
    {
        id: 1,
        name: "Dashboard",
        path: "https://retupk.github.io/ContactList/",
        pathGithub: "https://github.com/RetupK/ContactList/",
        img: dashboard,
    },
    {
        id: 2,
        name: "Projekt Portfolio",
        path: "https://retupk.github.io/TodoApp/",
        pathGithub: "https://github.com/RetupK/TodoApp",
        img: todo,
    },
    {
        id: 3,
        name: "Mój stary projekt portfolio.",
        path: "https://retupk.github.io/presentation/",
        pathGithub: "https://github.com/RetupK/presentation",
        img: portfolio,
    },
]