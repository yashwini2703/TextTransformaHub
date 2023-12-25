import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpOnClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Uppercase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleDwOnClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To Lowercase", "success");
  };
  const handleTcOnClick = () => {
    let words = text.split(" ");

    let newText = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    newText = newText.join(" ");

    setText(newText);
    props.showAlert("Converted To Titlecase", "success");
  };

  const handleSnOnClick = () => {
    let words = text.split(".");

    let newText = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + ".";
    });
    newText = newText.join(" ");
    setText(newText);
    props.showAlert("Converted To Sentencecase", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces", "success");
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
     props.showAlert("Copied to Clipboard", "success");
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("TextArea is Cleared", "success");
  };

  return (
    <div style={{ color: props.mode === "light" ? "black" : "white" }}>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpOnClick}
          disabled={text.length === 0}
        >
          Convert To Uppercase
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleDwOnClick}
          disabled={text.length === 0}
        >
          Convert To Lowercase
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleTcOnClick}
          disabled={text.length === 0}
        >
          Convert to TitleCase
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleSnOnClick}
          disabled={text.length === 0}
        >
          Convert To SentenceCase
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpace}
          disabled={text.length === 0}
        >
          Remove Extra Spaces
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopyText}
          disabled={text.length === 0}
        >
          CopyText
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearText}
          disabled={text.length === 0}
        >
          ClearText
        </button>
      </div>
      <div className="container my-3">
        <h2>Text Summary </h2>
        <p>
          {text.length} Characters and{" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words
        </p>
        <p>
          Read Time:{" "}
          {text.split(/\s+/).filter((element) => {
            return element.length !== 0;
          }).length * 0.008}{" "}
          mins
        </p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing To Preview"}</p>
      </div>
    </div>
  );
}
