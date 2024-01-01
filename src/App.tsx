import "./App.css";
import Carousel from "./components/Carousel";
import "./App.css";

const carouselItems = [
  {
    name: "Vite-React-TS-Redux-boilerplate",
    description: "A boilerplate to get set up quickly with a complex web app",
    language: "JavaScript",
    url: "https://github.com/theWhiteFox/Vite-React-TS-Redux-boilerplate",
  },
  {
    
    name: "theWhiteFox blog",
    description: "My Website built using Gatsby",
    language: "Ruby",
    url: "https://github.com/theWhiteFox/theWhiteFox",
  },
  {
    name: "python-data-analysis",
    description: "Notebooks and scripts for data analysis using Python.",
    language: "Python",
    url: "https://github.com/someuser/python-data-analysis",
  },
  {
    name: "angular-app",
    description: "A sample Angular application with CRUD operations.",
    language: "TypeScript",
    url: "https://github.com/someuser/angular-app",
  },
  {
    name: "full-stack-project",
    description: "A full-stack web application project with React and Node.js.",
    language: "JavaScript",
    url: "https://github.com/someuser/full-stack-project",
  },
];

function App() {
  return (
    <>
      <h1>React TypeScript Carousel</h1>
      <Carousel items={carouselItems} />
      <p className="read-the-docs">A Draggable Carousel</p>
    </>
  );
}

export default App;
