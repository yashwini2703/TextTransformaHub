import React from "react";

export default function About(props) {
 

  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "grey" : "white",
  };

 
  return (
    <>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Developer
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            style={myStyle}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                Welcome to our text transformation hub! I'm Ashwini Yadav, the
                creator of this platform. Thank you for choosing our site; I
                hope it proves beneficial for your text manipulation needs.
              </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Features
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            style={myStyle}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                {" "}
                <strong>Case Conversion:</strong> Easily switch between
                lowercase and uppercase, and vice versa, with a simple click.
              </p>
              <p>
                {" "}
                <strong>Sentence and Title Case:</strong> Transform your text
                into grammatically correct sentence or title case effortlessly.
              </p>
              <p>
                <strong>Word and Character Count:</strong> Get quick insights
                into the composition of your text with our word and character
                counting feature.
              </p>
              <p>
                {" "}
                <strong>Reading Time Estimation:</strong> Wondering how long it
                takes to read your text? We've got you covered. Find out the
                estimated reading time at a glance.
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
