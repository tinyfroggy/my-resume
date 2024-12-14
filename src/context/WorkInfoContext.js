import { createContext } from "react";

const WorkInfo = 
[
  {
    id: 1,
    link: "https://home-swit-home.netlify.app/",
    srcImg: "../imgs/Studi app 1.png",
    title : "study App",
    description: "study app is web to help you study effectively, the app has pomodoro timer, todo list, and sticky notes.",  
  },
  {
    id: 2,
    link: "https://studyapp0.netlify.app/",
    srcImg: "../imgs/studi-app-2.png",
    title : "study App 2",
    description: "study app 2 is a second version of study app, has new features,  like fallback, and more.",
  },{
    id: 3,
    link: "https://menufoodforg.netlify.app/",
    srcImg: "../imgs/menufood 3.png",
    title : "MenuFood",
    description: "Menu Food helps you discover and choose new recipes easily and quickly.",
  },{
    id: 4,
    link: "https://xogamereacsfrogs.netlify.app/",
    srcImg: "../imgs/tik tak tok 4.png",
    title : "X O  Game",
    description: "XO Game is a simple and fun website where you can play the classic Tic-Tac-Toe game. Challenge a friend or play against the computer to see who can win with three in a row!",
  },{
    id: 5,
    link: "https://sonic-runner-frog.netlify.app/",
    srcImg: "../imgs/sonic-runner 5.png",
    title : "Sonic Runner",
    description: "Sonic Runner is an exciting website featuring a fun endless runner game. Guide Sonic through challenging obstacles, collect rings, and achieve high scores in this fast-paced adventure!",
  },{
    id: 6,
    link: "https://statuesque-gumption-bdec37.netlify.app",
    srcImg: "../imgs/KAMEL FROG 6.png",
    title : "Kamel Wepsite",
    description: "My first website",
  },{
    id: 7,
    link: "https://frogs-math-4-kids.netlify.app",
    srcImg: "../imgs/math-4-kids 7.png",
    title : "Math 4 Kids",
    description: "Math 4 Kids is an educational website designed to make learning math fun and interactive for children. Explore games, puzzles, and activities that help build essential math skills while keeping kids engaged!",
  },{
    id: 8,
    link: "https://movieappfrogs.netlify.app",
    srcImg: "../imgs/Movie App 8.png",
    title : "Movie App",
    description: "Movie App is a user-friendly platform that lets you explore, discover, and keep track of your favorite movies. Browse trending titles, view detailed information, and create your personalized watchlist effortlessly!",
  },{
    id: 9,
    link: "https://snakegamefrogs.netlify.app",
    srcImg: "../imgs/Snak game 9.png",
    title : "Snake Game",
    description: "Snake Game is a classic arcade-style website where you control a growing snake, collect food, and aim for the highest score. Challenge yourself to navigate without hitting walls or your own tail!",
  },
];

const WorkInfoContext = createContext(WorkInfo);

export default WorkInfoContext
export {WorkInfo}