import { createContext } from "react";

const WorkInfo = 
[
  {
    id: 1,
    link: "https://home-swit-home.netlify.app/",
    srcImg: "../imgs/Studi app 1.png",
    title : "Studi App",
    description: "This is a web application that allows you to create an account and keep track of your studies. You can also add tasks to your to-do list and track your progress.",
  },
  {
    id: 2,
    link: "https://studyapp0.netlify.app/",
    srcImg: "../imgs/studi-app-2.png",
    title : "Studi App 2",
    description: "This is a web application that allows you to create an account and keep track of your studies. You can also add tasks to your to-do list and track your progress.",
  },{
    id: 3,
    link: "https://menufoodforg.netlify.app/",
    srcImg: "../imgs/menufood 3.png",
    title : "MenuFood",
    description: "This is a web application that allows you to create an account and keep track of your studies. You can also add tasks to your to-do list and track your progress.",
  },{
    id: 4,
    link: "https://xogamereacsfrogs.netlify.app/",
    srcImg: "../imgs/tik tak tok 4.png",
    title : "X O  Game",
    description: "This is a web application that allows you to create an account and keep track of your studies. You can also add tasks to your to-do list and track your progress.",
  },{
    id: 5,
    link: "https://sonic-runner-frog.netlify.app/",
    srcImg: "../imgs/sonic-runner 5.png",
    title : "Sonic Runner",
    description: "This is a web application that allows you to create an account and keep track of your studies. You can also add tasks to your to-do list and track your progress.",
  },{
    id: 6,
    link: "https://statuesque-gumption-bdec37.netlify.app",
    srcImg: "../imgs/KAMEL FROG 6.png",
    title : "Kamel Wepsite",
    description: "This is a web application that allows you to create an account and keep track of your studies. You can also add tasks to your to-do list and track your progress.",
  },{
    id: 7,
    link: "https://frogs-math-4-kids.netlify.app",
    srcImg: "../imgs/math-4-kids 7.png",
    title : "Math 4 Kids",
    description: "This is a web application that allows you to create an account and keep track of your studies. You can also add tasks to your to-do list and track your progress.",
  },{
    id: 8,
    link: "https://movieappfrogs.netlify.app",
    srcImg: "../imgs/Movie App 8.png",
    title : "Movie App",
    description: "This is a web application that allows you to create an account and keep track of your studies. You can also add tasks to your to-do list and track your progress.",
  },{
    id: 9,
    link: "https://snakegamefrogs.netlify.app",
    srcImg: "../imgs/Snak game 9.png",
    title : "Snake Game",
    description: "This is a web application that allows you to create an account and keep track of your studies. You can also add tasks to your to-do list and track your progress.",
  },
];

const WorkInfoContext = createContext(WorkInfo);

export default WorkInfoContext
export {WorkInfo}