import React, { useState } from "react";

function TextArea(props) {
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    setText(text.toUpperCase());
    if (text) {
      props.setAlertMsg("Text has been cenverted to Upper Case", "success");
      setTimeout(() => {
        props.setAlert(null);
      }, 2000);
    }
  };
  const handleLowerClick = () => {
    setText(text.toLowerCase());
    if (text) {
      props.setAlertMsg("Text has been cenverted to Lower Case", "success");
      setTimeout(() => {
        props.setAlert(null);
      }, 2000);
    }
  };
  const handleClear = () => {
    setText("");
    if (text) {
      props.setAlertMsg("Text has been clear", "success");
      setTimeout(() => {
        props.setAlert(null);
      }, 2000);
    }
  };
  const handleCopy = () => {
    let txt = document.getElementById("exampleFormControlTextarea1");
    txt.select();

    navigator.clipboard.writeText(txt.value);
    window.getSelection().removeAllRanges();
    if (text) {
      props.setAlertMsg("Text has been copied", "success");
      setTimeout(() => {
        props.setAlert(null);
      }, 2000);
    }
  };

  const handleExtraSpace = () => {
    let txt = text.split(/[ ]+/);
    setText(txt.join(" "));
    if (text) {
      props.setAlertMsg("Extra spaces has been removed", "success");
      setTimeout(() => {
        props.setAlert(null);
      }, 2000);
    }
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <div className="mt-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className={`form-label ${
              props.mode === "dark" ? "text-light" : "text-dark"
            }`}
          >
            {props.textLabel}
          </label>
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#055160d6" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="exampleFormControlTextarea1"
            rows="9"
            placeholder="Enter you text here"
            onChange={handleChange}
            value={text}
          ></textarea>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <button
              disabled={text.length === 0}
              type="button"
              className={`btn btn-sm btn-${
                props.mode === "light" ? "primary" : "light"
              } mt-2 mx-2`}
              onClick={handleClick}
            >
              Convert Upper
            </button>
            <button
              type="button"
              disabled={text.length === 0}
              className={`btn btn-sm btn-${
                props.mode === "light" ? "primary" : "light"
              } mt-2 mx-2`}
              onClick={handleLowerClick}
            >
              Convert Lower
            </button>
            <button
              type="button"
              disabled={text.length === 0}
              className={`btn btn-sm btn-${
                props.mode === "light" ? "primary" : "light"
              } mt-2 mx-2`}
              onClick={handleClear}
            >
              Clear
            </button>
            <button
              type="button"
              disabled={text.length === 0}
              className={`btn btn-sm btn-${
                props.mode === "light" ? "primary" : "light"
              } mt-2 mx-2`}
              onClick={handleCopy}
            >
              Copy
            </button>
            <button
              type="button"
              disabled={text.length === 0}
              className={`btn btn-sm btn-${
                props.mode === "light" ? "primary" : "light"
              } mt-2 mx-2`}
              onClick={handleExtraSpace}
            >
              Remove Extra Space
            </button>
          </div>
        </div>

        <div
          className={`container my-3 ${
            props.mode === "light" ? "text-dark" : "text-light"
          }`}
        >
          <h2>Your Text Summery</h2>
          <p>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            worlds and {text.length} charecters
          </p>

          <h2>Preview</h2>
          <p className="text-justify">
            {text.length > 0
              ? text
              : "Enter something in the above text box to preview it here. "}
          </p>
        </div>
      </div>
    </>
  );
}

export default TextArea;
