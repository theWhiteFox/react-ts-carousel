import "./App.css";
import Carousel from "./components/Carousel";
import "./App.css";

const items = [
  {
    cardNumber: 1,
    projectSrc: "https://www.google.com/",
    projectName: "Google",
  },
  {
    cardNumber: 2,
    projectSrc: "/pic2.jpeg",
    projectName: "A rock formation",
  },
  {
    cardNumber: 3,
    projectSrc: "/pic3.jpeg",
    projectName: "Some flowers",
  },
  {
    cardNumber: 4,
    projectSrc: "/pic4.jpeg",
    projectName: "An egyptian wall painting",
  },
  {
    cardNumber: 5,
    projectSrc: "/pic5.jpeg",
    projectName: "A butterfly on a leaf",
  },
];

function App() {
  return (
    <>
      <h1>React TypeScript Carousel</h1>
      <Carousel items={items} />
      <p className="read-the-docs">A Draggable Carousel</p>
    </>
  );
}

export default App;
