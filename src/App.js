// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
// import TextArea from "./components/TextArea";
// import About from ".components/About";
import About from "./components/About";
import PropTypes from "prop-types";

function App() {
  return (
    <>
      <Navbar app="Tutles" home="Home" about="About Us" contact="Contact Us" />
      {/* <TextArea textLabel="Enter text to analyse below." /> */}
      <About />
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
