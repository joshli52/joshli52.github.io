import react from "../react.png";
import i4 from "../i4.jpg";
import tetris from "../tetris.jpg";
import Anchorsbook from "../Anchorsbook.jpg";
// this file serves as a way to easily change as manipulate projects listed in "../pages/projects"
// this file is refernced by "../pages/ProjectDisplay for the image and name inputs
export const ProjectList = [
  {
    name: "Personal Portfolio",
    image: react,
    skills: "React, HTML, CSS",
    link: "https://github.com/joshli52/joshli52.github.io",
    description: "Building this portfolio webpage allowed me to gain familiarity with the React library and documentation. It also strengthened my Git knowledge.",
  },
  { name: "Industry 4.0",
  image: i4,
  skills: "React, JIRA, Github",
  link: "https://www.i4competition.ca/",
  description: "Industry 4.0 is a University of Waterloo design team with roots in high-level data optmization applicable to businesses. As a Software Executive we are currently of revamping the website using React, I am also creating and managing JIRA tickets. ",
  },
  { name: "Python Tetris Clone",
    image: tetris,
    skills: "Python, Object-Oriented Programming",
    link: "https://github.com/joshli52/tetris",
    description: "Tetris was a personal childhood staple, remaking the game required breaking down the game into elementary concepts completed with OOP, emulating the game in Python required applications of GUI design and Object-Oriented Programming. ",
  },
  { name: "AnchorsBook Mobile App",
    image: Anchorsbook,
    skills: "C#, Visual Studio Enterprise, Scratch, JIRA",
    link: "https://anchorsbook.com",
    description: "Created and delployed a mobile application for a thriving tech start-up"
  }
  { name: "Snake Game",
  image: Anchorsbook,
  skills: "Python, Pygame",
  link: "https://github.com/joshli52/Snake",
  description: "Created the classic Snake Game with functional graphics and sound through PyGame."
 }
]