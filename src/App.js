// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
// import About from ".components/About";
import About from "./components/About";
import Contact from "./components/Contact";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PropTypes from "prop-types";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const setAlertMsg = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "dark") {
      document.title = "Tutles - Light Mode";
      setMode("light");
      document.body.style.backgroundColor = "white";
      setAlertMsg("Light mode has been enabled!", "success");
      setTimeout(() => {
        setAlert(null);
      }, 2000);
      setInterval(() => {
        document.title = "Tutles - Text Extraction";
      }, 2000);
      setInterval(() => {
        document.title = "Tutles - Light Mode";
      }, 5000);
    } else {
      document.title = "Tutles - Dark Mode";
      setMode("dark");
      document.body.style.backgroundColor = "#0c465c";
      setAlertMsg("Dark mode has been enabled!", "dark");
      setTimeout(() => {
        setAlert(null);
      }, 2000);
      setInterval(() => {
        document.title = "Tutles - Text Extraction";
      }, 2000);
      setInterval(() => {
        document.title = "Tutles - Light Mode";
      }, 5000);
    }
  };
  return (
    <>
      <Router>
        <Navbar
          app="Tutles"
          home="Home"
          about="About Us"
          contact="Contact Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route
            exact
            path="/"
            element={
              <TextArea
                textLabel="Enter text to analyse below."
                mode={mode}
                setAlertMsg={setAlertMsg}
                setAlert={setAlert}
              />
            }
          />
        </Routes>
      </Router>

      {/* <About /> */}
    </>
  );
}

App.propTypes = {
  app: PropTypes.string,
  home: PropTypes.string,
  about: PropTypes.string,
  contact: PropTypes.string,
  textLabel: PropTypes.string,
};

export default App;
