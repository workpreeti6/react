import React, { useState } from "react";

function About(props) {
  // const [Style, setStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  // const [btn, setBtn] = useState("Enable Dark Mode");
  // const handleDark = () => {
  //   setStyle({ color: "white", backgroundColor: "black" });
  // };
  // const toogleMode = () => {
  //   if (Style.backgroundColor == "white") {
  //     setStyle({ color: "white", backgroundColor: "rgb(9 85 113 / 93%)" });
  //     setBtn("Enable Light Mode");
  //   } else {
  //     setStyle({ color: "black", backgroundColor: "white" });
  //     setBtn("Enable Dark Mode");
  //   }
  // };
  const myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "light" ? "white" : "rgb(0 40 56)",
    border: props.mode === "dark" ? "1px solid rgb(2 32 44)" : "",
  };

  return (
    <>
      <div className="container my-4">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
              <button
                style={myStyle}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Analyze Your Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Text analysis software, also called text analytics or text
                mining software, helps users gain insights from both structured
                and unstructured text data using natural language processing
                (NLP). Such insights include sentiment analysis, key phrases,
                language, themes and patterns, and entities, among others. These
                solutions leverage NLP and machine learning to pull out
                different insights and provide visual representations of the
                data for easier interpretation.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Free To Use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                This software is fully free to use. There is no limit of length
                of text.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Browser Compatibility</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                This software is fully functional on different browsers that are
                available in the market. The scripts on that website, should be
                compatible to run on the browsers. This is of immense
                importance, especially today when there is a large variety of
                web browsers available.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
