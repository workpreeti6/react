import React, { useState } from "react";

function TextArea(props) {
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    setText(text.toUpperCase());
  };
  const handleLowerClick = () => {
    setText(text.toLowerCase());
  };
  const handleClear = () => {
    setText("");
  };

  const [text, setText] = useState("Welcome");
  return (
    <>
      <div className="container">
        <div className="mt-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {props.textLabel}
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="9"
            placeholder="Enter you text here"
            onChange={handleChange}
            value={text}
          ></textarea>
        </div>

        <button
          type="button"
          className="btn btn-primary mt-2 mx-2"
          onClick={handleClick}
        >
          Convert Upper
        </button>
        <button
          type="button"
          className="btn btn-primary mt-2 mx-2"
          onClick={handleLowerClick}
        >
          Convert Lower
        </button>
        <button
          type="button"
          className="btn btn-primary mt-2 mx-2"
          onClick={handleClear}
        >
          Clear
        </button>
        <div className="container my-3">
          <h2>Your Text Summery</h2>
          <p>
            {text.split(" ").length} worlds and {text.length} charecters
          </p>

          <h2>Preview</h2>
          <p className="text-justify">{text}</p>
        </div>
      </div>
    </>
  );
}

export default TextArea;
