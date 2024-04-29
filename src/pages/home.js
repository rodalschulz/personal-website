import "../styles/home.css";
import { useState } from "react";
import cmd from "../functions/funcs.js";

const Home = () => {
  // Define state variables
  const [inputValue, setInputValue] = useState("");
  const [commandOut, setCommandOut] = useState([]);
  const [commandOut2, setCommandOut2] = useState([]);
  const [image, setImage] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const images = ["fotoyo.jpg", "fotoyo2.jpg", "duck.png", "duck2.png"];
  let index = 1;

  // Event handler to update the state when input value changes
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Event handler to handle form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Update the commandOut state with the input value
    switch (inputValue.toLowerCase()) {
      case "help":
        setCommandOutWithDelay(cmd.help);
        break;
      case "basestats":
        setCommandOutWithDelay(cmd.baseStats);
        break;
      case "codestats":
        setCommandOutWithDelay(cmd.codeStats);
        break;
      case "jobsearch":
        setCommandOutWithDelay(cmd.jobSearch);
        break;
      case "links":
        setCommandOutWithDelay(cmd.links);
        break;
      case "contact":
        setCommandOutWithDelay(cmd.contact);
        break;
      case "downloads":
        setCommandOutWithDelay(cmd.downloads);
        break;
      case "show about":
        setImage(true);
        setCommandOut2WithFlicker(cmd.showAbout, true, 30, 6);
        break;
      case "show academic":
        setImage(true);
        setCommandOut2WithFlicker(cmd.showAcademic, true, 30, 6);
        break;
      case "show experience":
        setImage(true);
        setCommandOut2WithFlicker(cmd.showExperience, true, 30, 6);
        break;
      case "show programming":
        setImage(true);
        setCommandOut2WithFlicker(cmd.showProgramming, true, 30, 6);
        break;
      case "show projects":
        setImage(true);
        setCommandOut2WithFlicker(cmd.showProjects, true, 30, 6);
        break;
      case "clear":
        setCommandOut([""]);
        break;
      case "image":
        if (image) {
          setImage(false);
          break;
        } else {
          setImage(true);
          index = 0;
          setImageIndex(index);
        }
        break;
      case "ducks":
        setImage(true);
        index = 2;
        setImageIndex(index);
        break;
      case "exit".toLowerCase():
        setCommandOut([""]);
        setCommandOut2([]);
        setImage(false);
        break;
      default:
        setCommandOutWithDelay(cmd.invalid);
    }
    setInputValue("");
  };

  const setCommandOutWithDelay = (valueArray) => {
    valueArray.forEach((value, index) => {
      setTimeout(() => {
        setCommandOut((prevState) => [...prevState, value]);
      }, (index + 1) * 75);
    });
  };

  const setCommandOut2WithFlicker = (
    text,
    isVisible,
    delay,
    remainingFlickers
  ) => {
    if (remainingFlickers === 0) {
      return;
    }
    if (isVisible) {
      setCommandOut2([]);
    } else {
      setCommandOut2(text);
    }
    setTimeout(() => {
      setCommandOut2WithFlicker(text, !isVisible, delay, remainingFlickers - 1); // Toggle visibility and call recursively
    }, delay);
  };

  return (
    <div id="main-window">
      <div id="left-section"></div>
      <div id="center-section">
        <h1>
          Rodrigo Schulz - <span id="job-title">Backend Dev</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            value={inputValue}
            onChange={handleChange}
            type="text"
            placeholder="Enter a command (try 'help')"
          />
        </form>
        <div id="outputs-wrapper">
          <section id="output-section" className="section">
            {commandOut.map((value, index) => (
              <div key={index} id="output">
                {value.slice(0, 5) === "https" ? (
                  <a href={value} target="_blank" rel="noreferrer">
                    {value}
                  </a>
                ) : (
                  value
                )}
              </div>
            ))}
          </section>
          <section id="output-section-2" className="section">
            {commandOut2.map((value, index) => (
              <div key={index} id="output-2">
                {value.slice(0, 1) === "►" ? (
                  <h4>{value}</h4>
                ) : value.slice(0, 3) === "   " ? (
                  <h3>{value}</h3>
                ) : value.slice(0, 1) === " " ? (
                  <li>{value}</li>
                ) : (
                  value
                )}
              </div>
            ))}
          </section>
          <section id="image-section" className="section">
            {image ? (
              <img src={require(`../assets/${images[imageIndex]}`)} alt="" />
            ) : null}
            {image ? (
              <img
                src={require(`../assets/${images[imageIndex + 1]}`)}
                alt=""
              />
            ) : null}
          </section>
        </div>
      </div>
      <div id="right-section"></div>
    </div>
  );
};

export default Home;
